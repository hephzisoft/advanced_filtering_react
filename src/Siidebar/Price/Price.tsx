import React from "react";
import Input from "../../components/Input.tsx";

const Price = ({ handleChange }) => {
  return (
    <div className="h-1/3">
      <h2 className="my-3 text-lg sidebar-title price-title">Price</h2>

      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};

export default Price;
