import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero';
import Error from './constants/ui/Error';
import AddNewUserContent from './components/heroSection/addNewUser/components/AddNewUserContent';
import EditUserContent from './components/heroSection/editUser/components/EditUserContent';
import DeleteUserContent from './components/heroSection/deleteUser/components/DeleteUserContent';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/addnewuser' element={<AddNewUserContent />} />
          <Route path='/edituser' element={<EditUserContent />} />
          <Route path='/deleteuser' element={<DeleteUserContent />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
