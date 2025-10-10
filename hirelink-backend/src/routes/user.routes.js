import { Router } from "express";
import multer from "multer";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserProfile,
  getSavedJobs,
  getMyApplications,
  getUserProfile,
  ping,
  authPing,
  updateProfilePicture,
  addSkill,
  removeSkill,
  updateResume,
  userPublicProfile,
  analyzeSkillGap,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.route("/ping").get(ping);
router.route("/auth-ping").get(verifyJWT, authPing);
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-profile").put(verifyJWT, updateUserProfile);
router.route("/saved-jobs").get(verifyJWT, getSavedJobs);
router.route("/my-applications").get(verifyJWT, getMyApplications);
router.route("/profile").get(verifyJWT, getUserProfile);
router.route("/profile/jobseeker").patch(verifyJWT, updateUserProfile);
router.route("/profile-picture").post(verifyJWT, upload.single("profilePicture"), updateProfilePicture);
router.route("/add-skill").post(verifyJWT, addSkill);
router.route("/remove-skill").post(verifyJWT, removeSkill);
router.route("/resume").post(verifyJWT, updateResume);
router.route("/saved-jobs").get(verifyJWT, getSavedJobs);
router.route("/public-profile/:id").get(userPublicProfile);
router.route("/skill-gap/:jobId").get(verifyJWT, analyzeSkillGap);

export default router;