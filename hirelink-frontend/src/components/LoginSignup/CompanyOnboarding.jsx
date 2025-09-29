import React, { useState } from 'react';

const CompanyOnboarding = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    industry: '',
    companySize: '',
    location: '',
    requirements: '',
    description: ''
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
    <div className="company-onboarding max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Company Onboarding</h2>
        <p className="text-lg text-gray-600">Welcome to HireLink! Please fill out your company details.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Company Name:</span>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            required
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="company@example.com"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            required
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Location:</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, State, Country"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            required
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Industry:</span>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="e.g., Technology, Healthcare, Finance"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            required
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Company Size:</span>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            required
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201+">201+ employees</option>
          </select>
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Hiring Requirements:</span>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Describe the skills, experience, and qualifications you're looking for in candidates"
            className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            rows="5"
            required
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Company Description:</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your company, its mission, values, and what makes it unique"
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

export default CompanyOnboarding;
