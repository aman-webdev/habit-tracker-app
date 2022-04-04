import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as RegisterIllustration } from "../assets/register.svg";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../actions/userAction";
import Input from "../components/Input";
import { changeLoginState } from "../actions/utilsAction";
import AuthButton from "../components/AuthButton";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(registerData));
    dispatch(changeLoginState());
    navigate("/dashboard");
    console.log(registerData);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  return (
    <div className="w-full h-screen flex justify-between px-10 items-center  bg-[#F5F5F5]">
      <div className="text-center w-1/2 ">
        <h1 className="text-3xl  uppercase mb-3 text-[#652675]">
          Start tracking Habits!
        </h1>
        {/* <p className="text-[#652675] text-sm">
          First forget inspiration. Habit is more dependable. Habit will sustain
          you whether you’re inspired or not
        </p> */}
        <form className="flex flex-col gap-3 mt-7" onSubmit={onRegisterSubmit}>
          <Input
            name="firstName"
            value={registerData.firstName}
            onChangeHandler={onChangeHandler}
            placeholder="First Name"
          />
          <Input
            name="lastName"
            value={registerData.lastName}
            onChangeHandler={onChangeHandler}
            placeholder="Last Name"
          />
          <Input
            name="email"
            value={registerData.email}
            onChangeHandler={onChangeHandler}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            value={registerData.password}
            onChangeHandler={onChangeHandler}
            placeholder="Password"
          />
          <Input
            name="confirmPassword"
            type="password"
            value={registerData.confirmPassword}
            onChangeHandler={onChangeHandler}
            placeholder="Confirm Password"
          />
          <AuthButton text="Register" />
          <Link to="/" className="text-xs text-[#652675]">
            Already have an Account?
          </Link>
        </form>
      </div>
      <div className="overflow-hidden">
        <RegisterIllustration />
      </div>
    </div>
  );
};

export default Register;
