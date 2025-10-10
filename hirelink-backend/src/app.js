import dotenv from "dotenv";

dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js";
import jobRouter from "./routes/jobs.routes.js";
import companyRouter from "./routes/company.routes.js";

import { connectDB } from "./db/db.js";

// Load environment variables


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({  
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  exposedHeaders: ['Set-Cookie'],
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Routes
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running", timestamp: new Date().toISOString() });
});

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRouter);
app.use("/api/company", companyRouter);

// Global error handler
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(error.status || 500).json({
    message: error.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});


connectDB()
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running at port : ${PORT}`);
        });
    }
    ).catch((error) => {
        console.log(`DB Connection failed: ${error}`);
    })