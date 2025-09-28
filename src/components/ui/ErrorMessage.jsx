import React from 'react';

const ErrorMessage = ({ 
  message, 
  position = "top-left",
  onClose = null,
  className = "" 
}) => {
  if (!message) return null;

  const positionClasses = {
    "top-left": "absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8",
    "top-center": "absolute top-4 left-1/2 transform -translate-x-1/2 sm:top-6 lg:top-8",
    "top-right": "absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-0 right-0",
    "center": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "bottom": "absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-6 lg:bottom-8"
  };

  const positionClass = positionClasses[position] || positionClasses["top-left"];

  return (
    <div className={`${positionClass} bg-red-600 text-white px-3 py-2 sm:px-4 rounded-md lg:rounded-lg text-xs sm:text-sm font-medium max-w-xs z-50 ${className}`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        {onClose && (
          <button 
            onClick={onClose}
            className="ml-2 text-white hover:text-gray-200"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;