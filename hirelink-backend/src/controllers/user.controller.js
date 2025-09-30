import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { JobSeekerProfile } from "../models/jobSeekerProfile.model.js";
import { CompanyProfile } from "../models/companyProfile.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  maxAge: 1000 * 60 * 60 * 24 * 7,
  domain: process.env.NODE_ENV = "localhost",
};

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      `Something went wrong while generating tokens: ${error}`
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body; // Added 'name' to destructuring

  if ([name, email, password, role].some((field) => field?.trim() === "")) {
    // Updated validation to include 'name'
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const username = email.split("@")[0];
  const user = await User.create({
    name, // Added 'name' field
    email: email.toLowerCase(),
    username: username.toLowerCase(),
    password,
    role,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  const { refreshToken, accessToken } = await generateAccessAndRefereshTokens(
    createdUser._id
  );

  return res
    .status(201)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(new ApiResponse(201, { user: createdUser, accessToken, refreshToken }, "User registered successfully")); // Updated to return 'user' object
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  if (!password) {
    throw new ApiError(400, "Password is required");
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { refreshToken, accessToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User login successful"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "User logged out"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
    .select("-password -refreshToken")
    .populate('jobSeekerProfile')
    .populate('companyProfile');

  return res.status(200).json(new ApiResponse(200, { user }, "Current user fetched successfully"));
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const updateData = req.body;

  // Get the user to check their role
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  let profileId = null;

  // Create appropriate profile document based on user role
  if (user.role === "jobSeeker") {
    // Create or update JobSeekerProfile
    const jobSeekerData = {
      ...updateData,
      name: user.name, // Add user name to profile
      // Ensure workExperience has the right structure
      workExperience: updateData.workExperience?.map(exp => ({
        jobTitle: exp.jobTitle || "",
        company: {
          name: exp.company?.name || "",
          logoUrl: exp.company?.logoUrl || "",
          domain: exp.company?.domain || "",
        },
        currentJob: !updateData.notEmployed, // Set currentJob based on employment status
      })) || [],
    };

    let jobSeekerProfile;
    if (user.jobSeekerProfile) {
      // Update existing profile
      jobSeekerProfile = await JobSeekerProfile.findByIdAndUpdate(
        user.jobSeekerProfile,
        jobSeekerData,
        { new: true }
      );
    } else {
      // Create new profile
      jobSeekerProfile = await JobSeekerProfile.create(jobSeekerData);
      profileId = jobSeekerProfile._id;
    }
  } else if (user.role === "employer") {
    // Create or update CompanyProfile
    const companyData = {
      ...updateData,
      // Ensure companySize has proper number types
      companySize: {
        from: parseInt(updateData.companySize?.from) || 0,
        to: parseInt(updateData.companySize?.to) || 0,
      },
      // Ensure companySocialProfiles is properly structured
      companySocialProfiles: updateData.companySocialProfiles || {},
    };

    let companyProfile;
    if (user.companyProfile) {
      // Update existing profile
      companyProfile = await CompanyProfile.findByIdAndUpdate(
        user.companyProfile,
        companyData,
        { new: true }
      );
    } else {
      // Create new profile
      companyProfile = await CompanyProfile.create(companyData);
      profileId = companyProfile._id;
    }
  }

  // Update user with profile reference and keep userProfile for backward compatibility
  const updateFields = {
    userProfile: updateData, // Keep for backward compatibility
  };

  if (profileId) {
    if (user.role === "jobSeeker") {
      updateFields.jobSeekerProfile = profileId;
    } else if (user.role === "employer") {
      updateFields.companyProfile = profileId;
    }
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    updateFields,
    { new: true }
  ).select("-password -refreshToken").populate('jobSeekerProfile').populate('companyProfile');

  if (!updatedUser) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(new ApiResponse(200, { user: updatedUser }, "User profile updated successfully"));
});

export { registerUser, loginUser, logoutUser, getCurrentUser, updateUserProfile };