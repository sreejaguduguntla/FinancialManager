import React, { useState } from "react";
import "./Reports.css";

const Reports = () => {
  // Sample past transactions
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2025-02-20", category: "Food", amount: 150, description: "Lunch at restaurant" },
    { id: 2, date: "2025-02-18", category: "Transport", amount: 80, description: "Bus fare" },
    { id: 3, date: "2025-02-15", category: "Shopping", amount: 1200, description: "Clothes shopping" },
    { id: 4, date: "2025-02-10", category: "Bills", amount: 500, description: "Electricity bill" },
  ]);

  return (
    <div className="reports-container">
      <h2>Transaction Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount (₹)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.date}</td>
              <td>{txn.category}</td>
              <td>{txn.amount}</td>
              <td>{txn.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
