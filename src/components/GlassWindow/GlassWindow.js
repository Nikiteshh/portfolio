import "./GlassWindow.css";
import React from "react";

const GlassWindow = ({ config, setSelected }) => {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-screen h-screen -z-10"
        onClick={() => {
          setSelected(-1);
        }}
      ></div>
      <div className="glass-container w-11/12 h-5/6 md:w-2/3 md:h-4/5 flex flex-col">
        <header className="h-16">
          <h1 className="text-3xl p-4 text-white font-bold">{config?.title}</h1>
          <button
            className="glass-close"
            onClick={() => {
              setSelected(-1);
            }}
          >
            x
          </button>
        </header>
        <section className="text-white flex-1 text-lg overflow-y-auto rounded-b-3xl p-4 mb-2">
          {config?.content}
        </section>
      </div>
    </div>
  );
};

export default GlassWindow;
