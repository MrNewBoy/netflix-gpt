import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black">
      <img className="w-28 mt-2 lg:w-52" src={LOGO_URL} alt="logo"></img>
    </div>
  );
};

export default Header;
