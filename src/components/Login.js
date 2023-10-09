import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BKG_IMG_LOGIN } from "../utils/constants";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState({
    email: null,
    password: null,
    auth: null,
  });
  const dispatch = useDispatch();

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

const signInFunc = async (auth, email, password) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);

    const user = data.user;
    console.log(data, user);
  } catch (e) {}
};
const signUpFunc = async (auth, email1, password) => {
  const res1 = await createUserWithEmailAndPassword(auth, email1, password);
  const user = res1.user;
  // const res2 = await updateProfile(res1, { displayName: fullname });
  console.log(auth, user);
  // console.log(res2);
  // const { uid, email, displayName } = res2.user;
  // dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
};
const handleButtonClick = (e) => {
  e.preventDefault();

  const isValid =
    signUp && checkValidData(email.current.value, password.current.value);

  if ("Email ID is not valid" === isValid) {
    setError({ ...error, email: isValid });
  } else if ("Password not valid" === isValid) {
    setError({ ...error, password: isValid });
  } else if (isValid === null) {
    setError({ email: null, password: null });
  }

  if (isValid) return;

  if (signUp) {
    //SignUp logic
    // signUpFunc(
    //   auth,
    //   email.current.value,
    //   password.current.value,
    //   fullname.current.value
    // );
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: fullname.current.value,
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName } = user;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          })
          .catch((error) => {
            // An error occurred
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setError({ ...error, auth: errorMessage + "-" + errorCode });
      });
  } else {
    //sign in logic
    signInFunc(auth, email.current.value, password.current.value);
    // signInWithEmailAndPassword(
    //   auth,
    //   email.current.value,
    //   password.current.value
    // )
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setError({ ...error, auth: errorMessage + "-" + errorCode });
    //   });
  }
};

  return (
    <div className="font-poppins">
      <Header />
      <div className="relative bg-black h-[100vh]">
        <img
          className="hidden md:block md:bg-contain overflow-hidden w-full h-full bg-cover"
          src={BKG_IMG_LOGIN}
          alt="bg-img"
        />
      </div>
      <form className="absolute w-full p-2 bg-black text-white mx-auto my-16 md:w-5/12 md:p-5  md:my-24 lg:my-36 lg:w-[440px] right-0 left-0 top-0 bg-opacity-80 ">
        {signUp && (
          <div
            className="w-5/6 mt-4 relative text-right hover:underline hover:cursor-pointer"
            onClick={() => setSignUp(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 absolute right-0 mr-[70px]"
            >
              <path
                fillRule="evenodd"
                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
            Go Back
          </div>
        )}
        <h1 className="w-5/6 text-2xl lg:text-3xl md:m-4 ">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {signUp && (
          <input
            className="p-3 w-5/6 rounded-md bg-[#333] m-4 "
            type="text"
            placeholder="FullName"
            ref={fullname}
          />
        )}
        <input
          className={`p-3 w-5/6 rounded-md bg-[#333] m-4 ${
            error.email && "border-b-2 border-b-[#e87c03]"
          }`}
          type="email"
          placeholder="Email Id"
          ref={email}
        />
        <span className={error.email && `p-3 m-4 text-[#e87c03]`}>
          {error.email}
        </span>

        <input
          className={`p-3 w-5/6 rounded-md bg-[#333] m-4 ${
            error.password && "border-b-2 border-b-[#e87c03]"
          }`}
          type="password"
          placeholder="Password"
          ref={password}
        />
        <span className={error.password && `p-3 m-4 text-[#e87c03]`}>
          {error.password}
        </span>
        <button
          className="bg-[#e50914] w-5/6 p-4 rounded-lg text-xl m-4"
          onClick={handleButtonClick}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        {error.auth && (
          <span className="p-3 m-4 text-red-700">{error.auth}</span>
        )}
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
