import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="font-poppins ">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute w-3/12 bg-black p-12 text-white mx-auto my-36 right-0 left-0 bg-opacity-80">
        {signUp && (
          <div
            className="m-4 text-right hover:underline hover:cursor-pointer"
            onClick={() => setSignUp(false)}
          >
            Go Back
          </div>
        )}
        <h1 className="text-3xl m-4 ">{signUp ? "Sign Up" : "Sign In"}</h1>
        {signUp && (
          <input
            className="p-3 w-full rounded-md bg-[#333] m-4 "
            type="text"
            placeholder="FullName"
          />
        )}
        <input
          className="p-3 w-full rounded-md bg-[#333] m-4 "
          type="email"
          placeholder="Email Id"
        />

        <input
          className="p-3 w-full rounded-md bg-[#333] m-4"
          type="password"
          placeholder="Password"
        />

        <button className="bg-red-700 w-full p-4 rounded-lg text-xl m-4">
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
