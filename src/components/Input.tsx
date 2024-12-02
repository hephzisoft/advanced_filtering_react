import React from "react";

type Props = {
  handleChange: (e: React.ChangeEvent) => void;
  value: string;
  title: string;
  name: string;
  color?: string;
};
const Input = ({ handleChange, value, title, name, color }: Props) => {
  return (
    <label htmlFor={title} className="sidebar-label-container">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        id={title}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
