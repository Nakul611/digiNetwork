import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero';
import Error from './constants/ui/Error';
import AddNewUserContent from './components/heroSection/addNewUser/components/AddNewUserContent';
import EditUserContent from './components/heroSection/editUser/components/EditUserContent';
import DeleteUserContent from './components/heroSection/deleteUser/components/DeleteUserContent';

import AuthForm from './components/auth/AuthForm';
import SignUp from './components/auth/signUp/formSignUp/SignUp';
import LogIn from './components/auth/logIn/formLogIn/LogIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userData'));

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      if (isLoggedIn) {
        localStorage.removeItem('userData');
        setIsLoggedIn(false);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isLoggedIn]);

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          {isLoggedIn && (
            <>
              <Route path="/addnewuser" element={<AddNewUserContent />} />
              <Route path="/edituser" element={<EditUserContent />} />
              <Route path="/deleteuser" element={<DeleteUserContent />} />
            </>
          )}
          {!isLoggedIn && (
            <Route path="/authform/*" element={<AuthForm />} />
          )}
          <Route path='/authform/signup' element={!isLoggedIn ? <SignUp /> : <Navigate to="/" replace />} />
          <Route path='/authform/login' element={!isLoggedIn ? <LogIn setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" replace />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
