import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/LoginSignup/Login";
import Signup from "../components/LoginSignup/Signup";
import UserOnboarding from "../components/LoginSignup/UserOnboarding";
import CompanyOnboarding from "../components/LoginSignup/CompanyOnboarding";
import PrivateRoutes from "./PrivateRoutes";



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/user-onboarding" element={<UserOnboarding />} />
      <Route path="/company-onboarding" element={<CompanyOnboarding />} />

    </Routes>
  );
}

export default AllRoutes;
