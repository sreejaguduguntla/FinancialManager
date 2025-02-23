import React, { useState } from "react";
import "./AddExpense.css"; // Import CSS

console.log("AddExpense component loaded");

function AddExpense() {
  const [expense, setExpense] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense added: ${expense}`);
    setExpense("");
  };

  return (
    <div className="add-expense-container">
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddExpense;
