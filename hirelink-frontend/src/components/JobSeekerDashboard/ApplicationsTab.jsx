import React, { useState, useEffect } from 'react';
import { userService } from '../../services/userService';
import { Link } from 'react-router-dom';

function ApplicationsTab() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await userService.getMyApplications();
      setApplications(response?.data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'reviewed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'shortlisted': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'hired': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'fas fa-clock';
      case 'reviewed': return 'fas fa-eye';
      case 'shortlisted': return 'fas fa-check-circle';
      case 'rejected': return 'fas fa-times-circle';
      case 'hired': return 'fas fa-trophy';
      default: return 'fas fa-question-circle';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="fas fa-paper-plane text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
          <p className="text-gray-500 mb-6">Start applying to jobs to see your applications here.</p>
          <Link
            to="/jobs"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            <i className="fas fa-search mr-2"></i>
            Browse Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Applications Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <i className="fas fa-paper-plane text-blue-600"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total</p>
              <p className="text-lg font-semibold text-gray-900">{applications.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <i className="fas fa-clock text-yellow-600"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-lg font-semibold text-gray-900">
                {applications.filter(app => app.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <i className="fas fa-check-circle text-green-600"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Shortlisted</p>
              <p className="text-lg font-semibold text-gray-900">
                {applications.filter(app => app.status === 'shortlisted').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <i className="fas fa-times-circle text-red-600"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Rejected</p>
              <p className="text-lg font-semibold text-gray-900">
                {applications.filter(app => app.status === 'rejected').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">My Applications</h2>
          <p className="text-sm text-gray-500 mt-1">Track the status of your job applications</p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {applications.map((application) => (
            <div key={application._id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    {/* Company Logo Placeholder */}
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-building text-gray-400"></i>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {application.job?.title || 'Job Title Not Available'}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {application.job?.company?.name || application.job?.company || 'Company Name Not Available'}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <i className="fas fa-map-marker-alt mr-1"></i>
                          {application.job?.location || 'Location not specified'}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-briefcase mr-1"></i>
                          {application.job?.jobType || 'Job type not specified'}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-calendar mr-1"></i>
                          Applied {new Date(application.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(application.status)}`}>
                          <i className={`${getStatusIcon(application.status)} mr-1`}></i>
                          {application.status || 'Pending'}
                        </span>
                        
                        {application.job?.salaryRange && (
                          <span className="text-sm text-gray-600">
                            <i className="fas fa-dollar-sign mr-1"></i>
                            {application.job.salaryRange.min} - {application.job.salaryRange.max} {application.job.salaryRange.currency}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  {application.job?._id && (
                    <Link
                      to={`/jobs/${application.job._id}`}
                      className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <i className="fas fa-eye mr-1"></i>
                      View Job
                    </Link>
                  )}
                </div>
              </div>
              
              {/* Additional Application Details */}
              {application.coverLetter && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Cover Letter:</span> {application.coverLetter.substring(0, 150)}...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApplicationsTab;