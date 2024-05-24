import { random1 } from '../../assets/index';
import LogIndex from './logIn/index';
import SignIndex from './signUp/index';

const AuthForm = () => {
  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className="w-2/3">
        <img src={random1} alt="Random" className="h-full w-full object-cover" />
      </div>
      
      {/* Form Section */}
      <div className="w-1/3 flex flex-col items-center justify-center p-8 bg-gray-100">
        <div className="flex space-x-10 mb-8">
          <LogIndex />
          <SignIndex />
        </div>
        {/* <Outlet/> */}
      </div>
    </div>
  );
}

export default AuthForm;
