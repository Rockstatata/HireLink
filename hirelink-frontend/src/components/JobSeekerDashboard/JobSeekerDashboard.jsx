import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/userService";
import { messageService } from "../../services/messageService";

function JobSeekerDashboard() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // These endpoints need to be implemented in the backend
      const [savedJobsResponse, applicationsResponse, messagesResponse, unreadResponse] = await Promise.all([
        userService.getSavedJobs(),
        userService.getMyApplications(),
        messageService.getMyMessages({ limit: 10 }),
        messageService.getUnreadMessageCount()
      ]);
      
      setSavedJobs(savedJobsResponse || []);
      setApplications(applicationsResponse || []);
      setMessages(messagesResponse?.data?.messages || []);
      setUnreadCount(unreadResponse?.data?.unreadCount || 0);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 pt-20">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
        <p className="text-gray-600">Track your job applications and saved jobs</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'applications'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            My Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'saved'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Saved Jobs ({savedJobs.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`py-2 px-1 border-b-2 font-medium text-sm relative ${
              activeTab === 'messages'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Messages ({messages.length})
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <i className="fas fa-paper-plane text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{applications.length}</h3>
                <p className="text-sm text-gray-600">Applications</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <i className="fas fa-bookmark text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{savedJobs.length}</h3>
                <p className="text-sm text-gray-600">Saved Jobs</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {applications.filter(app => app.status === 'pending').length}
                </h3>
                <p className="text-sm text-gray-600">Pending</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Applications Tab */}
      {activeTab === 'applications' && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">My Applications</h2>
          </div>
          <div className="p-6">
            {applications.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <i className="fas fa-inbox text-4xl mb-4"></i>
                <p>No applications yet</p>
                <button
                  onClick={() => navigate('/jobs')}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Browse Jobs
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application._id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {application.job?.title || 'Job Title'}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {application.job?.company || 'Company Name'}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Applied: {new Date(application.createdAt).toLocaleDateString()}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate(`/jobs/${application.job?._id}`)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                      >
                        View Job
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Saved Jobs Tab */}
      {activeTab === 'saved' && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Saved Jobs</h2>
          </div>
          <div className="p-6">
            {savedJobs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <i className="fas fa-bookmark text-4xl mb-4"></i>
                <p>No saved jobs yet</p>
                <button
                  onClick={() => navigate('/jobs')}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Browse Jobs
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {savedJobs.map((job) => (
                  <div key={job._id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span><i className="fas fa-map-marker-alt mr-1"></i>{job.location}</span>
                          <span><i className="fas fa-clock mr-1"></i>{job.jobType}</span>
                          {job.salaryRange && (
                            <span>
                              <i className="fas fa-dollar-sign mr-1"></i>
                              {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => navigate(`/jobs/${job._id}`)}
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          View
                        </button>
                        <button
                          // onClick={() => removeSavedJob(job._id)}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Recent Messages</h2>
              <button
                onClick={() => navigate('/messages')}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View All Messages
              </button>
            </div>
          </div>
          <div className="p-6">
            {messages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <i className="fas fa-envelope text-4xl mb-4"></i>
                <p>No messages yet</p>
                <p className="text-sm mt-2">Messages from employers will appear here</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.slice(0, 5).map((message) => (
                  <div key={message._id} className={`border rounded-lg p-4 hover:bg-gray-50 ${!message.isRead ? 'bg-blue-50 border-blue-200' : ''}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900">{message.subject}</h3>
                          {message.type === 'chat_request' && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              Chat Request
                            </span>
                          )}
                          {!message.isRead && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          From: {message.from?.name || 'Unknown'}
                        </p>
                        {message.relatedJob && (
                          <p className="text-sm text-blue-600 mb-2">
                            <i className="fas fa-briefcase mr-1"></i>
                            Related to: {message.relatedJob.title}
                          </p>
                        )}
                        <p className="text-sm text-gray-700 line-clamp-2">
                          {message.content.substring(0, 100)}...
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {new Date(message.createdAt).toLocaleDateString()} at{' '}
                          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {messages.length > 5 && (
                  <div className="text-center pt-4">
                    <button
                      onClick={() => navigate('/messages')}
                      className="px-4 py-2 text-blue-600 hover:text-blue-800"
                    >
                      View {messages.length - 5} more message{messages.length - 5 > 1 ? 's' : ''}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default JobSeekerDashboard;