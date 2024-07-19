const Home = () => {
  return (
    <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-16 px-2 mx-auto">
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          className="px-3 py-2  border-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Enter description"
          className="px-3 py-2 border-2 w-full"
        />
        <button
          type="submit"
          className="bg-gray-900 hover:bg-gray-800 py-3 px-11 text-white"
        >
          Add
        </button>
      </form>

      <div className="relative overflow-x-auto my-16 mx-auto w-[60%]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900">
          <thead className="text-xs text-gray-900 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
