import React from "react";

const SwitchButton = ({
  active = false,
  children,
  onClick,
  className = "",
  activeGradient = "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-sm border border-[#1983ff] border-3",
  inactiveClass = "bg-transparent text-gray-400",
  ...props
}) => (
  <button
    onClick={onClick}
    className={`flex-1 h-full rounded-full transition-all font-semibold flex items-center justify-center text-[10px] 3xl:text-xl ${
      active ? activeGradient : inactiveClass
    } ${className}`}
    style={{ minWidth: 0 }}
    {...props}
  >
    {children}
  </button>
);

export default SwitchButton;
