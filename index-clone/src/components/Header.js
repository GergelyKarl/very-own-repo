import React from "react";
import "./Header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div className="header">
      <div className="header__one">
        <HeaderTop />
      </div>
      <HeaderMiddle />
    </div>
  );
};

export default Header;
