import React, { useState } from 'react';

const UserOnboarding = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    preferences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can handle form submission, e.g., send to backend
  };

  return (
    <div className="user-onboarding max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">User Onboarding</h2>
        <p className="text-lg text-gray-600">Welcome to HireLink! Let's get you set up.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-lg font-medium text-gray-700">First Name:</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </label>
          <label className="block">
            <span className="text-lg font-medium text-gray-700">Last Name:</span>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-lg font-medium text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </label>
          <label className="block">
            <span className="text-lg font-medium text-gray-700">Phone:</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </label>
        </div>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Skills:</span>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="List your key skills, technologies, and competencies"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            rows="5"
            required
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Experience:</span>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your work experience, previous roles, and achievements"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            rows="5"
            required
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Job Preferences:</span>
          <textarea
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
            placeholder="Describe your preferred job types, locations, salary expectations, and work preferences"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            rows="5"
            required
          />
        </label>
        <div className="text-center pt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserOnboarding;

