import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import AddExpense from "./Pages/AddExpense";
import MainLayout from "./components/MainLayout";

function App() {
    const [currency, setCurrency] = useState("₹");
    const [budget, setBudget] = useState(10000);
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const resetExpenses = () => {
        setExpenses([]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<MainLayout />}>
                    <Route index element={<Dashboard expenses={expenses} currency={currency} />} />
                    <Route path="reports" element={<Reports expenses={expenses} />} />
                    <Route path="settings" element={
                        <Settings 
                            currency={currency} 
                            setCurrency={setCurrency} 
                            budget={budget} 
                            setBudget={setBudget} 
                            resetExpenses={resetExpenses} 
                        />} 
                    />
                    <Route path="add-expense" element={<AddExpense addExpense={addExpense} currency={currency} />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
