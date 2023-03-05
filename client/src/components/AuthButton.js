import React from "react";
import PulseLoader   from "react-spinners/PulseLoader";
const AuthButton = ({ text,loading }) => {
  return (
    loading ?<div className="mt-4 text-lg w-3/5 bg-[#652675]  rounded-md text-white px-4 py-2 mx-auto flex justify-center items-center"> <PulseLoader size={5}   loading={loading} color="white"  /></div>  :
    <button
      className="mt-4 text-lg w-3/5 bg-[#652675]  rounded-md text-white px-4 py-2 mx-auto"
      type="submit"
    >
      
      {text}
    </button>
  );
};

export default AuthButton;
