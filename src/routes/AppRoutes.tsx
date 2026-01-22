import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import ExpenseList from "../pages/Expenses/ExpenseList";
import AppLayout from "../layouts/AppLayout";

const AppRoutes = () => {
    return (
        // <Routes>
        //     <Route path="/login" element={<Login />} />
        //     <Route path="/home" element={<Home />} />
        //     <Route path="/expenses" element={<ExpenseList />} />
        //     <Route element={<ProtectedRoute />}>
        //         {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        //     </Route>
        // </Routes >

        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            <Route element={<AppLayout />} >
                <Route path="/home" element={<Home />} />
                <Route path="/expenses" element={<ExpenseList />} /></Route>
            <Route element={<ProtectedRoute />}>
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>

    );
};

export default AppRoutes;
