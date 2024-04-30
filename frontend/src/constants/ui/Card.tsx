import React, { useState } from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  header: string;
  icon?: IconType; 
  description: string;
  onButtonClick?: () => void;
}

const CustomCard: React.FC<CardProps> = ({ header, icon: Icon, description, onButtonClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleRelease = () => {
    setIsPressed(false);
  };

  return (
    <button 
      className="custom-card"
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseLeave={handleRelease}
    >
      <div 
      className="flex flex-col justify-center items-center p-10 h-96 w-72 space-y-4 shadow-md shadow-gray-500 ">
        <div className="card-header text-2xl mb-5 font-semibold font-sans ">
          <h2>{header}</h2>
        </div>
        <div className={`flex h-36 w-36 justify-center items-center text-7xl focus:outline-none transition duration-200 ease-in-out transform hover:scale-105 ${isPressed ? 'z-10' : ''}`}>
          {Icon && <Icon className="card-icon" />}
        </div>
        <div className="card-description text-sm">
          <p>{description}</p>
        </div>
      </div>
    </button>
  );
}

export default CustomCard;
