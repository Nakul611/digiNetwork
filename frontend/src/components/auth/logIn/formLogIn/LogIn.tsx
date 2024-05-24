import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.email === formData.email && userData.password === formData.password) {
      // Route to home page
      navigate('/');
    } else {
      setError('User does not exist. Please sign up first.');
    }
  };


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-6 text-center bg-slate-600 text-white rounded-t-xl">Log In</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="w-full py-2 px-4 bg-slate-600 text-white shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-b-xl ">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
