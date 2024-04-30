import AddNewUser from "./addNewUser/AddNewUser"
import DeleteUser from "./deleteUser/DeleteUser"
import EditUser from "./editUser/EditUser"

const Hero = () => {
  return (
    <div className="flex space-x-12 p-24 justify-center items-center">
      <AddNewUser />
      <EditUser />
      <DeleteUser />
    </div>
  )
}

export default Hero;