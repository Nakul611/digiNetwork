import { AiOutlineUserDelete } from 'react-icons/ai'
import CustomCard from '../../ui/Card'

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
          buttonText="Delete"
          onButtonClick={handleButtonClick}
        />
    </div>  
)}

export default DeleteUser