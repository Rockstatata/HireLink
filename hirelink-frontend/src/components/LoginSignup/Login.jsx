import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import logo from "../assets/media/hirelink.png";
import { loginStart, loginSuccess, loginFailure } from '../../store/authSlice';
import { loginUser } from '../../services/userService';

function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const resetErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    makeLoginRequest(formData);
  };

  const makeLoginRequest = async (userData) => {
    dispatch(loginStart());
    try {
      const response = await loginUser(userData);
      dispatch(loginSuccess(response.data.data.user));
      alert('Login successful!');
    } catch (error) {
      dispatch(loginFailure());
      setErrorMessage(error.response?.data?.message || 'Login failed.');
      resetErrorMessage();
    }
  };

  return (
    <div>
      <div className="hidden font-semibold text-xl cursor-pointer md:flex items-center text-text-primary px-16 mt-3">
        <Link to="/" className="flex items-center font-poppins">
          <img
            src={logo}
            className="w-20 rounded-lg mr-3"
            alt="HireLink Logo"
          />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-3/6 sm:h-screen flex items-center justify-center sm:pt-5 sm:pl-5 md:w-3/5 lg:pl-16 lg:pt-5">
          <div className="h-full w-full sm:text-right sm:pr-12 bg-primary sm:pt-24 sm:pl-14 text-text-inverse sm:rounded-t-lg lg:pt-44">
            <h2 className="py-4 text-xl text-center sm:text-5xl sm:text-right font-bold sm:mb-5 sm:pl-4 xl:text-6xl ">
              Find the job made for you.
            </h2>
            <p className="hidden sm:block font-light sm:pl-3 sm:text-lg text-text-inverse xl:text-xl xl:pl-16">
              Browse over 130K jobs at top companies and fast-growing startups.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-3/6 pt-7 sm:pt-14 md:w-2/5">
          <div className="p-3 sm:p-10">
            <h2 className="text-3xl font-bold text-text-primary">Login</h2>
            <p className="mt-3 text-text-secondary">Find the job made for you!</p>
            <form className="mt-6" onSubmit={handleFormSubmission}>
              <div className="flex flex-col">
                <label className="font-semibold text-text-primary">Email:</label>

                <input
                  type="text"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded h-10 text-base pl-5 mb-3 border-x border-y border-neutral-400 bg-background text-text-primary"
                  placeholder="Email"
                />
                <label className="font-semibold text-text-primary">Password:</label>

                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="rounded h-10 pl-5 text-base mb-3 border-x border-y border-neutral-400 bg-background text-text-primary"
                  placeholder="Password"
                />
                <div className="flex justify-between">
                  <span className="text-error text-sm ml-2">
                    {errorMessage}
                  </span>
                  <a
                    href="#"
                    className="text-right font-light text-text-primary cursor-pointer mb-3 underline"
                  >
                    Forget Password?
                  </a>
                </div>

                <button className="bg-primary rounded-md text-text-inverse font-normal text-sm h-11 hover:bg-primary-dark transition-colors">
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>

              {/* Temp Hidden */}
              <div className="hidden flex items-center justify-center gap-5 my-6">
                <div className="bg-gray-400 h-px w-1/4"></div>
                <p className="text-gray-400 text-sm">or Login with Google</p>
                <div className="bg-gray-400 h-px w-1/4"></div>
              </div>
            </form>

            {/* Hidden google login button */}
            <button className="hidden px-10 items-center justify-center gap-2 flex h-11 rounded-md text-black text-sm w-full border-x border-y border-gray-400">
              <img
                className="w-10 p-1"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                alt="Google Sign-In"
              />
              <span className="text-black font-normal">
                Sign in with Google
              </span>
            </button>
            <div className="mt-5">
              <p className="cursor-pointer text-center text-text-secondary">
                Don't have an account?{" "}
                <Link 
                  to="/signup" 
                  className="underline text-primary hover:text-primary-dark"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
