import React from "react";
import "./Header.css";

import Logo from "./Logo";
import Search from "./Search";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
    </div>
  );
}

export default Header;
