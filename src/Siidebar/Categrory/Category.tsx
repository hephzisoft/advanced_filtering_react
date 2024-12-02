import React from "react";
import Input from "../../components/Input.tsx";

const Category = ({ handleChange }) => {
  return (
    <div className="h-1/3">
      <h2 className="mb-3 text-lg">Category</h2>

      <label htmlFor="all" className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="" id="all" />
        <span className="checkmark"></span>All
      </label>
    </div>
  );
};

export default Category;
