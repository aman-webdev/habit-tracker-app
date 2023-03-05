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
  const [isLoading,setisLoading] = useState(false);
  const [isGuest,setisGuest] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user.token) {
      navigate("/dashboard");
    }
  }, [dispatch, navigate, user]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    if(!isGuest){ 
     const  validationResult = validateFields();

    if (!validationResult) {
      try {
        setisLoading(true)
        dispatch(signin(loginData,setisLoading));
      } catch (e) {
        console.log(e);
        setisLoading(false);
      }
    } else {
      notify(`Please enter ${validationResult}`);
    }
  }
  };

  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch({ type: "AUTH", payload: { result, token } });
    dispatch(changeLoginState());
    navigate("/dashboard");
   
  };

  const googleFailure = (e) => {
    console.log(e);
  };

  const validateFields = () => {
    console.log("this called")
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

  const loginAsGuest=async()=>{
    setisGuest(true);
    const email = process.env.REACT_APP_GUEST_EMAIL;
    const password = process.env.REACT_APP_GUEST_PASSWORD;
 try {
        setisLoading(true)
        dispatch(signin({email,password},setisLoading));
      } catch (e) {
        console.log(e);
        setisLoading(false);
        setisGuest(false);
      }
  }

  return (
    <motion.div className="w-full h-screen flex justify-center md:justify-between sm:px-10 px-2 items-center  bg-[#F5F5F5] overflow-hidden">
      <div className="text-center  md:w-1/2 w-full z-10 overflow-hidden">
        <h1 className="text-2xl font-medium mb-3 text-[#652675]">
          Welcome Back!
        </h1>
        <p className="text-[#652675]">We are happy to have you back</p>
        <form className="flex flex-col gap-3 mt-7" onSubmit={onLoginSubmit}>
          <Input
            value={loginData.email}
            name="email"
            type="email"
            onChangeHandler={onChangeHandler}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            value={loginData.password}
            onChangeHandler={onChangeHandler}
            placeholder="Password"
          />
          <AuthButton text="Login" loading={isLoading} />
          <button onClick={loginAsGuest} className="text-xs text-[#652675] bg-[rgba(0,0,0,.05)] w-1/3 mx-auto p-2 rounded-md" >Login as Guest</button>
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
              className="mt-6 mx-auto py-2 px-8 cursor-pointer bg-white rounded-md hover:border-[#9f49b4c2] transition-colors hover:border-1"
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
      <div className="overflow-hidden   absolute md:relative opacity-20 md:opacity-100">
        <LoginIllustration className="overflow-hidden w-full" />
      </div>
      <Toastify />
    </motion.div>
  );
};

export default Login;
