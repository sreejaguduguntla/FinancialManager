import React from "react";
import Navbar from "./navbar";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
