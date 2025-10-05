import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import JobListing from "../Pages/JobListing";
import Login from "../components/LoginSignup/Login";
import Signup from "../components/LoginSignup/Signup";
import UserOnboarding from "../components/LoginSignup/UserOnboarding";
import CompanyOnboarding from "../components/LoginSignup/CompanyOnboarding";
import Dashboard from "../Pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<JobListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/user-onboarding" element={<PrivateRoutes><UserOnboarding /></PrivateRoutes>} />
      <Route path="/company-onboarding" element={<PrivateRoutes><CompanyOnboarding /></PrivateRoutes>} />
      <Route path="/dashboard/home" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />

    </Routes>
  );
}

export default AllRoutes;
