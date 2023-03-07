import "./GlassIcon.css";
import React from "react";

const GlassIcon = ({ title, icon, idx, setSelected }) => {
  return (
    <div className="icon-wrapper m-4 flex flex-col justify-center items-center">
      <div
        className="glass-icon-container flex items-center justify-center cursor-default rounded-sm"
        onClick={() => {
          setSelected(title);
        }}
      >
        <h1 className="text-3xl text-white font-bold">{icon}</h1>
      </div>
      <h3 className="text-sm text-white mt-2 cursor-none">{title}</h3>
    </div>
  );
};

export default GlassIcon;
