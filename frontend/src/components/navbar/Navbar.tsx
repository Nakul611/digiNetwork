import { useState } from "react";
import { Link } from "react-scroll";
import theNetwork from "../../assets/images/theNetwork.png";
import { NavLinks } from "../../constants/NavLinks";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const LogInPage = () => {
    navigate('/authform');
  };

  const SignUpPage = () => {
    navigate('/authform');
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    // Redirect to login page or any other desired page
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 h-12 bg-slate-200 text-black shadow-md z-50 opacity-70">
      <div>
        <img src={theNetwork} alt="logo" className="p-1 h-10 rounded-full border-black duration-300 transition-all hover:scale-110" />
      </div>
      <div className="hidden md:flex md:items-center">
        <ul className="flex space-x-10 text-lg ml-24">
          {NavLinks.map(({ _id, title, link }) => (
            <li key={_id} className="relative">
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm duration-300 hover:text-slate-600 relative"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex">
        {userData.username ? (
          <div className="flex items-center space-x-4">
            <span className="px-4">{userData.username}</span>
            <button className="flex p-3 rounded-full hover:bg-slate-500 duration-300 items-center text-sm" onClick={handleLogout}>
              <AiOutlineLogout className="" />
            </button>
          </div>
        ) : (
          <>
            <button className="flex px-4 rounded-2xl hover:bg-slate-400 duration-300 items-center text-sm" onClick={LogInPage}>
              Sign In <AiOutlineLogin className="ml-3" />
            </button>
            <span className="p-2"> / </span>
            <button className="flex px-4 rounded-2xl hover:bg-slate-500 duration-300 items-center text-sm" onClick={SignUpPage}>
              Sign Up <AiOutlineLogout className="ml-3" />
            </button>
          </>
        )}
      </div>
      <div className="block md:hidden" onClick={toggleMenu}>
        <svg
          className={`w-6 h-6 ${isMenuOpen ? 'text-black' : 'text-slate-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-200 shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {NavLinks.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm duration-300 hover:text-slate-600"
                  onClick={toggleMenu}
                >
                  {title}
                </Link>
              </li>
            ))}
            {!userData.username && (
              <div className="flex">
                <button
                  className="flex px-3 py-1 rounded-2xl hover:bg-slate-400 duration-300 items-center text-sm"
                  onClick={() => {
                    LogInPage();
                    toggleMenu();
                  }}
                >
                  Sign In <AiOutlineLogin className="ml-3" />
                </button>
                <button
                  className="flex px-3 py-1 rounded-xl hover:bg-slate-500 duration-300 items-center text-sm"
                  onClick={() => {
                    SignUpPage();
                    toggleMenu();
                  }}
                >
                  Sign Up <AiOutlineLogout className="ml-3" />
                </button>
              </div>
            )}
            {userData.username && (
              <button className="flex px-3 rounded-xl hover:bg-slate-500 duration-300 items-center text-sm" onClick={handleLogout}>
                Logout <AiOutlineLogout className="ml-3" />
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
