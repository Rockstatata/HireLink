import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import JobListing from "../Pages/JobListing";
import Login from "../components/LoginSignup/Login";
import Signup from "../components/LoginSignup/Signup";
import UserOnboarding from "../components/LoginSignup/UserOnboarding";
import CompanyOnboarding from "../components/LoginSignup/CompanyOnboarding";
import Dashboard from "../Pages/Dashboard";
import CompanyDashboard from "../Pages/CompanyDashboard";
import PrivateRoutes from "./PrivateRoutes";
import JobPosting from "../Pages/JobPosting";
import JobDetails from "../Pages/JobDetails";
import JobManagement from "../components/CompanyDashboard/JobManagement";
import JobSeekerDashboard from "../components/JobSeekerDashboard/JobSeekerDashboard";
import Companies from "../Pages/Companies";
import UserProfile from "../Pages/UserProfile";
import UserPublicProfile from "../Pages/UserPublicProfile";
import Messages from "../Pages/Messages";



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/jobs" element={<PrivateRoutes><JobListing /></PrivateRoutes>} />
      <Route path="/jobs/:id" element={<PrivateRoutes><JobDetails /></PrivateRoutes>} />
      <Route path="/companies" element={<PrivateRoutes><Companies /></PrivateRoutes>} />

      <Route path="/user-onboarding" element={<PrivateRoutes><UserOnboarding /></PrivateRoutes>} />
      <Route path="/company-onboarding" element={<PrivateRoutes><CompanyOnboarding /></PrivateRoutes>} />
      
      {/* Job Seeker Dashboard Routes */}
      <Route path="/my-dashboard" element={<PrivateRoutes><JobSeekerDashboard /></PrivateRoutes>} />
      <Route path="/jobseeker/profile" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
      <Route path="/jobseeker/jobs" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
      <Route path="/jobseeker/applications" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />

      {/* Company Dashboard Routes */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoutes>
            <CompanyDashboard />
          </PrivateRoutes>
        }
      />
      <Route path="/user/:id" element={<UserPublicProfile />} />

      <Route
        path="/post-new-job"
        element={
          <PrivateRoutes>
            <JobPosting />
          </PrivateRoutes>
        }
      />
      
      {/* Company Job Management */}
      <Route 
        path="/job-management/:jobId" 
        element={
          <PrivateRoutes>
            <JobManagement />
          </PrivateRoutes>
        } 
      />
      {/* User Profile Route */}
    <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        }
      />

      {/* Messages Route */}
      <Route
        path="/messages"
        element={
          <PrivateRoutes>
            <Messages />
          </PrivateRoutes>
        }
      />

    </Routes>
  );
}

export default AllRoutes;
