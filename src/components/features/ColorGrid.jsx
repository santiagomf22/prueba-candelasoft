import React from "react";
import Card from "../ui/Card";
import Switch from "../ui/Switch";
import GridIcon from "../ui/GridIcon";
import Button from "../ui/Button";

const ColorGrid = ({ title, isActive, onToggle, hasSpecialIcon = false }) => {
  return (
    <Card title={title} className="" hasHeader headerClassName="pt-5">
      <div className="grid grid-cols-5 grid-rows-2 ">
        <Switch
          className="col-span-2 justify-self-center"
          isActive={isActive}
          onToggle={onToggle}
          size="large"
        />

        <GridIcon
          src="/assets/icons 1/Group 290298.svg"
          size="medium"
          hasOverlay={hasSpecialIcon}
          overlayContent={
            <span className="text-white font-bold text-sm sm:text-base 2xl:text-xl pb-1">
              ×
            </span>
          }
        />

        <GridIcon src="/assets/icons 1/Group 290298.svg" size="medium" />

        <GridIcon src="/assets/icons 1/Group 290298.svg" size="medium" />

        <Button variant="add" className="col-span-2 justify-self-center">
          Añadir +
        </Button>

        <GridIcon src="/assets/icons 1/Group 290298.svg" size="medium" />

        <GridIcon src="/assets/icons 1/Group 290298.svg" size="medium" />

        <GridIcon src="/assets/icons 1/Group 290298.svg" size="medium" />
      </div>
    </Card>
  );
};

export default ColorGrid;
