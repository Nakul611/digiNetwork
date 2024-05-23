import SlidingWindow from "../../constants/ui/SlidingWndow"
import AddNewUser from "./addNewUser/AddNewUser"
import DeleteUser from "./deleteUser/DeleteUser"
import EditUser from "./editUser/EditUser" 

const Hero= () => {
  return (
    <div className="flex flex-col">
      <SlidingWindow/>
      <div className="flex p-12 items-center justify-center space-x-16">
        <AddNewUser />
        <EditUser />
        <DeleteUser />
      </div>
    </div>
  )
}

export default Hero;