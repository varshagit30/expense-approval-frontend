import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route element={<ProtectedRoute />}>
                {/* <Route path="*" element={<Navigate to="/login" />} /> */}
            </Route>
        </Routes >
    );
};

export default AppRoutes;
