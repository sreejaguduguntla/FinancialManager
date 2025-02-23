import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import AddExpense from "./pages/AddExpense";
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
