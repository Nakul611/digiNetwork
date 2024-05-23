import { AiOutlineUserAdd } from "react-icons/ai";

import CustomCard from "../../../constants/ui/Card";
import { useNavigate } from 'react-router-dom';

const AddNewUser: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/addnewuser');
  };


  return (
    <div className="bg-green-300">
        <CustomCard
          header="Add New User"
          icon={AiOutlineUserAdd}
          description="Add the new user"
          onButtonClick={handleButtonClick}
        />
        {/* <AddNewUserContent/> */}
    </div>
  )
}

export default AddNewUser