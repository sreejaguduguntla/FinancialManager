import React, { useState } from "react";
import "./AddExpense.css";

const AddExpense = ({ addExpense }) => {
  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment"];

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ amount: "", category: "", date: "", description: "" });
  };

  return (
    <div className="add-expense">
      <h2 className="title">Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label>Amount (₹)</label>
          <input type="number" name="amount" value={expense.amount} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select name="category" value={expense.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={expense.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={expense.description} onChange={handleChange} placeholder="Enter details..." />
        </div>

        <button type="submit" className="submit-btn">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
