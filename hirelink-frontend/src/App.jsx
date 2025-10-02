import { Navigate, useLocation } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from './components/Navbar'
import { useSelector } from "react-redux";
import useUpdateUserData from "./hooks/useUpdateUserData";
import { useEffect } from "react";
import JobListing from "./Pages/JobListing";
function App() {
  const { userData } = useSelector((store) => store.auth);

  const location = useLocation();
  const hideOnRoutes = ["/login", "/signup"];
  const updateUser = useUpdateUserData();

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <>
      <div>
        {!(
          location.pathname.startsWith("/dashboard") ||
          hideOnRoutes.includes(location.pathname)
        ) && <Navbar />}
        <AllRoutes />
      </div>
    </>
  )
}

export default App
