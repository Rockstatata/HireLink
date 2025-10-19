# **HIRELINK: Bridging Careers and Companies**

**HIRELINK** is a dynamic, AI-powered career networking and recruitment platform that connects job seekers with employers. Built using the MERN stack (MongoDB, Express, React, Node.js), HIRELINK enables job seekers to find tailored job opportunities and allows employers to streamline their recruitment process. The platform includes AI-powered features for job description generation, application tracking, and personalized career recommendations.

---

## **Table of Contents**

* [Project Overview](#project-overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Setup](#setup)
* [How to Use](#how-to-use)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)

---

## **Project Overview**

HIRELINK is a full-stack web application designed to simplify the job application and recruitment process. Whether you are a **job seeker** looking for career growth or an **employer** seeking top talent, HIRELINK provides tools for both.

### **For Job Seekers:**

* **Create and manage profiles**, including resumes, work experience, education, and skills.
* **Upload profile pictures** and **certificates** to enhance your profile visibility.
* **Search for jobs** based on industry, company, location, and skills.
* **Track applications**, schedule interviews, and manage offers.
* **Receive AI-powered career guidance** and personalized job recommendations.

### **For Employers:**

* **Post job openings**, specifying the required skills and job descriptions.
* Use **AI-powered tools** to generate optimized job descriptions.
* **Manage applicants**, schedule interviews, and issue offers.
* Maintain a **company profile** and manage multiple recruiter/HR users.

### **For Admins:**

* Monitor platform activity, perform **moderation**, and ensure the integrity of the system.

---

## **Features**

* **User Authentication & Authorization** – JWT-based authentication system with user roles (job seeker, employer, admin).
* **Profile Management** – Job seekers can update their professional profiles, add skills, work experience, and upload resumes.
* **Job Listings & Search** – Employers can post jobs, and job seekers can search and apply with advanced filters.
* **AI-Powered Job Description Generation** – Generate tailored job descriptions using groqAi's API.
* **Application Tracking** – Job seekers can track applications, interviews, and offers.
* **Employer Dashboard** – A dedicated dashboard for employers to manage job postings, applicants, and shortlisting.
* **Networking** – Connect with others on the platform to expand your professional network (similar to LinkedIn).
* **Notifications System** – Receive real-time notifications for job updates, interview schedules, and new connections.
* **File Uploads** – Users can upload their resumes and profile pictures via **Cloudinary**.

---

## **Tech Stack**

* **Frontend**:

  * **React** (for building the user interface)
  * **Vite** (for fast builds and hot reloading)
  * **Tailwind CSS** (for styling)
  * **Redux Toolkit** (for state management)
  * **React Router** (for routing)

* **Backend**:

  * **Node.js** (JavaScript runtime)
  * **Express.js** (web framework)
  * **MongoDB** (NoSQL database, with Mongoose for schema management)
  * **JWT** (for secure authentication)
  * **groqAi API** (for AI-powered job description generation)
  * **Cloudinary** (for image and file uploads)

* **Deployment**:

  * **Frontend**: Vercel
  * **Backend**: AWS EC2 with Nginx and PM2
  * **CI/CD**: GitHub Actions for automated testing and deployment

---

## **Setup**

To run the project locally, follow these steps:

### **Backend Setup**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hirelink.git
   cd hirelink/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   * Create a `.env` file in the `backend` folder and add your MongoDB URI, JWT secret, Cloudinary credentials, etc.

4. Start the backend:

   ```bash
   npm start
   ```

   The backend should now be running on `http://localhost:5000`.

### **Frontend Setup**

1. Navigate to the frontend directory:

   ```bash
   cd hirelink/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend:

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:3000`.

---

## **How to Use**

1. **Sign Up/Log In**:

   * Go to the **Login** page to create a new account or log into your existing account.
   * Choose whether you are a **Job Seeker** or an **Employer** during the registration process.

2. **Job Seeker Flow**:

   * Complete your profile with skills, work experience, and upload your resume.
   * Browse job listings and apply to jobs that match your skills and interests.
   * Track your applications and schedule interviews.

3. **Employer Flow**:

   * Post job openings and generate AI-powered job descriptions.
   * View applicants, shortlist candidates, and manage interview schedules.

4. **Admin Flow**:

   * Monitor platform activity and manage user reports and moderation tasks.

---

## **Contributing**

We welcome contributions to HIRELINK! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request and describe your changes.

---

