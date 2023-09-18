import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [inputError, setInputError] = useState({
    email: null,
    password: null,
  });

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const isValid = checkValidData(email.current.value, password.current.value);

    if ("Email ID is not valid" === isValid) {
      setInputError({ ...inputError, email: isValid });
    } else if ("Password not valid" === isValid) {
      setInputError({ ...inputError, password: isValid });
    } else if (isValid === null) {
      setInputError({ email: null, password: null });
    }
  };

  return (
    <div className="font-poppins ">
      <Header />
      <div className="absolute  ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute w-3/12 bg-black p-12 text-white mx-auto my-36 right-0 left-0 bg-opacity-80">
        {signUp && (
          <div
            className="m-4 relative text-right hover:underline hover:cursor-pointer"
            onClick={() => setSignUp(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 absolute right-0 mr-[70px]"
            >
              <path
                fill-rule="evenodd"
                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                clip-rule="evenodd"
              />
            </svg>
            Go Back
          </div>
        )}
        <h1 className="text-3xl m-4 ">{signUp ? "Sign Up" : "Sign In"}</h1>
        {signUp && (
          <input
            className="p-3 w-full rounded-md bg-[#333] m-4 "
            type="text"
            placeholder="FullName"
            ref={fullname}
          />
        )}
        <input
          className={`p-3 w-full rounded-md bg-[#333] m-4 ${
            inputError.email && "border-b-2 border-b-[#e87c03]"
          }`}
          type="email"
          placeholder="Email Id"
          ref={email}
        />
        <label className="p-3 m-4 text-[#e87c03]">{inputError.email}</label>

        <input
          className={`p-3 w-full rounded-md bg-[#333] m-4 ${
            inputError.password && "border-b-2 border-b-[#e87c03]"
          }`}
          type="password"
          placeholder="Password"
          ref={password}
        />
        <label className="p-3 m-4 text-[#e87c03]">{inputError.password}</label>
        <button
          className="bg-red-700 w-full p-4 rounded-lg text-xl m-4"
          onClick={handleButtonClick}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>

        {signUp ? (
          <></>
        ) : (
          <p className="m-4 ">
            New to Netflix?{" "}
            <span
              className="font-extrabold  hover:cursor-pointer hover:underline"
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
