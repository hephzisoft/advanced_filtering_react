import React from "react";
import Category from "./Categrory/Category.tsx";
import Price from "./Price/Price.tsx";
import Colors from "./Colors/Colors.tsx";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar flex flex-col h-[100%] w-[15%] border-r-2 border-[#e5e5e5]  items-center px-2 fixed z-3 ">
        <div className="logo-container">
          <h1 className="my-5 text-4xl">🛒</h1>
        </div>

        <div className="flex flex-col h-[85%]">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
