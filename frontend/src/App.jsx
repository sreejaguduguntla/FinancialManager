import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/dashboard";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import AddExpense from "./Pages/AddExpense";
import MainLayout from "./components/MainLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="add-expense" element={<AddExpense />} />
                </Route>
            </Routes>
        </Router>
    );
}


export default App;
