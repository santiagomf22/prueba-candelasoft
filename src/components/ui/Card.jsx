import React from 'react';

const Card = ({ 
  title, 
  children, 
  headerClassName = "", 
  bodyClassName = "",
  className = "",
  onClose = null,
  hasHeader = false, 
  color="#383838"
}) => {
  return (
  <div className={` rounded-lg border border-gray-500/20 ${className}`} 
  style={{backgroundColor: color}}>
      {hasHeader || onClose ? 
      <div className={`${!onClose ? 'bg-[#2a2a2a]' : ''} rounded-t-lg text-center p-1 flex items-center justify-between ${headerClassName}`}>
        <h3 className={`${onClose ? 'font-extralight text-2xl' : 'font-medium text-xs 2xl:text-base'}  flex-1`}>{title}</h3>
        {onClose && (
          <button 
          onClick={onClose}
          className="text-white text-lg sm:text-xl font-bold mr-2 border border-gray-400/20 rounded w-7 h-7 flex items-center justify-center hover:bg-gray-400/20 transition-all cursor-pointer select-none"
          aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      :null}
      <div className={`p-2 ${onClose ? 'py-4 px-6' : ''} ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;