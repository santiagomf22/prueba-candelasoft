import React from 'react';
import Button from '../ui/Button';

const RoleCard = ({ 
  role, 
  label, 
  icon, 
  isSelected, 
  onSelect, 
  className = "" 
}) => {
  return (
    <Button
      onClick={() => onSelect(role)}
      className={`flex flex-1 w-full rounded-xl lg:rounded-2xl text-base sm:text-lg lg:text-xl 2xl:text-2xl flex-col ${className}`}
      style={{ aspectRatio: '1' }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 rounded-xl lg:rounded-2xl flex items-center justify-center mb-1">
          <img
            src={icon}
            alt={label}
            className="w-8 sm:w-10 lg:w-14 2xl:w-16"
            style={{
              filter: isSelected
                ? "none"
                : "brightness(0.5) sepia(1) hue-rotate(0deg) saturate(1)",
            }}
          />
        </div>
        <span className={isSelected ? "text-blue-400" : "text-[#828282]"}>
          {label}
        </span>
      </div>
    </Button>
  );
};

export default RoleCard;