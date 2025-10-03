import { useDispatch } from 'react-redux';
import { userService } from '../services/userService';
import { updateUser } from '../store/authSlice';

const useUpdateUserData = () => {
  const dispatch = useDispatch();

  const updateUserData = async () => {
    try {
      const response = await userService.getCurrentUser();
      dispatch(updateUser(response.data.data.user));
    } catch (error) {
      console.error('Failed to update user data', error);
    }
  };

  return updateUserData;
};

export default useUpdateUserData;