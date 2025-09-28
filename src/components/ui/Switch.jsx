import React from "react";
import SwitchButton from "./SwitchButton";

const Switch = ({
  isActive,
  onToggle,
  activeLabel = "Si",
  inactiveLabel = "No",
  size = "medium",
  className = "",
}) => {
  const sizeClasses = {
    small: "w-16 h-[30px] text-xs", 
    medium: "w-24 h-[30px] text-xs",
    large: "w-24 md:w-32 md:h-[32px] lg:h-[38px] 3xl:h-[46px] text-sm", 
  };

  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <div
      className={`flex items-center self-center rounded-full bg-[#202122] p-[1px] transition-all border border-[#454951]  ${sizeClass} ${className}`}
    >
      <SwitchButton active={isActive} onClick={() => onToggle(true)}>
        {activeLabel}
      </SwitchButton>
      <SwitchButton active={!isActive} onClick={() => onToggle(false)}>
        {inactiveLabel}
      </SwitchButton>
    </div>
  );
};

export default Switch;
