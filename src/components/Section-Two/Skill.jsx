import React from "react";

function Skill({ name, level, percent, color }) {
  const style = {
    backgroundColor: color,
    width: percent,
  };
  return (
    <div className="pb-2 w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <p className="text-lg">{name}</p>
        <p className="text-sm text-gray-600">{level}</p>
      </div>
      <div className="ml-2 h-[4px] w-full bg-gray-500/40 mt-3 rounded-xl flex items-center">
        <div
          className="h-[6px] rounded-xl shadow-gray-400 shadow"
          style={style}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
