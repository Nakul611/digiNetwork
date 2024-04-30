import { AiOutlineUserAdd } from "react-icons/ai";

import CustomCard from "../../../constants/ui/Card";
import AddNewUserContent from "./components/AddNewUserContent";


const AddNewUser = () => {

  const handleButtonClick = () => {
    console.log('User Added');
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