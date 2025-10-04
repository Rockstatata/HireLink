import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserProfile,
  getSavedJobs,
  getMyApplications,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-profile").put(verifyJWT, updateUserProfile);
router.route("/saved-jobs").get(verifyJWT, getSavedJobs);
router.route("/my-applications").get(verifyJWT, getMyApplications);

export default router;