import React, { useState } from "react";
import "./Settings.css";

const Settings = ({ currency, setCurrency, budget, setBudget, resetExpenses }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="settings">
      <h2>Settings</h2>

      {/* Change Currency */}
      <div className="setting-item">
        <label>Preferred Currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="₹">₹ INR</option>
          <option value="$">$ USD</option>
          <option value="€">€ EUR</option>
        </select>
      </div>

      {/* Set Monthly Budget */}
      <div className="setting-item">
        <label>Monthly Budget:</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      {/* Enable Dark Mode */}
      <div className="setting-item">
        <label>Dark Mode:</label>
        <button onClick={handleDarkMode} className="toggle-btn">
          {darkMode ? "Disable" : "Enable"}
        </button>
      </div>

      {/* Reset Expenses */}
      <div className="setting-item">
        <button onClick={resetExpenses} className="reset-btn">
          Reset All Expenses
        </button>
      </div>
    </div>
  );
};

export default Settings;
