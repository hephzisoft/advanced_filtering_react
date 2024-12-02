import React from "react";

const Recommended = () => {
  return (
    <>
      <div className="flex flex-col ml-[3rem] mt-10">
        <h1 className="text-2xl font-semibold">Recommended</h1>
        <div className="flex gap-4 mt-10 recommended-btns">
          <button className="btns">All Products</button>
          <button className="btns">Nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Pumas</button>
          <button className="btns">Vanz</button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
