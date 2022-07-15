import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as RegisterIllustration } from "../assets/register.svg";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../actions/userAction";
import Input from "../components/Input";
import { changeLoginState } from "../actions/utilsAction";
import AuthButton from "../components/AuthButton";
import { notify, Toastify } from "../utils/notify";

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
    const validationResult = validateFields();
    console.log(validationResult);
    if (validationResult) {
      notify(validationResult);
    } else {
      dispatch(signup(registerData));
      dispatch(changeLoginState());
      navigate("/dashboard");
      console.log(registerData);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const validateFields = () => {
    const { email, password, firstName, lastName, confirmPassword } =
      registerData;
    if (!firstName) return "Please enter First Name";
    if (!lastName) return "Please enterLast Name";

    const checkForNumbersFirst = /\d/.test(firstName);
    const checkForNumbersLast = /\d/.test(lastName);

    if (checkForNumbersFirst) return "First Name cannot have numbers";
    if (checkForNumbersLast) return "Last Name cannot have numbers";

    if (!email) {
      return "Please enter Email";
    }
    if (!email.includes("@")) {
      return "Please enter Proper Email";
    }

    if (!password) {
      return "Please enter Password";
    }

    if (password.length < 6)
      return "Password must be greater than 6 characters";

    if (password !== confirmPassword)
      return "Password and Confirm Password does not match! ";
  };

  return (
    <div className="w-full h-screen flex  justify-center md:justify-between px-4 md:px-10 items-center  bg-[#F5F5F5]">
      <div className="text-center md:w-1/2 w-full z-10 ">
        <h1 className="text-2xl  mb-3 text-[#652675]">
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
      <div className="overflow-hidden md:relative absolute opacity-20 md:opacity-100">
        <RegisterIllustration className="overflow-hidden w-full md:w-3/4" />
      </div>
      <Toastify />
    </div>
  );
};

export default Register;
