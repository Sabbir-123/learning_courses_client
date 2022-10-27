import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Nav } from "../components/Navbar";
import Sidebar from "../components/sidebar";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Main;
