import dotenv from "dotenv";

dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./db/db.js";

// Load environment variables


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at port : ${PORT}`);
        })
    }
    ).catch((error) => {
        console.log(`DB Connection failed: ${error}`);
    })