import React from "react";

import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="flex border-b-[2px] border-solid border-[#f3f3f3] justify-around items-center p-[20px] z-[999] ">
      <div className="nav-container">
        <input
          type="text"
          className="py-[12px] px-[20px] bg-[#f7f6f6] outline-none mr-[20px] rounded-[5px] relative w-[25rem]"
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="flex profile-container">
        <a href="#">
          <FiHeart className="nav-icons w-[1.5rem] h-[1.5rem] ml-[2rem] text-black" />
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons w-[1.5rem] h-[1.5rem] ml-[2rem] text-black" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons w-[1.5rem] h-[1.5rem] ml-[2rem] text-black" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
