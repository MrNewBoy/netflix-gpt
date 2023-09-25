import React, { useEffect } from "react";
import { LOGO_URL, PROFILE_IMG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ({ signout }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div
      className={`${
        signout ? "" : "absolute"
      } z-10 w-full bg-gradient-to-b from-black`}
    >
      <img
        className={`w-28 ${!signout && "mt-2"} lg:w-52`}
        src={LOGO_URL}
        alt="logo"
      ></img>
      {signout && (
        <span className="absolute right-0 top-1">
          <span>
            <p className="inline text-lg text-white p-2 ">
              {user?.displayName}
            </p>
            <img
              className="w-8 inline"
              alt="profile-img"
              src={PROFILE_IMG}
            ></img>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline m-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>

          <button
            className="bg-red-700 text-white p-2 rounded-lg text-lg m-4"
            onClick={handleSignOut}
          >
            Sign Out{" "}
          </button>
        </span>
      )}
    </div>
  );
};

export default Header;
