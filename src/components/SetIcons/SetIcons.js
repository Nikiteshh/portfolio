import "./SetIcons.css";
import React, { useEffect, useState } from "react";
import GlassIcon from "../GlassIcon/GlassIcon";
import GlassWindow from "../GlassWindow/GlassWindow";

const findElement = (arr, title) => {
  return arr.find((val) => {
    return val.title === title;
  });
};

const SetIcons = ({ config }) => {
  const [selected, setSelected] = useState(-1);
  const [selectedConfig, setSelectedConfig] = useState({});

  useEffect(() => {
    setSelectedConfig({});
    if (selected !== -1) {
      setTimeout(() => {
        setSelectedConfig(findElement(config, selected));
      }, 0);
    }
  }, [config, selected]);
  return (
    <>
      <div className="set-icon-container flex min-w-fit w-24 flex-col justify-start h-full ml-8 flex-wrap">
        {config.map((val) => {
          return (
            <GlassIcon
              key={val.title}
              title={val.title}
              icon={val.icon}
              setSelected={setSelected}
            />
          );
        })}
      </div>
      {selected !== -1 && selectedConfig.title !== undefined && (
        <GlassWindow config={selectedConfig} setSelected={setSelected} />
      )}
    </>
  );
};

export default SetIcons;
