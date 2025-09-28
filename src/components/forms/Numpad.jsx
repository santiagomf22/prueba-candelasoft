import React from "react";
import Button from "../ui/Button";

const Numpad = ({ pinCode, onNumberClick, onClear, onDelete }) => {
  return (
    <div className="flex flex-col items-center space-y-2 w-[calc(100vw-50px)] sm:w-48 2xl:w-64 4xl:w-96 mb-15 sm:mb-0 mt-5 sm:mt-0">
      <div className="flex space-x-1 sm:space-x-2 w-full">
        {[0, 1, 2, 3].map((index) => (
          <div      
            key={index}
            className="bg-gray-400/30 rounded-lg flex-1 h-[70px] 2xl:h-[90px] flex items-center justify-center"
          >
            <div
              className={`w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 rounded-full ${
                pinCode[index] ? "bg-white" : "bg-none"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button
            key={number}
            onClick={() => onNumberClick(number.toString())}
            className="aspect-square w-full text-base sm:text-lg lg:text-xl 2xl:text-2xl"
          >
            {number}
          </Button>
        ))}

        <Button onClick={onClear} className="aspect-square w-full text-base sm:text-lg lg:text-xl 2xl:text-2xl">
          <span className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold">·</span>
        </Button>

        <Button onClick={() => onNumberClick("0")} className="aspect-square w-full text-base sm:text-lg lg:text-xl 2xl:text-2xl">
          0
        </Button>

        <Button onClick={onDelete} className="aspect-square w-full">
          <img
            src="/assets/icons 2/Delete Button.svg"
            alt="Delete"
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
          />
        </Button>
      </div>
    </div>
  );
};

export default Numpad;