import React from "react";
import LogoAndSphere from "../features/LogoAndSphere";
import BottomNavigation from "../navigation/BottomNavigation";

const PageLayout = ({
  children,
  title,
  subtitle,
  showLogo = true,
  logoSize = "small",
  showSphere = false,
  activeTab = null,
  onBottomNavClick = null,
  customBottomNav = null,
  className = "",
}) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;

    return `${day}.${month}.${year} ${displayHours}:${minutes} ${ampm}`;
  };

  return (
    <div
      className={`h-full sm:h-screen bg-[#222222] text-white flex justify-center overflow-hidden ${className}`}
    >
      <div className="flex flex-col h-full w-full md:w-[90%] pb-18 md:pb-20 lg:pb-28 2xl:pb-36 3xl:pb-42 4xl:pb-60 overflow-hidden">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex-shrink-0">
          <div className="text-sm sm:text-base md:text-lg font-medium">
            {title || "PROGRAMA"}
          </div>
          {showLogo && (
            <div className="flex items-center">
              <LogoAndSphere
                logoSize={logoSize}
                showSphere={showSphere}
                className="!flex-none scale-50 sm:scale-65 md:scale-75"
              />
            </div>
          )}
          <div className="text-xs sm:text-sm font-medium">
            {subtitle || getCurrentDateTime()}
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
        {customBottomNav || (
          <BottomNavigation
            activeTab={activeTab}
            onTabClick={onBottomNavClick}
          />
        )}
      </div>
    </div>
  );
};

export default PageLayout;
