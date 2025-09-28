import React from "react";

const Button = ({ onClick, children, className = "", variant = "primary" }) => {
  const variants = {
    primary:
      "bg-gray-500/20 hover:bg-gray-400/60 rounded-sm text-white font-bold transition-all flex items-center justify-center border border-gray-400/20 cursor-pointer select-none",
    secondary:
      "bg-gray-600 hover:bg-gray-700 text-white border border-gray-300/30",
    outline:
      "bg-transparent border border-blue-400 text-blue-500 hover:bg-blue-50",
    add: "text-xs 3xl:text-xl font-light w-24 md:w-32 h-[26px] md:h-[29px] lg:h-[34px] 3xl:h-[42px] self-center bg-[#414141] hover:bg-[#525252] text-white shadow-sm border border-gray-500/10 rounded-3xl flex items-center justify-center cursor-pointer select-none",
  };
  return (
    <button
      onClick={onClick}
      className={`${variants[variant] || variants.primary} ${className} w-1`}
    >
      {children}
    </button>
  );
};

export default Button;
