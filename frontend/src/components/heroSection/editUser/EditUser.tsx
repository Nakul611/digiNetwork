import { LiaUserEditSolid } from 'react-icons/lia'
import CustomCard from '../../ui/Card'

const EditUser = () => {

  const handleButtonClick = () => {
    console.log('User Edited');
  };

  return (
    <div className='bg-yellow-200'>
        <CustomCard
          header="Edit User"
          icon={LiaUserEditSolid}
          description="Edit the user details"
          buttonText="Edit"
          onButtonClick={handleButtonClick}
        />
    </div>
  )
}

export default EditUser