import CustomCard from "../../ui/Card";

import { AiOutlineUserAdd } from "react-icons/ai";


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
          buttonText="Add the user"
          onButtonClick={handleButtonClick}
        />
    </div>
  )
}

export default AddNewUser