import React from "react";

const Input = ({ name, type, placeholder, onChangeHandler, value }) => {
  return (
    <input
      className="px-3 py-3 w-3/5 mx-auto text-sm rounded-sm focus:outline-none focus:border-2 focus:border-[#8d4c9aad] focus:rounded-md placeholder:text-[#70367C] placeholder:opacity-60"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
