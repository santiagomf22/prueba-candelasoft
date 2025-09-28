import React from 'react';

const GridIcon = ({ 
  src, 
  alt = "", 
  size = "medium",
  hasOverlay = false,
  overlayContent = null,
  className = "",
  onClick = null 
}) => {
  const sizeClasses = {
    small: "w-8 h-8 sm:w-10 sm:h-10",
    medium: "w-10 sm:w-12 md:w-16 lg:w-20 3xl:w-24 h-10 md:h-12 3xl:h-20", 
    large: "w-12 sm:w-16 md:w-20 h-16  md:h-24 lg:h-28 3xl:h-42",
  };

  const iconSizeClass = sizeClasses[size] || sizeClasses.medium;

  const content = (
    <div className={`relative ${iconSizeClass} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={iconSizeClass}
      />
      {hasOverlay && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-12 2xl:w-18 h-[23px] 2xl:h-[30px] -translate-y-1/2 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-3xl flex items-center justify-center">
          {overlayContent}
        </div>
      )}
    </div>
  );

  return onClick ? (
    <button onClick={onClick} className="cursor-pointer">
      {content}
    </button>
  ) : content;
};

export default GridIcon;