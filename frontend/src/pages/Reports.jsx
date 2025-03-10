import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./Reports.css";

const Reports = ({ expenses }) => {
  // Group expenses by category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Chart Data
  const barChartData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Expense Amount (₹)",
        data: Object.values(categoryTotals),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"],
      },
    ],
  };

  const pieChartData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"],
      },
    ],
  };

  return (
    <div className="reports">
      <h2 className="reports-title">Expense Reports</h2>
      
      <div className="charts-container">
        <div className="chart">
          <h3>Expense Breakdown (Bar Chart)</h3>
          <Bar data={barChartData} />
        </div>

        <div className="chart">
          <h3>Expense Distribution (Pie Chart)</h3>
          <Pie data={pieChartData} />
        </div>
      </div>

      <div className="report-list">
        <h3>Past Expenses</h3>
        {expenses.length === 0 ? (
          <p className="no-report">No expenses to show.</p>
        ) : (
          expenses.map((expense, index) => (
            <div key={index} className="report-item">
              <p><strong>Amount:</strong> ₹{expense.amount}</p>
              <p><strong>Category:</strong> {expense.category}</p>
              <p><strong>Date:</strong> {expense.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reports;
