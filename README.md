<div align="center">

#  **HIRELINK**

### *Bridging Careers and Companies in Bangladesh*

[![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![AI Powered](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge&logo=openai)](https://groq.com/)

**A comprehensive, enterprise-grade job recruitment and career networking platform designed specifically for the Bangladeshi job market. Built with cutting-edge technologies and powered by AI to revolutionize the hiring process.**

[📖 Documentation](#documentation) • [🎯 Features](#features) • [🛠️ Tech Stack](#tech-stack) • [🚀 Getting Started](#getting-started) • [📸 Screenshots](#screenshots)

---

</div>

## 📋 **Table of Contents**

- [✨ Project Overview](#project-overview)
- [🎯 Key Features](#features)
- [🏗️ System Architecture](#system-architecture)
- [🛠️ Technology Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Configuration](#environment-configuration)
- [📸 Screenshots & UI Showcase](#screenshots)
- [🗂️ Project Structure](#folder-structure)
- [🔐 Authentication & Authorization](#authentication--authorization)
- [🎨 Design System](#design-system)
- [🌐 API Documentation](#api-documentation)
- [🤝 Contributing](#contributing)
- [📜 License](#license)
- [👨‍💻 About the Developer](#about-the-developer)

---

## ✨ **Project Overview**

**HIRELINK** is not just another job portal—it's a **comprehensive career ecosystem** that brings together job seekers, employers, and AI-driven insights to create meaningful professional connections. Designed with the Bangladeshi job market in mind, it features localized currency (BDT), location-based search, and culturally relevant user experiences.

### 🎯 **Mission Statement**

To democratize access to quality employment opportunities and streamline the recruitment process through intelligent automation, creating a bridge between talented professionals and forward-thinking companies in Bangladesh.

### 💡 **What Makes HireLink Different?**

- **🤖 AI-Powered Intelligence**: Leverages Groq AI to generate optimized job descriptions, analyze skill gaps, and provide personalized career recommendations
- **🎨 Modern User Experience**: Built with React 19 and Tailwind CSS 4 for a sleek, responsive, and intuitive interface
- **🔒 Enterprise-Grade Security**: JWT-based authentication with role-based access control (RBAC)
- **☁️ Cloud-Native**: Cloudinary integration for seamless file uploads and media management
- **📊 Real-Time Analytics**: Comprehensive dashboards for employers and job seekers
- **💬 Integrated Messaging**: Built-in communication system for seamless interaction
- **🇧🇩 Bangladesh-First**: Localized for Bangladeshi job market with BDT currency, local locations, and relevant job categories

---

## 🎯 **Key Features**

### 👤 **For Job Seekers**

<details>
<summary><b>🔓 Click to expand Job Seeker features</b></summary>

#### Profile Management
- ✅ **Comprehensive Profile Creation**: Build professional profiles with personal info, skills, education, work experience
- 📸 **Profile Picture Upload**: Upload and manage profile pictures via Cloudinary
- 📄 **Resume Management**: Upload, update, and manage resumes (PDF, DOC, DOCX)
- 🎯 **Skill Portfolio**: Add, remove, and showcase your technical and soft skills
- 🏆 **Certificate Showcase**: Upload certificates and credentials to enhance credibility
- 🔗 **Social Profile Integration**: Connect LinkedIn, GitHub, and portfolio links

#### Job Search & Application
- 🔍 **Advanced Search Filters**: Search by keywords, location, company, salary range, experience level
- 💼 **Multiple Job Types**: Full-time, Part-time, Internship, Freelance, Contract positions
- 🏢 **Work Mode Preferences**: Remote, Onsite, Hybrid job options
- 💰 **Salary Range Filtering**: Filter jobs based on expected salary (BDT)
- 📍 **Location-Based Search**: Find jobs in specific cities across Bangladesh
- 🏪 **Company Profiles**: Explore detailed company information before applying
- ⭐ **Save Jobs**: Bookmark interesting positions for later review
- 📝 **One-Click Apply**: Streamlined application process with profile auto-fill

#### Application Tracking
- 📊 **Application Dashboard**: Track all your applications in one place
- 🔔 **Status Updates**: Real-time notifications on application progress
- 📈 **Application Analytics**: View response rates and success metrics
- ⏰ **Interview Scheduling**: Manage interview invitations and schedules
- 💬 **Direct Messaging**: Communicate with recruiters seamlessly

#### AI-Powered Career Tools
- 🤖 **Skill Gap Analysis**: AI analyzes your profile against job requirements
- 💡 **Personalized Recommendations**: Get job suggestions based on your profile
- 📚 **Learning Path Suggestions**: Receive recommendations for skill development

</details>

### 🏢 **For Employers**

<details>
<summary><b>🔓 Click to expand Employer features</b></summary>

#### Company Profile Management
- 🏭 **Company Branding**: Create compelling company profiles with logos and descriptions
- 📊 **Company Analytics**: Track profile views and engagement metrics
- 👥 **Multiple HR Users**: Add and manage multiple recruiters under one company
- 🌐 **Social Links**: Showcase company social media and website

#### Job Posting & Management
- ✍️ **Rich Job Posting**: Create detailed job postings with rich text formatting
- 🤖 **AI Job Description Generator**: Generate optimized job descriptions using Groq AI
- 📋 **Custom Requirements**: Specify education, experience, skills, and qualifications
- 💵 **Flexible Salary Options**: Set salary ranges with negotiable options
- ⏳ **Application Deadlines**: Set deadlines for applications
- 📈 **Job Performance Metrics**: Track views, applications, and conversion rates
- ✏️ **Edit Anytime**: Update job postings even after publication
- 🗑️ **Job Management**: Archive or delete outdated positions

#### Applicant Management
- 📥 **Application Dashboard**: View all applications in an organized interface
- 👀 **Candidate Profiles**: Access complete candidate profiles and resumes
- ⭐ **Shortlisting System**: Mark candidates for further review
- 📝 **Application Status**: Update candidates through the hiring pipeline
- 💬 **Direct Communication**: Message candidates directly through the platform
- 🎯 **Candidate Filtering**: Filter applicants by skills, experience, education
- 📊 **Hiring Analytics**: Track time-to-hire and other recruitment metrics

#### Advanced Recruitment Tools
- 🔍 **Candidate Search**: Search through job seeker database
- 📧 **Bulk Actions**: Manage multiple applications simultaneously
- 📈 **Recruitment Dashboard**: Comprehensive overview of hiring activities
- 🎯 **Skills Matching**: AI-powered matching of candidates to job requirements

</details>

### 🎨 **Platform-Wide Features**

<details>
<summary><b>🔓 Click to expand Platform features</b></summary>

- 🔐 **Secure Authentication**: JWT-based auth with refresh token mechanism
- 🎭 **Role-Based Access Control**: Separate experiences for job seekers, employers, and admins
- 📱 **Fully Responsive Design**: Perfect experience on mobile, tablet, and desktop
- 🌙 **Theme Support**: Light and dark mode with customizable color schemes
- 💬 **Messaging System**: Real-time communication between users
- 🔔 **Notification Center**: Stay updated with all platform activities
- 🔍 **Global Search**: Quick search across jobs, companies, and users
- 📊 **Analytics Dashboard**: Comprehensive insights for all user types
- 🔒 **Password Management**: Change password and forgot password functionality
- 🎯 **Personalized Onboarding**: Role-specific onboarding flows
- ⚡ **Performance Optimized**: Fast load times and smooth interactions
- ♿ **Accessibility**: WCAG 2.1 compliant design
- 🌍 **Localization Ready**: Built for easy language expansion

</details>

---

## 🏗️ **System Architecture**

```mermaid
graph TB
    subgraph Frontend[Frontend Layer - React + Vite]
        A[React 19.1.1] --> B[Redux Toolkit State Management]
        A --> C[React Router v7 Navigation]
        A --> D[Tailwind CSS 4 Styling]
        B --> E[Authentication State]
        B --> F[User Data State]
    end

    subgraph API[API Layer - Express.js]
        G[Express Server] --> H[JWT Middleware]
        G --> I[Multer File Upload]
        G --> J[CORS Configuration]
        H --> K[Protected Routes]
    end

    subgraph Services[External Services]
        L[Cloudinary - Media Storage]
        M[Groq AI - Job Description Generation]
    end

    subgraph Database[Database Layer - MongoDB]
        N[(MongoDB Atlas)] --> O[User Collection]
        N --> P[Job Collection]
        N --> Q[Company Profile Collection]
        N --> R[Job Seeker Profile Collection]
        N --> S[Application Collection]
        N --> T[Message Collection]
    end

    Frontend -->|HTTP/HTTPS| API
    API -->|Mongoose ODM| Database
    API -->|SDK| L
    API -->|API| M

    style Frontend fill:#61dafb,stroke:#333,stroke-width:2px
    style API fill:#68a063,stroke:#333,stroke-width:2px
    style Database fill:#4db33d,stroke:#333,stroke-width:2px
    style Services fill:#ff6b6b,stroke:#333,stroke-width:2px
```

### **Architecture Highlights**

- **Three-Tier Architecture**: Clean separation of presentation, business logic, and data layers
- **RESTful API Design**: Standard HTTP methods with proper status codes
- **Schema-Based Validation**: Mongoose schemas ensure data integrity
- **Middleware Pipeline**: Request processing through authentication, validation, and error handling
- **File Upload Strategy**: Multipart form data handling with size and type validation
- **State Management**: Centralized Redux store with slice-based organization

---

## 🛠️ **Technology Stack**

### **Frontend Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| ⚛️ **React** | 19.1.1 | UI library for building component-based interfaces |
| ⚡ **Vite** | 7.1.7 | Next-generation frontend build tool with HMR |
| 🎨 **Tailwind CSS** | 4.1.13 | Utility-first CSS framework for rapid UI development |
| 🔄 **Redux Toolkit** | 2.9.0 | State management with simplified store configuration |
| 🧭 **React Router** | 7.9.3 | Client-side routing with nested routes support |
| 📡 **Axios** | 1.12.2 | Promise-based HTTP client with interceptors |
| 🎭 **Hero Icons** | 2.2.0 | Beautiful hand-crafted SVG icons |
| 💎 **Font Awesome** | 7.0.1 | Comprehensive icon library |
| 🎨 **Tremor** | 3.18.7 | React components for building dashboards |
| 🎯 **Iconify** | 4.1.1 | Universal icon framework |
| 🔄 **React Icons** | 5.5.0 | Popular icon library for React |

### **Backend Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| 🟢 **Node.js** | - | JavaScript runtime for server-side execution |
| 🚂 **Express.js** | 5.1.0 | Fast, unopinionated web framework for Node.js |
| 🍃 **MongoDB** | - | NoSQL database for flexible data modeling |
| 📦 **Mongoose** | 8.18.2 | Elegant MongoDB object modeling for Node.js |
| 🔐 **JWT** | 9.0.2 | Secure token-based authentication |
| 🔒 **Bcrypt.js** | 3.0.2 | Password hashing with salt generation |
| ☁️ **Cloudinary** | 2.7.0 | Cloud-based image and video management |
| 🤖 **Groq SDK** | 0.33.0 | AI integration for intelligent features |
| 📁 **Multer** | 2.0.2 | Middleware for handling multipart/form-data |
| 🍪 **Cookie Parser** | 1.4.7 | Parse and handle HTTP cookies |
| 🌐 **CORS** | 2.8.5 | Enable Cross-Origin Resource Sharing |
| 🧹 **DOMPurify** | 3.2.7 | XSS sanitization for HTML content |
| 🔧 **dotenv** | 17.2.2 | Environment variable management |

### **Development Tools**

- 📝 **ESLint** - Code linting and quality assurance
- 🎨 **Prettier** - Code formatting for consistency
- 🔍 **VS Code** - Primary development environment
- 🐙 **Git** - Version control and collaboration
- 📦 **npm** - Package management

---

## 🚀 **Getting Started**

Follow these comprehensive instructions to set up and run HireLink on your local development environment.

### **Prerequisites**

Before you begin, ensure you have the following installed on your system:

```bash
Node.js (v18.x or higher)
npm (v9.x or higher)
MongoDB (v6.x or higher) or MongoDB Atlas account
Git
```

**Recommended Tools:**
- VS Code or your preferred code editor
- MongoDB Compass for database visualization
- Postman or Thunder Client for API testing

---

### **Backend Setup**

#### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/Rockstatata/HireLink.git
cd HireLink/hirelink-backend
```

#### 2️⃣ **Install Dependencies**

```bash
npm install
```

This will install all required packages:
- Express.js server framework
- MongoDB & Mongoose for database
- JWT for authentication
- Cloudinary for file uploads
- Groq SDK for AI features
- And more...

#### 3️⃣ **Environment Configuration**

Create a `.env` file in the `hirelink-backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/hirelink
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hirelink

# JWT Configuration
ACCESS_TOKEN_SECRET=your_super_secret_access_token_key_here_min_32_chars
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_super_secret_refresh_token_key_here_min_32_chars
REFRESH_TOKEN_EXPIRY=10d

# Cloudinary Configuration (Get from https://cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Groq AI Configuration (Get from https://groq.com)
GROQ_API_KEY=your_groq_api_key_here

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

**🔑 How to get API keys:**

<details>
<summary><b>Cloudinary Setup</b></summary>

1. Visit [cloudinary.com](https://cloudinary.com) and sign up for a free account
2. Navigate to your Dashboard
3. Copy your **Cloud Name**, **API Key**, and **API Secret**
4. Paste them into your `.env` file

**Free tier includes:**
- 25 GB storage
- 25 GB bandwidth per month
- Perfect for development and small projects

</details>

<details>
<summary><b>Groq AI Setup</b></summary>

1. Visit [console.groq.com](https://console.groq.com) and create an account
2. Navigate to API Keys section
3. Generate a new API key
4. Copy and paste it into your `.env` file

**Free tier includes:**
- Fast inference speeds
- Multiple model options (Llama, Mixtral, etc.)
- Great for AI-powered features

</details>

#### 4️⃣ **Start the Backend Server**

```bash
npm start
```

✅ **Success!** Your backend should now be running at `http://localhost:5000`

**Verify the server:**
```bash
# Check if server is running
curl http://localhost:5000/api/v1/users/ping
# Expected response: { "success": true, "message": "Server is running" }
```

---

### **Frontend Setup**

#### 1️⃣ **Navigate to Frontend Directory**

```bash
cd ../hirelink-frontend
```

#### 2️⃣ **Install Dependencies**

```bash
npm install
```

This installs:
- React 19 with latest features
- Vite for lightning-fast development
- Tailwind CSS 4 for modern styling
- Redux Toolkit for state management
- Axios for API communication
- And more...

#### 3️⃣ **Frontend Configuration**

Create a `config.js` file in `hirelink-frontend` directory (if not exists):

```javascript
const config = {
  // Backend API URL
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',

  // Application Settings
  APP_NAME: 'HireLink',
  APP_VERSION: '1.0.0',

  // Feature Flags
  ENABLE_AI_FEATURES: true,
  ENABLE_MESSAGING: true,
  ENABLE_NOTIFICATIONS: true,
};
export default config;
```

**Optional:** Create `.env` file for environment variables:

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_APP_NAME=HireLink
```

#### 4️⃣ **Start the Development Server**

```bash
npm run dev
```

✅ **Success!** Your frontend should now be running at `http://localhost:5173`

**🎉 Open your browser and visit:** `http://localhost:5173`

---

### **🎯 Quick Start Guide**

<details>
<summary><b>For Job Seekers</b></summary>

1. **Register** - Click "Sign Up" and choose "Job Seeker"
2. **Complete Onboarding** - Fill in your basic information
3. **Build Profile** - Add skills, education, work experience
4. **Upload Resume** - Upload your latest resume (PDF/DOC)
5. **Search Jobs** - Use filters to find relevant opportunities
6. **Apply** - One-click apply to jobs that match your profile
7. **Track Applications** - Monitor your application status in the dashboard

</details>

<details>
<summary><b>For Employers</b></summary>

1. **Register** - Click "Sign Up" and choose "Employer"
2. **Company Setup** - Complete your company profile
3. **Add Logo** - Upload your company logo
4. **Post Jobs** - Create job postings (or use AI to generate descriptions)
5. **Review Applications** - Check candidate profiles and resumes
6. **Shortlist** - Mark promising candidates for further review
7. **Contact** - Message candidates directly through the platform

</details>

---

### **📦 Build for Production**

#### **Frontend Build**

```bash
cd hirelink-frontend
npm run build
```

This creates an optimized production build in the `dist/` directory.

**Preview the production build:**
```bash
npm run preview
```

#### **Backend Deployment**

The backend is production-ready. For deployment:

1. **Set production environment variables**
2. **Use a process manager like PM2:**
   ```bash
   npm install -g pm2
   pm2 start src/app.js --name hirelink-backend
   ```

3. **Configure Nginx as reverse proxy** (optional)

---

### **🔧 Troubleshooting**

<details>
<summary><b>Common Issues and Solutions</b></summary>

**Issue: MongoDB connection error**
```
Solution:
- Ensure MongoDB is running: `mongod` or use MongoDB Atlas
- Check your MONGODB_URI in .env file
- Verify network connectivity
```

**Issue: Port already in use**
```
Solution:
- Change PORT in backend .env file
- Kill the process using the port: `npx kill-port 5000`
- On Windows: `netstat -ano | findstr :5000` then `taskkill /PID <PID> /F`
```

**Issue: CORS errors**
```
Solution:
- Verify CORS_ORIGIN in backend .env matches frontend URL
- Check that frontend is running on the specified port
- Clear browser cache and reload
```

**Issue: Cloudinary upload fails**
```
Solution:
- Verify Cloudinary credentials in .env
- Check file size (default limit: 10MB)
- Ensure file type is supported (jpg, png, pdf, doc, docx)
```

**Issue: Groq AI features not working**
```
Solution:
- Verify GROQ_API_KEY in .env
- Check API rate limits
- Ensure internet connectivity
```

</details>

---

### **🧪 Testing**

```bash
# Backend tests (if configured)
cd hirelink-backend
npm test

# Frontend tests (if configured)
cd hirelink-frontend
npm test
```

---

## 📸 **Screenshots & UI Showcase**

Experience the beautiful and intuitive interface of HireLink through these screenshots:

### 🏠 **Landing & Authentication**

<div align="center">

| Welcome Screen | Login Interface |
|:---:|:---:|
| ![Welcome](screenshots/Welcome1.png) | ![Login](screenshots/login.png) |
| Modern landing page with compelling CTAs | Secure login with form validation |

| Job Seeker Registration | Employer Registration |
|:---:|:---:|
| ![Job Seeker Register](screenshots/register_jobseeker.png) | ![Employer Register](screenshots/register_company.png) |
| Simple registration for job seekers | Company registration with details |

</div>

---

### 👤 **Job Seeker Experience**

<div align="center">

| Onboarding Flow | Profile Building |
|:---:|:---:|
| ![Onboarding 1](screenshots/onboarding_jobseeker1.png) | ![Onboarding 2](screenshots/onboarding_jobseeker2.png) |
| Step-by-step onboarding process | Guided profile completion |

| Dashboard | Job Search & Listings |
|:---:|:---:|
| ![Job Seeker Home](screenshots/home_jobseeker.png) | ![Find Jobs](screenshots/findjobs1.png) |
| Personalized job seeker dashboard | Advanced job search with filters |

| Job Filters | Job Details |
|:---:|:---:|
| ![Find Jobs 2](screenshots/findjobs2.png) | ![Job Details](screenshots/jobdetails.png) |
| Comprehensive filtering options | Detailed job information view |

| Complete Job Info | My Applications |
|:---:|:---:|
| ![Job Details 2](screenshots/jobdetails2.png) | ![Applications](screenshots/applications_jobseeker.png) |
| Full job description with AI insights | Track all your applications |

| User Profile | Profile Details |
|:---:|:---:|
| ![Profile 1](screenshots/profile_jobseeker.png) | ![Profile 2](screenshots/profile_jobseeker2.png) |
| Comprehensive profile overview | Skills and experience showcase |

| Certifications | Saved Jobs |
|:---:|:---:|
| ![Profile 3](screenshots/profile_jobseeker3.png) | ![Saved Jobs](screenshots/savedjob.png) |
| Upload certificates and credentials | Bookmark jobs for later |

</div>

---

### 🏢 **Employer Experience**

<div align="center">

| Employer Onboarding | Company Setup |
|:---:|:---:|
| ![Employer Onboarding 1](screenshots/onboarding_employer1.png) | ![Employer Onboarding 2](screenshots/onboarding_employer2.png) |
| Company information collection | Additional company details |

| Brand Setup | Employer Dashboard |
|:---:|:---:|
| ![Employer Onboarding 3](screenshots/onboarding_employer3.png) | ![Employer Home](screenshots/home_employer.png) |
| Company branding and logo upload | Comprehensive employer dashboard |

| Job Posting - Step 1 | Job Posting - Step 2 |
|:---:|:---:|
| ![Job Post 1](screenshots/jobpost1.png) | ![Job Post 2](screenshots/jobpost2.png) |
| Basic job information | Requirements and qualifications |

| Job Posting - Step 3 | Applications Management |
|:---:|:---:|
| ![Job Post 3](screenshots/jobpost3.png) | ![Applications](screenshots/applications_employer.png) |
| Final details and AI description | Review and manage applicants |

| Shortlisted Candidates | Company Profile |
|:---:|:---:|
| ![Shortlisted](screenshots/shortlisted.png) | ![Company Profile 1](screenshots/profile_company1.png) |
| Manage shortlisted applicants | Public company profile view |

| Company Details | Companies Directory |
|:---:|:---:|
| ![Company Profile 2](screenshots/profile_company2.png) | ![Companies](screenshots/companies.png) |
| Detailed company information | Browse all companies on platform |

</div>

---

### 🔧 **Platform Features**

<div align="center">

| Messaging System | Security Settings |
|:---:|:---:|
| ![Messages](screenshots/message.png) | ![Change Password](screenshots/changepassword.png) |
| Real-time messaging between users | Secure password management |

</div>

---

### ✨ **Design Highlights**

- 🎨 **Modern UI/UX**: Clean, intuitive interface following Material Design principles
- 📱 **Fully Responsive**: Perfect experience across all devices and screen sizes
- 🎭 **Consistent Theming**: Beautiful color scheme throughout the application
- ⚡ **Smooth Animations**: Delightful micro-interactions and transitions
- ♿ **Accessible Design**: WCAG 2.1 compliant for inclusive user experience
- 🖼️ **Rich Media Support**: Optimized image loading and display
- 🔄 **Loading States**: Skeleton screens and progress indicators
- ✅ **Form Validation**: Real-time feedback and error messages

---

## 🗂️ **Project Structure**

HireLink follows a well-organized, scalable folder structure that separates concerns and promotes maintainability.

### **Frontend Structure**

```
hirelink-frontend/
├── 📁 public/                    # Static assets
│   ├── vite.svg                 # Vite logo
│   └── ...
├── 📁 src/                      # Source code
│   ├── 📄 main.jsx             # Application entry point
│   ├── 📄 App.jsx              # Root component with routing
│   ├── 📄 App.css              # Global app styles
│   ├── 📄 index.css            # Global CSS with Tailwind imports
│   ├── 📄 config.js            # Application configuration
│   │
│   ├── 📁 components/          # Reusable React components
│   │   ├── 📁 Common/         # Shared components
│   │   ├── 📁 Home/           # Landing page components
│   │   ├── 📁 JobListing/     # Job search & listings
│   │   ├── 📁 JobDetails/     # Job detail views
│   │   ├── 📁 JobSeekerDashboard/  # Job seeker features
│   │   ├── 📁 CompanyDashboard/    # Employer features
│   │   ├── 📁 LoginSignup/    # Authentication UI
│   │   ├── 📁 UserOnboarding/ # Onboarding flows
│   │   └── 📁 UserProfile/    # Profile management
│   │
│   ├── 📁 Pages/              # Page-level components
│   │   ├── Home.jsx, JobListing.jsx, JobDetails.jsx
│   │   ├── Dashboard.jsx, UserProfile.jsx, Messages.jsx
│   │   └── Companies.jsx, SavedJobs.jsx
│   │
│   ├── 📁 services/           # API service layer
│   │   ├── apiBase.js         # Axios instance & interceptors
│   │   ├── userService.js, jobService.js
│   │   └── companyService.js, contentService.js
│   │
│   ├── 📁 store/              # Redux state management
│   │   ├── store.js           # Redux store configuration
│   │   └── authSlice.js       # Authentication state
│   │
│   └── 📁 hooks/              # Custom React hooks
│
├── 📄 package.json, vite.config.js
├── 📄 tailwind.config.js, eslint.config.js
└── 📄 index.html, README.md
```

### **Backend Structure**

```
hirelink-backend/
├── 📁 src/
│   ├── 📄 app.js, index.js, constants.js
│   │
│   ├── 📁 controllers/       # Business logic
│   │   ├── user.controller.js
│   │   ├── job.controller.js
│   │   ├── company.controller.js
│   │   └── message.controller.js
│   │
│   ├── 📁 models/            # Mongoose schemas
│   │   ├── user.model.js, job.model.js
│   │   ├── companyProfile.model.js
│   │   └── jobSeekerProfile.model.js
│   │
│   ├── 📁 routes/            # API routes
│   ├── 📁 middlewares/       # Express middlewares
│   ├── 📁 utils/             # Helper functions
│   └── 📁 db/                # Database config
│
└── 📄 package.json, .env
```

---

## 🔐 **Authentication & Security**

### **Security Features**

- 🔒 **JWT Authentication**: Secure token-based authentication
- 🔑 **Password Hashing**: Bcrypt with salt rounds for password security
- 🛡️ **Input Validation**: Sanitization to prevent XSS attacks
- 🚫 **SQL Injection Protection**: MongoDB's parameterized queries
- 🔐 **CORS Configuration**: Controlled cross-origin requests
- 🍪 **HTTP-Only Cookies**: Secure token storage
- ⏱️ **Token Expiration**: Automatic session timeout
- 🔄 **Refresh Token Rotation**: Enhanced security for long sessions

### **Role-Based Access Control**

| Feature | Job Seeker | Employer | Admin |
|---------|:----------:|:--------:|:-----:|
| View Jobs | ✅ | ✅ | ✅ |
| Apply for Jobs | ✅ | ❌ | ❌ |
| Post Jobs | ❌ | ✅ | ✅ |
| View Applications (Own) | ✅ | ❌ | ❌ |
| Manage Applicants | ❌ | ✅ | ✅ |
| Company Profile | ❌ | ✅ | ✅ |
| Platform Moderation | ❌ | ❌ | ✅ |

---

## 🎨 **Design System**

### **Color Palette**

```css
/* Primary Brand Colors */
--primary: #4F46E5;              /* Indigo */
--primary-dark: #4338CA;         /* Dark Indigo */

/* Neutral Colors */
--background: #FFFFFF;
--background-secondary: #F9FAFB;
--text-primary: #111827;
--text-secondary: #6B7280;

/* Status Colors */
--success: #10B981;  --error: #EF4444;
--warning: #F59E0B;  --info: #3B82F6;
```

### **Typography**

- **Font Family**: Inter, system fonts
- **Sizes**: xs (12px) → 4xl (36px)
- **Weights**: light (300), regular (400), medium (500), semibold (600), bold (700)

---

## 🌐 **API Documentation**

### **Base URL**: `http://localhost:5000/api/v1`

### **Key Endpoints**

#### Authentication
- `POST /users/signup` - Register new user
- `POST /users/login` - User login
- `POST /users/logout` - User logout
- `GET /users/current-user` - Get authenticated user

#### Jobs
- `GET /jobs/jobs` - List all jobs (with filters)
- `GET /jobs/jobs/:id` - Get single job
- `POST /jobs/post-job` - Create job (Employer)
- `PUT /jobs/update-job/:id` - Update job
- `POST /jobs/apply/:id` - Apply for job (Job Seeker)
- `POST /jobs/generate-description` - AI job description

#### Profile
- `PUT /users/update-profile` - Update user profile
- `POST /users/profile-picture` - Upload profile picture
- `POST /users/resume` - Upload resume
- `GET /users/public-profile/:id` - View public profile
- `GET /users/skill-gap/:jobId` - AI skill gap analysis

#### Company
- `GET /jobs/companies` - List all companies
- `PUT /company/profile` - Update company profile
- `GET /company/jobs` - Get company's job postings

### **Authentication Header**
```http
Authorization: Bearer <access_token>
```

---

## 💻 **Development Workflow**

### **Branch Strategy**
```
master/main  → Production-ready code
dev          → Development branch
feature/*    → New features
bugfix/*     → Bug fixes
hotfix/*     → Emergency fixes
```

### **Commit Convention**
```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code style changes
refactor: Code refactoring
test: Add tests
chore: Build/config changes
```

### **Code Quality**
```bash
# Lint code
npm run lint

# Format code
npm run format

# Run tests
npm test
```

---

## 📊 **Performance Optimizations**

- ⚡ **Vite Build Tool**: Lightning-fast HMR and optimized builds
- 🎯 **Code Splitting**: Route-based lazy loading
- 📦 **Tree Shaking**: Remove unused code
- 🖼️ **Image Optimization**: Cloudinary automatic optimization
- 📡 **API Caching**: Redux state caching for API responses
- 🔄 **Debouncing**: Search and filter optimizations
- 📱 **Responsive Images**: Optimized for different screen sizes
- ⚙️ **Lazy Loading**: Components and images load on demand

---

## 🚀 **Deployment**

### **Frontend Deployment (Vercel/Netlify)**

```bash
cd hirelink-frontend
npm run build
# Deploy dist/ folder to hosting service
```

### **Backend Deployment (AWS/DigitalOcean)**

```bash
# Using PM2
npm install -g pm2
pm2 start src/app.js --name hirelink-backend
pm2 save
pm2 startup
```

### **Database (MongoDB Atlas)**

- Create MongoDB Atlas cluster
- Whitelist IP addresses
- Update MONGODB_URI in production `.env`

### **Environment Variables**

Ensure all production environment variables are set:
- Database URLs
- API keys (Cloudinary, Groq)
- JWT secrets
- CORS origins

---

## 🤝 **Contributing**

We warmly welcome contributions from the community! HireLink is built with passion, and we'd love your help to make it even better.

### **How to Contribute**

1. **🍴 Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **📥 Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/HireLink.git
   cd HireLink
   ```

3. **🌿 Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b bugfix/fix-issue-123
   ```

4. **💻 Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

5. **✅ Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

6. **📤 Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **🎯 Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide a clear description of your changes
   - Link any related issues

### **Contribution Guidelines**

#### **Code Style**
- Follow ESLint configuration
- Use meaningful variable and function names
- Write self-documenting code
- Add JSDoc comments for functions
- Keep functions small and focused

#### **Commit Messages**
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code style changes
refactor: Code refactoring
test: Add unit tests for user service
chore: Update dependencies
```

### **Areas for Contribution**

We especially welcome contributions in these areas:

- 🐛 **Bug Fixes**: Help us squash bugs
- ✨ **New Features**: Implement features from our roadmap
- 📚 **Documentation**: Improve docs and add examples
- 🎨 **UI/UX**: Enhance the user interface
- ♿ **Accessibility**: Improve accessibility features
- 🌍 **Localization**: Add support for more languages
- 🧪 **Testing**: Write unit and integration tests
- ⚡ **Performance**: Optimize code and queries
- 🔒 **Security**: Identify and fix security issues

---

## 📜 **License**

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 HireLink

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 **About the Developer**

### **Project Creator**

This project was crafted with ❤️ and countless hours of dedication by a passionate developer committed to solving real-world problems in the Bangladeshi job market.

### **Development Journey**

HireLink represents months of:
- 💡 **Planning & Research**: Understanding the job market needs
- 🎨 **Design**: Creating an intuitive and beautiful user experience
- 💻 **Development**: Writing clean, scalable, and maintainable code
- 🧪 **Testing**: Ensuring reliability and performance
- 📚 **Documentation**: Making it accessible for others
- 🔧 **Optimization**: Continuously improving the platform

### **Technologies Mastered**

Through this project:
- ⚛️ Mastered React 19 with hooks and modern patterns
- 🟢 Built robust RESTful APIs with Node.js and Express
- 🍃 Designed scalable MongoDB schemas
- 🎨 Created responsive UIs with Tailwind CSS 4
- 🔐 Implemented secure JWT authentication
- ☁️ Integrated cloud services (Cloudinary)
- 🤖 Leveraged AI for intelligent features
- 📦 Managed complex state with Redux Toolkit
- ⚡ Optimized performance and UX

### **Project Stats**

- 📁 **Files Created**: 100+
- 📝 **Lines of Code**: 15,000+
- ⏱️ **Development Time**: 400+ hours
- ☕ **Coffee Consumed**: Countless cups
- 🌙 **Late Nights**: Too many to count
- 💪 **Determination**: Unlimited

### **Connect**

- 🐙 **GitHub**: [@Rockstatata](https://github.com/Rockstatata)
- 📧 **Repository**: [HireLink](https://github.com/Rockstatata/HireLink)

---

## 🙏 **Acknowledgments**

Special thanks to:

- 🙌 **Open Source Community**: For amazing libraries and tools
- 🎓 **Online Resources**: MDN, Stack Overflow, and dev communities
- ☁️ **Cloudinary**: For excellent media management APIs
- 🤖 **Groq**: For powerful AI capabilities
- 🍃 **MongoDB**: For flexible database solutions
- ⚛️ **React Team**: For an incredible UI library
- 🎨 **Tailwind CSS**: For making styling a breeze

---

## 📞 **Support**

### **Get Help**

- 📖 Read the [Documentation](#documentation)
- 🐛 Report bugs via [GitHub Issues](https://github.com/Rockstatata/HireLink/issues)
- 💬 Ask questions in [Discussions](https://github.com/Rockstatata/HireLink/discussions)

### **Found a Bug?**

Please report it with:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, etc.)

---

## 🗺️ **Roadmap**

### **Upcoming Features**

- [ ] 📱 Mobile App (React Native)
- [ ] 💬 Real-time Chat Improvements
- [ ] 🔔 Push Notifications
- [ ] 📊 Advanced Analytics Dashboard
- [ ] 🎥 Video Interview Integration
- [ ] 🌐 Multi-language Support
- [ ] 🤝 Networking Features
- [ ] 📝 Blog Platform for Career Tips
- [ ] 🎓 Skill Assessment Tests
- [ ] 🏆 Gamification Elements

### **Version History**

#### **v1.0.0** (Current) - October 2025
- ✅ Complete authentication system
- ✅ Job posting and searching
- ✅ Application management
- ✅ Company profiles
- ✅ User profiles
- ✅ AI-powered features
- ✅ Messaging system
- ✅ File uploads
- ✅ Responsive design

---

<div align="center">

## ⭐ **If you found this project helpful, please give it a star!**

[![GitHub Stars](https://img.shields.io/github/stars/Rockstatata/HireLink?style=social)](https://github.com/Rockstatata/HireLink/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Rockstatata/HireLink?style=social)](https://github.com/Rockstatata/HireLink/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Rockstatata/HireLink)](https://github.com/Rockstatata/HireLink/issues)

---

### **Built with 💙 for the Bangladesh Job Market**

**HireLink** - *Where Careers Meet Opportunities*

Made with ❤️ by [Rockstatata](https://github.com/Rockstatata) | © 2025 All Rights Reserved

</div>

## 🗂️ **Project Structure**

HireLink follows a well-organized, scalable folder structure that separates concerns and promotes maintainability.

### **Frontend Structure**

```
hirelink-frontend/
├── 📁 public/                    # Static asse---

## 🤝 **Contributing**

We warmly welcome contributions from the community! HireLink is built with passion, and we'd love your help to make it even better.

### **How to Contribute**

1. **🍴 Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **📥 Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/HireLink.git
   cd HireLink
   ```

3. **🌿 Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b bugfix/fix-issue-123
   ```

4. **💻 Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

5. **✅ Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

6. **📤 Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **🎯 Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide a clear description of your changes
   - Link any related issues

### **Contribution Guidelines**

#### **Code Style**
- Follow ESLint configuration
- Use meaningful variable and function names
- Write self-documenting code
- Add JSDoc comments for functions
- Keep functions small and focused

#### **Commit Messages**
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
```
feat: add user profile picture upload
fix: resolve login redirect issue
docs: update API documentation
style: format code with prettier
refactor: simplify job search logic
test: add unit tests for user service
chore: update dependencies
```

### **Areas for Contribution**

We especially welcome contributions in these areas:

- 🐛 **Bug Fixes**: Help us squash bugs
- ✨ **New Features**: Implement features from our roadmap
- 📚 **Documentation**: Improve docs and add examples
- 🎨 **UI/UX**: Enhance the user interface
- ♿ **Accessibility**: Improve accessibility features
- 🌍 **Localization**: Add support for more languages
- 🧪 **Testing**: Write unit and integration tests
- ⚡ **Performance**: Optimize code and queries
- 🔒 **Security**: Identify and fix security issues

---

## 📜 **License**

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 HireLink

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 **About the Developer**

### **Project Creator**

This project was crafted with ❤️ and countless hours of dedication by a passionate developer committed to solving real-world problems in the Bangladeshi job market.

### **Development Journey**

HireLink represents months of:
- 💡 **Planning & Research**: Understanding the job market needs
- 🎨 **Design**: Creating an intuitive and beautiful user experience
- 💻 **Development**: Writing clean, scalable, and maintainable code
- 🧪 **Testing**: Ensuring reliability and performance
- 📚 **Documentation**: Making it accessible for others
- 🔧 **Optimization**: Continuously improving the platform

### **Technologies Mastered**

Through this project:
- ⚛️ Mastered React 19 with hooks and modern patterns
- 🟢 Built robust RESTful APIs with Node.js and Express
- 🍃 Designed scalable MongoDB schemas
- 🎨 Created responsive UIs with Tailwind CSS 4
- 🔐 Implemented secure JWT authentication
- ☁️ Integrated cloud services (Cloudinary)
- 🤖 Leveraged AI for intelligent features
- 📦 Managed complex state with Redux Toolkit
- ⚡ Optimized performance and UX

### **Project Stats**

- 📁 **Files Created**: 100+
- 📝 **Lines of Code**: 15,000+
- ⏱️ **Development Time**: 400+ hours
- ☕ **Coffee Consumed**: Countless cups
- 🌙 **Late Nights**: Too many to count
- 💪 **Determination**: Unlimited

### **Connect**

- 🐙 **GitHub**: [@Rockstatata](https://github.com/Rockstatata)
- 📧 **Repository**: [HireLink](https://github.com/Rockstatata/HireLink)

---

## 🙏 **Acknowledgments**

Special thanks to:

- 🙌 **Open Source Community**: For amazing libraries and tools
- 🎓 **Online Resources**: MDN, Stack Overflow, and dev communities
- ☁️ **Cloudinary**: For excellent media management APIs
- 🤖 **Groq**: For powerful AI capabilities
- 🍃 **MongoDB**: For flexible database solutions
- ⚛️ **React Team**: For an incredible UI library
- 🎨 **Tailwind CSS**: For making styling a breeze

---

## 📞 **Support**

### **Get Help**

- 📖 Read the [Documentation](#documentation)
- 🐛 Report bugs via [GitHub Issues](https://github.com/Rockstatata/HireLink/issues)
- 💬 Ask questions in [Discussions](https://github.com/Rockstatata/HireLink/discussions)

### **Found a Bug?**

Please report it with:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, etc.)

---

## 🗺️ **Roadmap**

### **Upcoming Features**

- [ ] 📱 Mobile App (React Native)
- [ ] 💬 Real-time Chat Improvements
- [ ] 🔔 Push Notifications
- [ ] 📊 Advanced Analytics Dashboard
- [ ] 🎥 Video Interview Integration
- [ ] 🌐 Multi-language Support
- [ ] 🤝 Networking Features
- [ ] 📝 Blog Platform for Career Tips
- [ ] 🎓 Skill Assessment Tests
- [ ] 🏆 Gamification Elements

### **Version History**

#### **v1.0.0** (Current) - October 2025
- ✅ Complete authentication system
- ✅ Job posting and searching
- ✅ Application management
- ✅ Company profiles
- ✅ User profiles
- ✅ AI-powered features
- ✅ Messaging system
- ✅ File uploads
- ✅ Responsive design

---

<div align="center">

## ⭐ **If you found this project helpful, please give it a star!**

[![GitHub Stars](https://img.shields.io/github/stars/Rockstatata/HireLink?style=social)](https://github.com/Rockstatata/HireLink/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Rockstatata/HireLink?style=social)](https://github.com/Rockstatata/HireLink/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Rockstatata/HireLink)](https://github.com/Rockstatata/HireLink/issues)

---

### **Built with 💙 for the Bangladesh Job Market**

**HireLink** - *Where Careers Meet Opportunities*

Made with ❤️ by [Rockstatata](https://github.com/Rockstatata) | © 2025 All Rights Reserved

</div> vite.svg                 # Vite logo
│
├── 📁 src/                      # Source code
│   ├── 📄 main.jsx             # Application entry point
│   ├── 📄 App.jsx              # Root component with routing
│   ├── 📄 App.css              # Global app styles
│   ├── 📄 index.css            # Global CSS with Tailwind imports
│   ├── 📄 config.js            # Application configuration
│   │
│   ├── 📁 components/          # Reusable React components
│   │   ├── 📁 Common/         # Shared components
│   │   ├── 📁 Home/           # Landing page components
│   │   ├── 📁 JobListing/     # Job search & listings
│   │   ├── 📁 JobDetails/     # Job detail views
│   │   ├── 📁 JobSeekerDashboard/  # Job seeker features
│   │   ├── 📁 CompanyDashboard/    # Employer features
│   │   ├── 📁 LoginSignup/    # Authentication UI
│   │   ├── 📁 UserOnboarding/ # Onboarding flows
│   │   └── 📁 UserProfile/    # Profile management
│   │
│   ├── 📁 Pages/              # Page-level components
│   │   ├── Home.jsx, JobListing.jsx, JobDetails.jsx
│   │   ├── Dashboard.jsx, UserProfile.jsx, Messages.jsx
│   │   └── Companies.jsx, SavedJobs.jsx
│   │
│   ├── 📁 services/           # API service layer
│   │   ├── apiBase.js         # Axios instance & interceptors
│   │   ├── userService.js, jobService.js
│   │   └── companyService.js, contentService.js
│   │
│   ├── 📁 store/              # Redux state management
│   │   ├── store.js           # Redux store configuration
│   │   └── authSlice.js       # Authentication state
│   │
│   └── 📁 hooks/              # Custom React hooks
│
├── 📄 package.json, vite.config.js
├── 📄 tailwind.config.js, eslint.config.js
└── 📄 index.html, README.md
```

### **Backend Structure**

```
hirelink-backend/
├── 📁 src/
│   ├── 📄 app.js, index.js, constants.js
│   │
│   ├── 📁 controllers/       # Business logic
│   │   ├── user.controller.js
│   │   ├── job.controller.js
│   │   ├── company.controller.js
│   │   └── message.controller.js
│   │
│   ├── 📁 models/            # Mongoose schemas
│   │   ├── user.model.js, job.model.js
│   │   ├── companyProfile.model.js
│   │   └── jobSeekerProfile.model.js
│   │
│   ├── 📁 routes/            # API routes
│   ├── 📁 middlewares/       # Express middlewares
│   ├── 📁 utils/             # Helper functions
│   └── 📁 db/                # Database config
│
└── 📄 package.json, .env
```

---

## 🔐 **Authentication & Security**

### **Security Features**

- 🔒 **JWT Authentication**: Secure token-based authentication
- 🔑 **Password Hashing**: Bcrypt with salt rounds for password security
- 🛡️ **Input Validation**: Sanitization to prevent XSS attacks
- 🚫 **SQL Injection Protection**: MongoDB's parameterized queries
- 🔐 **CORS Configuration**: Controlled cross-origin requests
- 🍪 **HTTP-Only Cookies**: Secure token storage
- ⏱️ **Token Expiration**: Automatic session timeout
- 🔄 **Refresh Token Rotation**: Enhanced security for long sessions

### **Role-Based Access Control**

| Feature | Job Seeker | Employer | Admin |
|---------|:----------:|:--------:|:-----:|
| View Jobs | ✅ | ✅ | ✅ |
| Apply for Jobs | ✅ | ❌ | ❌ |
| Post Jobs | ❌ | ✅ | ✅ |
| View Applications (Own) | ✅ | ❌ | ❌ |
| Manage Applicants | ❌ | ✅ | ✅ |
| Company Profile | ❌ | ✅ | ✅ |
| Platform Moderation | ❌ | ❌ | ✅ |

---

## 🎨 **Design System**

### **Color Palette**

```css
/* Primary Brand Colors */
--primary: #4F46E5;              /* Indigo */
--primary-dark: #4338CA;         /* Dark Indigo */

/* Neutral Colors */
--background: #FFFFFF;
--background-secondary: #F9FAFB;
--text-primary: #111827;
--text-secondary: #6B7280;

/* Status Colors */
--success: #10B981;  --error: #EF4444;
--warning: #F59E0B;  --info: #3B82F6;
```

### **Typography**

- **Font Family**: Inter, system fonts
- **Sizes**: xs (12px) → 4xl (36px)
- **Weights**: light (300), regular (400), medium (500), semibold (600), bold (700)

---

## 🌐 **API Overview**

### **Base URL**: `http://localhost:5000/api/v1`

### **Key Endpoints**

#### Authentication
- `POST /users/signup` - Register new user
- `POST /users/login` - User login
- `POST /users/logout` - User logout
- `GET /users/current-user` - Get authenticated user

#### Jobs
- `GET /jobs/jobs` - List all jobs (with filters)
- `GET /jobs/jobs/:id` - Get single job
- `POST /jobs/post-job` - Create job (Employer)
- `PUT /jobs/update-job/:id` - Update job
- `POST /jobs/apply/:id` - Apply for job (Job Seeker)
- `POST /jobs/generate-description` - AI job description

#### Profile
- `PUT /users/update-profile` - Update user profile
- `POST /users/profile-picture` - Upload profile picture
- `POST /users/resume` - Upload resume
- `GET /users/public-profile/:id` - View public profile
- `GET /users/skill-gap/:jobId` - AI skill gap analysis

#### Company
- `GET /jobs/companies` - List all companies
- `PUT /company/profile` - Update company profile
- `GET /company/jobs` - Get company's job postings

### **Authentication Header**
```http
Authorization: Bearer <access_token>
```

---

## 💻 **Development Workflow**

### **Branch Strategy**
```
master/main  → Production-ready code
dev          → Development branch
feature/*    → New features
bugfix/*     → Bug fixes
hotfix/*     → Emergency fixes
```

### **Commit Convention**
```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code style changes
refactor: Code refactoring
test: Add tests
chore: Build/config changes
```

### **Code Quality**
```bash
# Lint code
npm run lint

# Format code
npm run format

# Run tests
npm test
```

---

## 📊 **Performance Optimizations**

- ⚡ **Vite Build Tool**: Lightning-fast HMR and optimized builds
- 🎯 **Code Splitting**: Route-based lazy loading
- 📦 **Tree Shaking**: Remove unused code
- 🖼️ **Image Optimization**: Cloudinary automatic optimization
- 📡 **API Caching**: Redux state caching for API responses
- 🔄 **Debouncing**: Search and filter optimizations
- 📱 **Responsive Images**: Optimized for different screen sizes
- ⚙️ **Lazy Loading**: Components and images load on demand

---

## 🚀 **Deployment**

### **Frontend Deployment (Vercel/Netlify)**

```bash
cd hirelink-frontend
npm run build
# Deploy dist/ folder to hosting service
```

### **Backend Deployment (AWS/DigitalOcean)**

```bash
# Using PM2
npm install -g pm2
pm2 start src/app.js --name hirelink-backend
pm2 save
pm2 startup
```

### **Database (MongoDB Atlas)**

- Create MongoDB Atlas cluster
- Whitelist IP addresses
- Update MONGODB_URI in production `.env`

### **Environment Variables**

Ensure all production environment variables are set:
- Database URLs
- API keys (Cloudinary, Groq)
- JWT secrets
- CORS origins

---

## 🤝 **Contributing**roq.com/)

**A comprehensive, enterprise-grade job recruitment and career networking platform designed specifically for the Bangladeshi job market. Built with cutting-edge technologies and powered by AI to revolutionize the hiring process.**

[📖 Documentation](#documentation) • [🎯 Features](#features) • [🛠️ Tech Stack](#tech-stack) • [🚀 Getting Started](#getting-started) • [📸 Screenshots](#screenshots)

---

</div>


## 📋 **Table of Contents**

- [✨ Project Overview](#project-overview)
- [🎯 Key Features](#features)
- [🏗️ System Architecture](#system-architecture)
- [🛠️ Technology Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Configuration](#environment-configuration)
- [📸 Screenshots & UI Showcase](#screenshots)
- [🗂️ Project Structure](#folder-structure)
- [🔐 Authentication & Authorization](#authentication--authorization)
- [🎨 Design System](#design-system)
- [🌐 API Documentation](#api-documentation)
- [🤝 Contributing](#contributing)
- [📜 License](#license)
- [👨‍💻 About the Developer](#about-the-developer)

---

## ✨ **Project Overview**

**HIRELINK** is not just another job portal—it's a **comprehensive career ecosystem** that brings together job seekers, employers, and AI-driven insights to create meaningful professional connections. Designed with the Bangladeshi job market in mind, it features localized currency (BDT), location-based search, and culturally relevant user experiences.

### 🎯 **Mission Statement**

To democratize access to quality employment opportunities and streamline the recruitment process through intelligent automation, creating a bridge between talented professionals and forward-thinking companies in Bangladesh.

### 💡 **What Makes HireLink Different?**

- **🤖 AI-Powered Intelligence**: Leverages Groq AI to generate optimized job descriptions, analyze skill gaps, and provide personalized career recommendations
- **🎨 Modern User Experience**: Built with React 19 and Tailwind CSS 4 for a sleek, responsive, and intuitive interface
- **🔒 Enterprise-Grade Security**: JWT-based authentication with role-based access control (RBAC)
- **☁️ Cloud-Native**: Cloudinary integration for seamless file uploads and media management
- **📊 Real-Time Analytics**: Comprehensive dashboards for employers and job seekers
- **💬 Integrated Messaging**: Built-in communication system for seamless interaction
- **🇧🇩 Bangladesh-First**: Localized for Bangladeshi job market with BDT currency, local locations, and relevant job categories

---

## 🎯 **Key Features**

### 👤 **For Job Seekers**

<details>
<summary><b>🔓 Click to expand Job Seeker features</b></summary>

#### Profile Management
- ✅ **Comprehensive Profile Creation**: Build professional profiles with personal info, skills, education, work experience
- 📸 **Profile Picture Upload**: Upload and manage profile pictures via Cloudinary
- 📄 **Resume Management**: Upload, update, and manage resumes (PDF, DOC, DOCX)
- 🎯 **Skill Portfolio**: Add, remove, and showcase your technical and soft skills
- 🏆 **Certificate Showcase**: Upload certificates and credentials to enhance credibility
- 🔗 **Social Profile Integration**: Connect LinkedIn, GitHub, and portfolio links

#### Job Search & Application
- 🔍 **Advanced Search Filters**: Search by keywords, location, company, salary range, experience level
- 💼 **Multiple Job Types**: Full-time, Part-time, Internship, Freelance, Contract positions
- 🏢 **Work Mode Preferences**: Remote, Onsite, Hybrid job options
- 💰 **Salary Range Filtering**: Filter jobs based on expected salary (BDT)
- 📍 **Location-Based Search**: Find jobs in specific cities across Bangladesh
- 🏪 **Company Profiles**: Explore detailed company information before applying
- ⭐ **Save Jobs**: Bookmark interesting positions for later review
- 📝 **One-Click Apply**: Streamlined application process with profile auto-fill

#### Application Tracking
- 📊 **Application Dashboard**: Track all your applications in one place
- 🔔 **Status Updates**: Real-time notifications on application progress
- 📈 **Application Analytics**: View response rates and success metrics
- ⏰ **Interview Scheduling**: Manage interview invitations and schedules
- 💬 **Direct Messaging**: Communicate with recruiters seamlessly

#### AI-Powered Career Tools
- 🤖 **Skill Gap Analysis**: AI analyzes your profile against job requirements
- 💡 **Personalized Recommendations**: Get job suggestions based on your profile
- 📚 **Learning Path Suggestions**: Receive recommendations for skill development

</details>

### 🏢 **For Employers**

<details>
<summary><b>🔓 Click to expand Employer features</b></summary>

#### Company Profile Management
- 🏭 **Company Branding**: Create compelling company profiles with logos and descriptions
- 📊 **Company Analytics**: Track profile views and engagement metrics
- 👥 **Multiple HR Users**: Add and manage multiple recruiters under one company
- 🌐 **Social Links**: Showcase company social media and website

#### Job Posting & Management
- ✍️ **Rich Job Posting**: Create detailed job postings with rich text formatting
- 🤖 **AI Job Description Generator**: Generate optimized job descriptions using Groq AI
- 📋 **Custom Requirements**: Specify education, experience, skills, and qualifications
- 💵 **Flexible Salary Options**: Set salary ranges with negotiable options
- ⏳ **Application Deadlines**: Set deadlines for applications
- 📈 **Job Performance Metrics**: Track views, applications, and conversion rates
- ✏️ **Edit Anytime**: Update job postings even after publication
- 🗑️ **Job Management**: Archive or delete outdated positions

#### Applicant Management
- 📥 **Application Dashboard**: View all applications in an organized interface
- 👀 **Candidate Profiles**: Access complete candidate profiles and resumes
- ⭐ **Shortlisting System**: Mark candidates for further review
- 📝 **Application Status**: Update candidates through the hiring pipeline
- 💬 **Direct Communication**: Message candidates directly through the platform
- 🎯 **Candidate Filtering**: Filter applicants by skills, experience, education
- 📊 **Hiring Analytics**: Track time-to-hire and other recruitment metrics

#### Advanced Recruitment Tools
- 🔍 **Candidate Search**: Search through job seeker database
- 📧 **Bulk Actions**: Manage multiple applications simultaneously
- 📈 **Recruitment Dashboard**: Comprehensive overview of hiring activities
- 🎯 **Skills Matching**: AI-powered matching of candidates to job requirements

</details>

### 🎨 **Platform-Wide Features**

<details>
<summary><b>🔓 Click to expand Platform features</b></summary>

- 🔐 **Secure Authentication**: JWT-based auth with refresh token mechanism
- 🎭 **Role-Based Access Control**: Separate experiences for job seekers, employers, and admins
- 📱 **Fully Responsive Design**: Perfect experience on mobile, tablet, and desktop
- 🌙 **Theme Support**: Light and dark mode with customizable color schemes
- 💬 **Messaging System**: Real-time communication between users
- 🔔 **Notification Center**: Stay updated with all platform activities
- 🔍 **Global Search**: Quick search across jobs, companies, and users
- 📊 **Analytics Dashboard**: Comprehensive insights for all user types
- 🔒 **Password Management**: Change password and forgot password functionality
- 🎯 **Personalized Onboarding**: Role-specific onboarding flows
- ⚡ **Performance Optimized**: Fast load times and smooth interactions
- ♿ **Accessibility**: WCAG 2.1 compliant design
- 🌍 **Localization Ready**: Built for easy language expansion

</details>

---

## 🏗️ **System Architecture**

```mermaid
graph TB
    subgraph Frontend[Frontend Layer - React + Vite]
        A[React 19.1.1] --> B[Redux Toolkit State Management]
        A --> C[React Router v7 Navigation]
        A --> D[Tailwind CSS 4 Styling]
        B --> E[Authentication State]
        B --> F[User Data State]
    end
    
    subgraph API[API Layer - Express.js]
        G[Express Server] --> H[JWT Middleware]
        G --> I[Multer File Upload]
        G --> J[CORS Configuration]
        H --> K[Protected Routes]
    end
    
    subgraph Services[External Services]
        L[Cloudinary - Media Storage]
        M[Groq AI - Job Description Generation]
    end
    
    subgraph Database[Database Layer - MongoDB]
        N[(MongoDB Atlas)] --> O[User Collection]
        N --> P[Job Collection]
        N --> Q[Company Profile Collection]
        N --> R[Job Seeker Profile Collection]
        N --> S[Application Collection]
        N --> T[Message Collection]
    end
    
    Frontend -->|HTTP/HTTPS| API
    API -->|Mongoose ODM| Database
    API -->|SDK| L
    API -->|API| M
    
    style Frontend fill:#61dafb,stroke:#333,stroke-width:2px
    style API fill:#68a063,stroke:#333,stroke-width:2px
    style Database fill:#4db33d,stroke:#333,stroke-width:2px
    style Services fill:#ff6b6b,stroke:#333,stroke-width:2px
```

### **Architecture Highlights**

- **Three-Tier Architecture**: Clean separation of presentation, business logic, and data layers
- **RESTful API Design**: Standard HTTP methods with proper status codes
- **Schema-Based Validation**: Mongoose schemas ensure data integrity
- **Middleware Pipeline**: Request processing through authentication, validation, and error handling
- **File Upload Strategy**: Multipart form data handling with size and type validation
- **State Management**: Centralized Redux store with slice-based organization

---

## 🛠️ **Technology Stack**

### **Frontend Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| ⚛️ **React** | 19.1.1 | UI library for building component-based interfaces |
| ⚡ **Vite** | 7.1.7 | Next-generation frontend build tool with HMR |
| 🎨 **Tailwind CSS** | 4.1.13 | Utility-first CSS framework for rapid UI development |
| 🔄 **Redux Toolkit** | 2.9.0 | State management with simplified store configuration |
| 🧭 **React Router** | 7.9.3 | Client-side routing with nested routes support |
| 📡 **Axios** | 1.12.2 | Promise-based HTTP client with interceptors |
| 🎭 **Hero Icons** | 2.2.0 | Beautiful hand-crafted SVG icons |
| 💎 **Font Awesome** | 7.0.1 | Comprehensive icon library |
| 🎨 **Tremor** | 3.18.7 | React components for building dashboards |
| 🎯 **Iconify** | 4.1.1 | Universal icon framework |
| 🔄 **React Icons** | 5.5.0 | Popular icon library for React |

### **Backend Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| 🟢 **Node.js** | - | JavaScript runtime for server-side execution |
| 🚂 **Express.js** | 5.1.0 | Fast, unopinionated web framework for Node.js |
| 🍃 **MongoDB** | - | NoSQL database for flexible data modeling |
| 📦 **Mongoose** | 8.18.2 | Elegant MongoDB object modeling for Node.js |
| 🔐 **JWT** | 9.0.2 | Secure token-based authentication |
| 🔒 **Bcrypt.js** | 3.0.2 | Password hashing with salt generation |
| ☁️ **Cloudinary** | 2.7.0 | Cloud-based image and video management |
| 🤖 **Groq SDK** | 0.33.0 | AI integration for intelligent features |
| 📁 **Multer** | 2.0.2 | Middleware for handling multipart/form-data |
| 🍪 **Cookie Parser** | 1.4.7 | Parse and handle HTTP cookies |
| 🌐 **CORS** | 2.8.5 | Enable Cross-Origin Resource Sharing |
| 🧹 **DOMPurify** | 3.2.7 | XSS sanitization for HTML content |
| 🔧 **dotenv** | 17.2.2 | Environment variable management |

### **Development Tools**

- 📝 **ESLint** - Code linting and quality assurance
- 🎨 **Prettier** - Code formatting for consistency
- 🔍 **VS Code** - Primary development environment
- 🐙 **Git** - Version control and collaboration
- 📦 **npm** - Package management

---

## 🚀 **Getting Started**

Follow these comprehensive instructions to set up and run HireLink on your local development environment.

### **Prerequisites**

Before you begin, ensure you have the following installed on your system:

```bash
Node.js (v18.x or higher)
npm (v9.x or higher)
MongoDB (v6.x or higher) or MongoDB Atlas account
Git
```

**Recommended Tools:**
- VS Code or your preferred code editor
- MongoDB Compass for database visualization
- Postman or Thunder Client for API testing

---

### **Backend Setup**

#### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/Rockstatata/HireLink.git
cd HireLink/hirelink-backend
```

#### 2️⃣ **Install Dependencies**

```bash
npm install
```

This will install all required packages:
- Express.js server framework
- MongoDB & Mongoose for database
- JWT for authentication
- Cloudinary for file uploads
- Groq SDK for AI features
- And more...

#### 3️⃣ **Environment Configuration**

Create a `.env` file in the `hirelink-backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/hirelink
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hirelink

# JWT Configuration
ACCESS_TOKEN_SECRET=your_super_secret_access_token_key_here_min_32_chars
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_super_secret_refresh_token_key_here_min_32_chars
REFRESH_TOKEN_EXPIRY=10d

# Cloudinary Configuration (Get from https://cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Groq AI Configuration (Get from https://groq.com)
GROQ_API_KEY=your_groq_api_key_here

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

**🔑 How to get API keys:**

<details>
<summary><b>Cloudinary Setup</b></summary>

1. Visit [cloudinary.com](https://cloudinary.com) and sign up for a free account
2. Navigate to your Dashboard
3. Copy your **Cloud Name**, **API Key**, and **API Secret**
4. Paste them into your `.env` file

**Free tier includes:**
- 25 GB storage
- 25 GB bandwidth per month
- Perfect for development and small projects

</details>

<details>
<summary><b>Groq AI Setup</b></summary>

1. Visit [console.groq.com](https://console.groq.com) and create an account
2. Navigate to API Keys section
3. Generate a new API key
4. Copy and paste it into your `.env` file

**Free tier includes:**
- Fast inference speeds
- Multiple model options (Llama, Mixtral, etc.)
- Great for AI-powered features

</details>

#### 4️⃣ **Start the Backend Server**

```bash
npm start
```

✅ **Success!** Your backend should now be running at `http://localhost:5000`

**Verify the server:**
```bash
# Check if server is running
curl http://localhost:5000/api/v1/users/ping
# Expected response: { "success": true, "message": "Server is running" }
```

---

### **Frontend Setup**

#### 1️⃣ **Navigate to Frontend Directory**

```bash
cd ../hirelink-frontend
```

#### 2️⃣ **Install Dependencies**

```bash
npm install
```

This installs:
- React 19 with latest features
- Vite for lightning-fast development
- Tailwind CSS 4 for modern styling
- Redux Toolkit for state management
- Axios for API communication
- And more...

#### 3️⃣ **Frontend Configuration**

Create a `config.js` file in `hirelink-frontend` directory (if not exists):

```javascript
const config = {
  // Backend API URL
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  
  // Application Settings
  APP_NAME: 'HireLink',
  APP_VERSION: '1.0.0',
  
  // Feature Flags
  ENABLE_AI_FEATURES: true,
  ENABLE_MESSAGING: true,
  ENABLE_NOTIFICATIONS: true,
};

export default config;
```

**Optional:** Create `.env` file for environment variables:

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_APP_NAME=HireLink
```

#### 4️⃣ **Start the Development Server**

```bash
npm run dev
```

✅ **Success!** Your frontend should now be running at `http://localhost:5173`

**🎉 Open your browser and visit:** `http://localhost:5173`

---

### **🎯 Quick Start Guide**

<details>
<summary><b>For Job Seekers</b></summary>

1. **Register** - Click "Sign Up" and choose "Job Seeker"
2. **Complete Onboarding** - Fill in your basic information
3. **Build Profile** - Add skills, education, work experience
4. **Upload Resume** - Upload your latest resume (PDF/DOC)
5. **Search Jobs** - Use filters to find relevant opportunities
6. **Apply** - One-click apply to jobs that match your profile
7. **Track Applications** - Monitor your application status in the dashboard

</details>

<details>
<summary><b>For Employers</b></summary>

1. **Register** - Click "Sign Up" and choose "Employer"
2. **Company Setup** - Complete your company profile
3. **Add Logo** - Upload your company logo
4. **Post Jobs** - Create job postings (or use AI to generate descriptions)
5. **Review Applications** - Check candidate profiles and resumes
6. **Shortlist** - Mark promising candidates for further review
7. **Contact** - Message candidates directly through the platform

</details>

---

### **📦 Build for Production**

#### **Frontend Build**

```bash
cd hirelink-frontend
npm run build
```

This creates an optimized production build in the `dist/` directory.

**Preview the production build:**
```bash
npm run preview
```

#### **Backend Deployment**

The backend is production-ready. For deployment:

1. **Set production environment variables**
2. **Use a process manager like PM2:**
   ```bash
   npm install -g pm2
   pm2 start src/app.js --name hirelink-backend
   ```

3. **Configure Nginx as reverse proxy** (optional)

---

### **🔧 Troubleshooting**

<details>
<summary><b>Common Issues and Solutions</b></summary>

**Issue: MongoDB connection error**
```
Solution: 
- Ensure MongoDB is running: `mongod` or use MongoDB Atlas
- Check your MONGODB_URI in .env file
- Verify network connectivity
```

**Issue: Port already in use**
```
Solution:
- Change PORT in backend .env file
- Kill the process using the port: `npx kill-port 5000`
- On Windows: `netstat -ano | findstr :5000` then `taskkill /PID <PID> /F`
```

**Issue: CORS errors**
```
Solution:
- Verify CORS_ORIGIN in backend .env matches frontend URL
- Check that frontend is running on the specified port
- Clear browser cache and reload
```

**Issue: Cloudinary upload fails**
```
Solution:
- Verify Cloudinary credentials in .env
- Check file size (default limit: 10MB)
- Ensure file type is supported (jpg, png, pdf, doc, docx)
```

**Issue: Groq AI features not working**
```
Solution:
- Verify GROQ_API_KEY in .env
- Check API rate limits
- Ensure internet connectivity
```

</details>

---

### **🧪 Testing**

```bash
# Backend tests (if configured)
cd hirelink-backend
npm test

# Frontend tests (if configured)
cd hirelink-frontend
npm test
```

---

## 📸 **Screenshots & UI Showcase**

Experience the beautiful and intuitive interface of HireLink through these screenshots:

### 🏠 **Landing & Authentication**

<div align="center">

| Welcome Screen | Login Interface |
|:---:|:---:|
| ![Welcome](screenshots/Welcome1.png) | ![Login](screenshots/login.png) |
| Modern landing page with compelling CTAs | Secure login with form validation |

| Job Seeker Registration | Employer Registration |
|:---:|:---:|
| ![Job Seeker Register](screenshots/register_jobseeker.png) | ![Employer Register](screenshots/register_company.png) |
| Simple registration for job seekers | Company registration with details |

</div>

---

### 👤 **Job Seeker Experience**

<div align="center">

| Onboarding Flow | Profile Building |
|:---:|:---:|
| ![Onboarding 1](screenshots/onboarding_jobseeker1.png) | ![Onboarding 2](screenshots/onboarding_jobseeker2.png) |
| Step-by-step onboarding process | Guided profile completion |

| Dashboard | Job Search & Listings |
|:---:|:---:|
| ![Job Seeker Home](screenshots/home_jobseeker.png) | ![Find Jobs](screenshots/findjobs1.png) |
| Personalized job seeker dashboard | Advanced job search with filters |

| Job Filters | Job Details |
|:---:|:---:|
| ![Find Jobs 2](screenshots/findjobs2.png) | ![Job Details](screenshots/jobdetails.png) |
| Comprehensive filtering options | Detailed job information view |

| Complete Job Info | My Applications |
|:---:|:---:|
| ![Job Details 2](screenshots/jobdetails2.png) | ![Applications](screenshots/applications_jobseeker.png) |
| Full job description with AI insights | Track all your applications |

| User Profile | Profile Details |
|:---:|:---:|
| ![Profile 1](screenshots/profile_jobseeker.png) | ![Profile 2](screenshots/profile_jobseeker2.png) |
| Comprehensive profile overview | Skills and experience showcase |

| Certifications | Saved Jobs |
|:---:|:---:|
| ![Profile 3](screenshots/profile_jobseeker3.png) | ![Saved Jobs](screenshots/savedjob.png) |
| Upload certificates and credentials | Bookmark jobs for later |

</div>

---

### 🏢 **Employer Experience**

<div align="center">

| Employer Onboarding | Company Setup |
|:---:|:---:|
| ![Employer Onboarding 1](screenshots/onboarding_employer1.png) | ![Employer Onboarding 2](screenshots/onboarding_employer2.png) |
| Company information collection | Additional company details |

| Brand Setup | Employer Dashboard |
|:---:|:---:|
| ![Employer Onboarding 3](screenshots/onboarding_employer3.png) | ![Employer Home](screenshots/home_employer.png) |
| Company branding and logo upload | Comprehensive employer dashboard |

| Job Posting - Step 1 | Job Posting - Step 2 |
|:---:|:---:|
| ![Job Post 1](screenshots/jobpost1.png) | ![Job Post 2](screenshots/jobpost2.png) |
| Basic job information | Requirements and qualifications |

| Job Posting - Step 3 | Applications Management |
|:---:|:---:|
| ![Job Post 3](screenshots/jobpost3.png) | ![Applications](screenshots/applications_employer.png) |
| Final details and AI description | Review and manage applicants |

| Shortlisted Candidates | Company Profile |
|:---:|:---:|
| ![Shortlisted](screenshots/shortlisted.png) | ![Company Profile 1](screenshots/profile_company1.png) |
| Manage shortlisted applicants | Public company profile view |

| Company Details | Companies Directory |
|:---:|:---:|
| ![Company Profile 2](screenshots/profile_company2.png) | ![Companies](screenshots/companies.png) |
| Detailed company information | Browse all companies on platform |

</div>

---

### 🔧 **Platform Features**

<div align="center">

| Messaging System | Security Settings |
|:---:|:---:|
| ![Messages](screenshots/message.png) | ![Change Password](screenshots/changepassword.png) |
| Real-time messaging between users | Secure password management |

</div>

---

### ✨ **Design Highlights**

- 🎨 **Modern UI/UX**: Clean, intuitive interface following Material Design principles
- 📱 **Fully Responsive**: Perfect experience across all devices and screen sizes
- 🎭 **Consistent Theming**: Beautiful color scheme throughout the application
- ⚡ **Smooth Animations**: Delightful micro-interactions and transitions
- ♿ **Accessible Design**: WCAG 2.1 compliant for inclusive user experience
- 🖼️ **Rich Media Support**: Optimized image loading and display
- 🔄 **Loading States**: Skeleton screens and progress indicators
- ✅ **Form Validation**: Real-time feedback and error messages

---
