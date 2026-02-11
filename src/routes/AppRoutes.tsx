import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import ExpenseList from "../pages/Expenses/ExpenseList";
import AppLayout from "../layouts/AppLayout";
import CreateExpense from "../pages/CreateExpense/CreateExpense";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Default route */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Public route */}
            <Route path="/login" element={<Login />} />

            {/* Protected routes WITH layout */}
            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/expenses" element={<ExpenseList />} />
                    <Route path="/expenses/new" element={<CreateExpense />} />
                </Route>

                {/* Protected route WITHOUT layout (full-screen form) */}
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>

    );
};

export default AppRoutes;
