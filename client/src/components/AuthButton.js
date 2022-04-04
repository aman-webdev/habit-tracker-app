import React from "react";

const AuthButton = ({ text }) => {
  return (
    <button
      className="mt-4 text-lg w-3/5 bg-[#652675] rounded-md text-white px-4 py-2 mx-auto"
      type="submit"
    >
      {text}
    </button>
  );
};

export default AuthButton;
