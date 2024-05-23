import { LiaUserEditSolid } from 'react-icons/lia'
import CustomCard from '../../../constants/ui/Card'

import { useNavigate } from 'react-router-dom';

const EditUser: React.FC = () => {
  const navigate = useNavigate();

  const handleEditUser = () => {
    navigate('/edituser');
  };

  return (
    <div className='bg-yellow-200'>
        <CustomCard
          header="Edit User"
          icon={LiaUserEditSolid}
          description="Edit the user details"
          onButtonClick={handleEditUser}
        />
    </div>
  )
}

export default EditUser;