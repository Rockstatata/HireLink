import React from 'react';
import ApplicationsTab from '../components/JobSeekerDashboard/ApplicationsTab';

function MyApplications() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <ApplicationsTab />
      </div>
    </div>
  );
}

export default MyApplications;