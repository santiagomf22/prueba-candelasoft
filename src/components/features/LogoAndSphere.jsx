import React from "react";

const LogoAndSphere = ({ 
  logoSize = "default", 
  sphereSize = "default",
  className = "",
  showSphere = true 
}) => {
  // Size configurations
  const logoSizes = {
    small: {
      c: "w-6 lg:w-8 2xl:w-12 4xl:w-16",
      a: "w-6 lg:w-8 2xl:w-12 4xl:w-16 -ml-[3px] sm:-ml-[4px] lg:-ml-[5px] 2xl:-ml-[8px] 4xl:-ml-[12px] mr-1 sm:mr-1 lg:mr-1.5 2xl:mr-3 4xl:mr-4",
      nPart1: "w-[8px] lg:w-[10px] 2xl:w-[16px] 4xl:w-[20px]",
      nPart2: "w-6 lg:w-8 2xl:w-12 4xl:w-16 -ml-[8px] sm:-ml-[10px] lg:-ml-[12px] 2xl:-ml-[18px] 4xl:-ml-[24px]",
      d: "w-6 lg:w-8 2xl:w-12 4xl:w-16",
      e: "w-6 lg:w-8 2xl:w-12 4xl:w-16",
      l: "h-6 sm:h-8 lg:h-10 2xl:h-16 4xl:h-20",
      a2: "w-6 lg:w-8 2xl:w-12 4xl:w-16",
      soft: "w-12 lg:w-16 2xl:w-24 4xl:w-32 h-3 sm:h-4 lg:h-5 2xl:h-8 4xl:h-10"
    },
    default: {
      c: "w-12 2xl:w-20 4xl:w-28",
      a: "w-12 2xl:w-20 4xl:w-28 -ml-[4px] sm:-ml-[5px] lg:-ml-[6px] 2xl:-ml-[10px] 4xl:-ml-[16px] mr-1 sm:mr-1.5 lg:mr-2 2xl:mr-4 4xl:mr-6",
      nPart1: "w-[13px] 2xl:w-[22px] 4xl:w-[32px]",
      nPart2: "w-11 2xl:w-18 4xl:w-24 -ml-[10px] sm:-ml-[12px] lg:-ml-[14.5px] 2xl:-ml-[24px] 4xl:-ml-[36px]",
      d: "w-11 2xl:w-18 4xl:w-24",
      e: "w-11 2xl:w-18 4xl:w-24",
      l: "h-13 2xl:h-22 4xl:h-32",
      a2: "w-11 2xl:w-18 4xl:w-24",
      soft: "w-24 2xl:w-40 4xl:w-56 h-4 sm:h-5 lg:h-7 2xl:h-12 4xl:h-16"
    },
    large: {
      c: "w-12 lg:w-16 2xl:w-28 4xl:w-40",
      a: "w-12 lg:w-16 2xl:w-28 4xl:w-40 -ml-[5px] sm:-ml-[6px] lg:-ml-[8px] 2xl:-ml-[14px] 4xl:-ml-[24px] mr-1.5 sm:mr-2 lg:mr-3 2xl:mr-6 4xl:mr-10",
      nPart1: "w-[14px] lg:w-[18px] 2xl:w-[32px] 4xl:w-[48px]",
      nPart2: "w-11 lg:w-14 2xl:w-24 4xl:w-32 -ml-[12px] sm:-ml-[15px] lg:-ml-[18px] 2xl:-ml-[32px] 4xl:-ml-[48px]",
      d: "w-11 lg:w-14 2xl:w-24 4xl:w-32",
      e: "w-11 lg:w-14 2xl:w-24 4xl:w-32",
      l: "h-10 sm:h-12 lg:h-16 2xl:h-28 4xl:h-40",
      a2: "w-11 lg:w-14 2xl:w-24 4xl:w-32",
      soft: "w-24 lg:w-32 2xl:w-56 4xl:w-80 h-5 sm:h-6 lg:h-9 2xl:h-16 4xl:h-24"
    }
  };

  const sphereSizes = {
    small: "w-32 lg:w-40 xl:w-48 2xl:w-64 4xl:w-80",
    default: "w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 4xl:w-[32rem]",
    large: "w-56 lg:w-64 xl:w-80 2xl:w-[28rem] 4xl:w-[40rem]"
  };

  const currentLogoSize = logoSizes[logoSize] || logoSizes.default;
  const currentSphereSize = sphereSizes[sphereSize] || sphereSizes.default;

  return (
    <div className={`flex flex-col items-center justify-center ml-0 lg:ml-24 flex-1 relative ${className}`}>
      <div className="flex items-end relative z-10">
        <img
          src="/assets/icons 2/Vector-3.svg"
          alt="C"
          className={currentLogoSize.c}
        />
        <img
          src="/assets/icons 2/Vector-4.svg"
          alt="a"
          className={currentLogoSize.a}
        />
        <img
          src="/assets/icons 2/Vector-1.svg"
          alt="n-part1"
          className={currentLogoSize.nPart1}
        />
        <img
          src="/assets/icons 2/Vector-2.svg"
          alt="n-part2"
          className={currentLogoSize.nPart2}
        />
        <img
          src="/assets/icons 2/Vector-6.svg"
          alt="d"
          className={currentLogoSize.d}
        />
        <img
          src="/assets/icons 2/Vector.svg"
          alt="e"
          className={currentLogoSize.e}
        />
        <img
          src="/assets/icons 2/Vector-5.svg"
          alt="l"
          className={currentLogoSize.l}
        />
        <img
          src="/assets/icons 2/Vector-7.svg"
          alt="a"
          className={currentLogoSize.a2}
        />
        <img
          src="/assets/icons 2/Group.svg"
          alt="soft"
          className={currentLogoSize.soft}
        />
      </div>

      {showSphere && (
        <div className="-mt-7 z-50">
          <img
            src="/assets/img/Rectangle 18857.png"
            alt="3D Sphere"
            className={`object-contain h-auto ${currentSphereSize}`}
          />
        </div>
      )}
    </div>
  );
};

export default LogoAndSphere;