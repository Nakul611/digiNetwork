import { AiOutlineUserDelete } from 'react-icons/ai'
import CustomCard from '../../../constants/ui/Card'

import { useNavigate } from 'react-router-dom';

const DeleteUser: React.FC = () => {
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    navigate('/deleteuser');
  };


  return (
    <div className='bg-red-300'>
        <CustomCard
          header="Delete User"
          icon={AiOutlineUserDelete}
          description="Delete the user details"
          onButtonClick={handleDeleteUser}
        />
    </div>  
)}

export default DeleteUser;