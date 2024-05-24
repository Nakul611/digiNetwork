import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear any existing errors when input changes
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate password criteria
    if (!passwordCriteriaValid()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long.'
      }));
      return;
    }
    // Log form data
    console.log(formData);
    localStorage.setItem('userData', JSON.stringify(formData));
    // Route to login page
    navigate('/authform/login');
  };

  const passwordCriteriaValid = () => {
    const { password, username } = formData;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
      return false;
    }
    if (password.includes(username)) {
      return false;
    }
    return true;
  };
  

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-6 text-center bg-slate-600 text-white rounded-t-xl">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="w-full py-2 px-4 bg-slate-600 text-white rounded-b-xl shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
