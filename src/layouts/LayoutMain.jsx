import React from "react";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

const LayoutMain = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutMain;
