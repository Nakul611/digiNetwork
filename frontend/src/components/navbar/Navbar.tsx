import { useState } from "react";
import { Link } from "react-scroll";
import theNetwork from "../../assets/images/theNetwork.png"
import { NavLinks } from "../../constants/NavLinks";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-10 py-4 h-14 text-black">
      <div>
        <img src={theNetwork} alt="logo" className="h-10 rounded-full hover:border border-black duration-300 transition-all"/>
      </div>
      <div>
      <ul className="flex space-x-10 text-lg ml-20">
        {NavLinks.map(({ _id, title, link }) => (
          <li key={_id} className="relative">
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm duration-300 hover:text-green-300 relative"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
        <div className="block md:hidden" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'text-white' : 'text-gray-400'}`}
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
      </div>
      <div className="flex">
            <button className="flex bg-teal-200 px-4 rounded-3xl hover:bg-teal-300 duration-200 items-center text-sm">Sign In <AiOutlineLogin className="ml-2"/></button>
            <span className="p-2"> / </span>
            <button className="flex bg-teal-300 px-4 rounded-3xl hover:bg-teal-400 duration-200 items-center text-sm">Sign Up <AiOutlineLogout className="ml-2"/></button>
        </div>
    </div>
  );
};

export default Navbar;
