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
          {new Array(10).fill(-1).map((val, idx) => {
            return (
              <div key={idx}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default GlassWindow;
