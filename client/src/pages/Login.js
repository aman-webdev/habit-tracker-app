import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../actions/userAction";
import Input from "../components/Input";
import { GoogleLogin } from "react-google-login";
import AuthButton from "../components/AuthButton";
import { changeLoginState } from "../actions/utilsAction";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LoginIllustration } from "../assets/login.svg";
import { notify, Toastify } from "../utils/notify";
import { motion } from "framer-motion";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state);
  console.log(user.result);

  useEffect(() => {
    if (user.token) {
      console.log("first");

      navigate("/dashboard");
    }
  }, [dispatch, navigate, user]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    const validationResult = validateFields();
    console.log(validationResult);
    if (!validationResult) {
      try {
        dispatch(signin(loginData));
      } catch (e) {
        console.log(e);
      }
    } else {
      notify(`Please enter ${validationResult}`);
    }
  };

  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch({ type: "AUTH", payload: { result, token } });
    dispatch(changeLoginState());
    navigate("/dashboard");
    console.log(res);
  };

  const googleFailure = (e) => {
    console.log(e);
  };

  const validateFields = () => {
    const { email, password } = loginData;
    if (!email) {
      return "Email";
    }
    if (!email.includes("@")) {
      return "Proper Email";
    }
    if (!password) {
      return "Password";
    }
    console.log(password.length);
    if (password.length < 6) return "Password greater than 6 characters";
  };

  return (
    <motion.div className="w-full h-screen flex justify-between px-10 items-center  bg-[#F5F5F5]">
      <div className="text-center w-1/2 ">
        <h1 className="text-2xl font-medium mb-3 text-[#652675]">
          Welcome Back!
        </h1>
        <p className="text-[#652675]">We are happy to have you back</p>
        <form className="flex flex-col gap-3 mt-7" onSubmit={onLoginSubmit}>
          <Input
            value={loginData.email}
            name="email"
            onChangeHandler={onChangeHandler}
            placeholder="Email"
          />
          <Input
            name="password"
            value={loginData.password}
            onChangeHandler={onChangeHandler}
            placeholder="Password"
          />
          <AuthButton text="Login" />
          <Link to="/register" className="text-xs text-[#652675]">
            Don't have an account?
          </Link>
        </form>
        <p className="text-sm text-[#652675] opacity-70 mt-5">Or</p>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="mt-6 mx-auto py-2 px-8 bg-white rounded-md hover:border-[#9f49b4c2] transition-colors hover:border-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-google"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#652675"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
              </svg>
            </button>
          )}
        />
      </div>
      <div className="overflow-hidden">
        <LoginIllustration />
      </div>
      <Toastify />
    </motion.div>
  );
};

export default Login;
