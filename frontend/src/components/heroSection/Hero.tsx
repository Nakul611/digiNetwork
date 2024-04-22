import AddNewUser from "./addNewUser/AddNewUser"
import DeleteUser from "./deleteUser/DeleteUser"
import EditUser from "./editUser/EditUser"

const Hero = () => {
  return (
    <div className="flex space-x-5 p-16 justify-center items-center">
      <AddNewUser />
      <EditUser />
      <DeleteUser />
    </div>
  )
}

export default Hero;