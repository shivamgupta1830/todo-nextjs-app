import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around bg-gray-200">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <ul className="flex gap-[40px] text-base">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
