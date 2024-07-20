"use client";
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get("/api");

    setTodoData(response.data.todos);
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      },
    });
    toast.success(response.data.msg);
    await fetchTodos();
  };
  const completeTodo = async (id) => {
    const response = await axios.put(
      "/api",
      {},
      {
        params: {
          mongoId: id,
        },
      }
    );
    toast.success(response.data.msg);
    await fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (formData.title && formData.description) {
        const response = await axios.post("/api", formData);
        toast.success(response.data.msg);
        setFormData({
          title: "",
          description: "",
        });
        await fetchTodos();
      } else toast.error("Fill all details");
    } catch (error) {
      toast.error("Error");
    }
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-16 px-2 mx-auto"
      >
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          className="px-3 py-2  border-2 w-full"
          onChange={onChangeHandler}
          value={formData.title}
        />
        <textarea
          name="description"
          placeholder="Enter description"
          className="px-3 py-2 border-2 w-full"
          onChange={onChangeHandler}
          value={formData.description}
        />
        <button
          type="submit"
          className="bg-gray-900 hover:bg-gray-800 py-3 px-11 text-white"
          onClick={onSubmitHandler}
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto my-16 mx-auto w-[60%]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900">
          <thead className="text-xs text-gray-900 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  id={index}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
