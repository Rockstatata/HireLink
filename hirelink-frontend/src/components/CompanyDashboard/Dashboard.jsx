import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Button,
} from "@tremor/react";

import { companyService } from "../../services/companyService";

function Dashboard() {
  const [jobData, setJobData] = useState([]);
  const [applicants, setApplicants] = useState(0);
  const [closedJobs, setClosedJobs] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await companyService.getMyJobs();
      // Handle the response structure: { jobs, pagination }
      const jobs = response?.jobs || [];
      setJobData(jobs);
      
      // Calculate total applicants from all jobs
      const totalApplicants = jobs.reduce((total, job) => {
        return total + (job.applicants ? job.applicants.length : 0);
      }, 0);
      setApplicants(totalApplicants);

      // Calculate closed/inactive jobs
      const inactiveJobs = jobs.filter(job => job.isActive === false).length;
      setClosedJobs(inactiveJobs);
    } catch (error) {
      console.log(error);
      // Set empty array on error to prevent crashes
      setJobData([]);
      setApplicants(0);
      setClosedJobs(0);
    }
  };

  const navigate = useNavigate();
  const redirectToDetail = (id) => {
    navigate(`/job-management/${id}`);
  };

  return (
    <div className="px-5 pt-4">
      <div className="flex flex-wrap justify-between px-5 gap-2 my-8">
        <div className="h-16 w-56 rounded-xl border shadow flex gap-5 items-center justify-center hover:cursor-pointer">
          <div className="rounded-full h-10 w-10 p-2 bg-[var(--color-success)] flex justify-center items-center text-[var(--color-text-inverse)]">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className="flex flex-col justify-center ">
            <p className="font-semibold text-lg">{Array.isArray(jobData) ? jobData.length : 0}</p>
            <p className="text-xs text-gray-500">Job Listing</p>
          </div>
        </div>

        <div className="h-16 w-56 rounded-xl border shadow flex gap-5 items-center justify-center hover:cursor-pointer">
          <div className="rounded-full h-10 w-10 p-2 bg-[var(--color-primary)] flex justify-center items-center text-[var(--color-text-inverse)]">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="flex flex-col justify-center ">
            <p className="font-semibold text-lg">{applicants}</p>
            <p className="text-xs text-gray-500">Total Applications</p>
          </div>
        </div>
        <div className="h-16 w-56 rounded-xl border shadow flex gap-5 items-center justify-center hover:cursor-pointer">
          <div className="rounded-full h-10 w-10 p-2 bg-[var(--color-warning)] flex justify-center items-center text-[var(--color-text-inverse)]">
            <i className="fa-regular fa-rectangle-xmark"></i>
          </div>
          <div className="flex flex-col justify-center ">
            <p className="font-semibold text-lg">{closedJobs}</p>
            <p className="text-xs text-gray-500">Closed Jobs</p>
          </div>
        </div>

        <Link to="/dashboard/post-job">
          <div className="h-16 w-56 rounded-xl border shadow flex gap-5 items-center justify-center bg-[var(--color-text-primary)] hover:cursor-pointer">
            <div className="rounded-full h-10 w-10 p-2 bg-[var(--color-background)] flex justify-center items-center text-[var(--color-text-primary)]">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="font-semibold text-lg text-[var(--color-text-inverse)]">Post a Job</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-3 px-5">
        <Card>
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-lg">
            Job Listings
          </h3>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Job Title</TableHeaderCell>
                <TableHeaderCell>Applications</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(jobData) && jobData.length > 0 ? (
                jobData.map((job, index) => (
                  <TableRow key={index}>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>
                      <span className="font-medium">{job?.applicants?.length || 0}</span>
                    </TableCell>
                    <TableCell>
                      <Badge color={job.isActive !== false ? "emerald" : "red"}>
                        {job.isActive !== false ? "active" : "inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        color="black"
                        onClick={() => redirectToDetail(job._id)}
                      >
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-gray-500 py-8">
                    {Array.isArray(jobData) ? "No jobs posted yet" : "Loading jobs..."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
