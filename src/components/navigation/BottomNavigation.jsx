import React from "react";

const BottomNavigation = ({ activeTab = null}) => {
  const navigationItems = [
    {
      icon: "/assets/icons 2/Vector-9.svg",
      alt: "Menu 1",
      id: "menu",
    },
    {
      icon: "/assets/icons 2/Botón producción.svg",
      alt: "Production",
      id: "production",
    },
    {
      icon: "/assets/icons 2/Group 290072.svg",
      alt: "Function 1",
      id: "function1",
    },
    {
      icon: "/assets/icons 2/Group 629586.svg",
      alt: "Function 2",
      id: "function2",
    },
    {
      icon: "/assets/icons 2/Group 629628.svg",
      alt: "Function 3",
      id: "function3",
    },
    {
      icon: "/assets/icons 2/Group-1.svg",
      alt: "Network",
      id: "network",
    },
    {
      icon: "/assets/icons 2/Group 290074.svg",
      alt: "Function 4",
      id: "function4",
    },
    {
      icon: "/assets/icons 2/Modo oscuro/Vector-8.svg",
      alt: "Dark Mode",
      id: "darkmode",
    },
  ];
  if (activeTab === "production") {
    navigationItems[0] = {
      label: "MANAGER",
      alt: "Manager",
      id: "manager",
    };
    navigationItems[2] = {
      icon: "/assets/icons 1/Group 290072.svg",
      alt: "Function 1",
      id: "function1",
    };
  }

  const defaultClass= "flex w-full pb-2 sm:pb-3 lg:pb-4 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20"
  const productionClass = "flex w-full md:w-[90%] mx-auto pb-2 sm:pb-3 lg:pb-4 px-3 sm:px-4 md:px-6"

  return (
    <div className="fixed sm:absolute bottom-0 left-0 right-0 z-30">
      <div className={`${activeTab === 'production' ? productionClass : defaultClass} `}>
        {navigationItems.map((item, index, array) => {
          // Buttons 2 to 7 (index 1 to 6) are square and responsive
          const isSquare = index > 0 && index < array.length - 1;
          const squareClass = isSquare
            ? "aspect-square h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 3xl:h-36 4xl:h-50 flex-shrink-0"
            : "flex-[2] min-w-0";
          return (
            <div
              key={index}
              className={`rounded-lg flex items-center justify-center ${activeTab === "production" ? "bg-[#2d2d2d]" : "bg-gray-600/20"} hover:bg-gray-400/60 border border-gray-500/20 transition-all cursor-pointer  ${squareClass} ${index < array.length - 1 ? "mr-1 sm:mr-1.5 lg:mr-5" : ""}`}
            >
            {item.label ? (
              <span className="text-white text-xs sm:text-sm font-medium">
                {item.label}
              </span>
            ) : (
              <img
                src={item.icon}
                alt={item.alt}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
              />
            )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
