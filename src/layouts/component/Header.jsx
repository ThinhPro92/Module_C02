import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        gap: "10px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: "none" }} to="/register">
        Dang ky
      </Link>
      <Link style={{ textDecoration: "none" }} to="/login">
        Dang nhap
      </Link>
      <Link style={{ textDecoration: "none" }} to="/product">
        San pham
      </Link>
      <Link style={{ textDecoration: "none" }} to="/category">
        Danh muc
      </Link>
    </div>
  );
};

export default Header;
