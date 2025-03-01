import { Link } from "react-router-dom";
import "./Navbar.css"; // If you have styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Expense Manager</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/reports">Reports</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
        <li><Link to="/dashboard/add-expense">Add Expense</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
