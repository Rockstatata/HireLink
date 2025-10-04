import { Navigate, useLocation } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from "react-redux";
import useUpdateUserData from "./hooks/useUpdateUserData";
<<<<<<< Updated upstream
import { useEffect } from "react";
=======
import { useEffect, useState } from "react"; 
import CompanyDashboard from "./Pages/CompanyDashboard";
import { setLoadingFalse } from "./store/authSlice";
>>>>>>> Stashed changes

function App() {
  const { userData, loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const hideOnRoutes = ["/login", "/signup"];
  const updateUser = useUpdateUserData();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await updateUser();
      } catch (error) {
        console.error('Auth initialization failed:', error);
      } finally {
        setInitialLoad(false);
        dispatch(setLoadingFalse());
      }
    };

    initializeAuth();
  }, []);

<<<<<<< Updated upstream
=======
  // Show loading spinner during initial app load
  if (initialLoad || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

>>>>>>> Stashed changes
  return (
    <>
      <div>
        {!(
          hideOnRoutes.includes(location.pathname)
        ) && <Navbar />}
        <AllRoutes />
      </div>
    </>
  )
}

export default App
