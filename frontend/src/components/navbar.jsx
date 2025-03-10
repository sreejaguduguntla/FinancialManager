import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Finance Manager</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reports" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/add-expense" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Add Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
