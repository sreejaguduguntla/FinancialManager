import React from "react";
import "./Dashboard.css";
import { FiTrash2 } from "react-icons/fi"; // Import trash icon

const Dashboard = ({ expenses, deleteExpense }) => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="summary-cards">
        <div className="card total-expenses">
          <h3>Total Expenses</h3>
          <p>₹{expenses.reduce((total, exp) => total + parseFloat(exp.amount || 0), 0)}</p>
        </div>
        <div className="card recent-expenses">
          <h3>Recent Transactions</h3>
          <ul className="expense-list">
            {expenses.length === 0 ? (
              <p className="no-expense">No expenses added yet.</p>
            ) : (
              expenses.map((expense) => (
                <li key={expense.id} className="expense-item">
                  <div>
                    <strong className="expense-amount">₹{expense.amount}</strong>
                    <span className="expense-category"> {expense.category}</span>
                    <span className="expense-date"> on {expense.date}</span>
                  </div>
                  <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                    <FiTrash2 />
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
