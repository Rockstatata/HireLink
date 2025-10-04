import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../services/userService';
<<<<<<< Updated upstream
import { updateUser } from '../store/authSlice';
=======
import { updateUser, logout } from '../store/authSlice';
>>>>>>> Stashed changes

const useUpdateUserData = () => {
  const dispatch = useDispatch();

  const updateUserData = async () => {
    try {
      const response = await getCurrentUser();
<<<<<<< Updated upstream
      dispatch(updateUser(response.data.data.user));
=======
      if (response.data && response.data.data && response.data.data.user) {
        dispatch(updateUser(response.data.data.user));
        return response.data.data.user;
      }
>>>>>>> Stashed changes
    } catch (error) {
      console.error('Failed to update user data', error);
      // If token is invalid, logout the user
      if (error.response?.status === 401 || error.response?.status === 403) {
        dispatch(logout());
      }
      return null;
    }
  };

  return updateUserData;
};

export default useUpdateUserData;