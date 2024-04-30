import { AiOutlineUserDelete } from 'react-icons/ai'
import CustomCard from '../../../constants/ui/Card'

const DeleteUser = () => {

  const handleButtonClick = () => {
    console.log('User Deleted');
  };

  return (
    <div className='bg-red-300'>
        <CustomCard
          header="Delete User"
          icon={AiOutlineUserDelete}
          description="Delete the user details"
          onButtonClick={handleButtonClick}
        />
    </div>  
)}

export default DeleteUser