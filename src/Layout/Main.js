import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div
    // className="flex flex-col h-screen"
    >
      <Navbar />
      {/* <div className="flex-grow"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Main;
