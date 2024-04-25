import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  header: string;
  icon?: IconType; 
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CustomCard: React.FC<CardProps> = ({ header, icon: Icon, description, buttonText, onButtonClick }) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 h-96 w-72 space-y-2">
      <div className="card-header text-xl">
        <h2>{header}</h2>
      </div>
      <div className=' flex h-36 w-36 justify-center items-center text-7xl' >
      {Icon && <Icon className="card-icon" />}
      </div>
      <div className="card-description text-sm">
        <p>{description}</p>
      </div>
      <div className="card-button border border-black p-2 rounded-xl">
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
}

export default CustomCard;
