import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Nav } from "../components/Navbar";
import Sidebar from "../components/sidebar";

const Main = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <div>
        <div>
          <Outlet></Outlet>
        </div>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
