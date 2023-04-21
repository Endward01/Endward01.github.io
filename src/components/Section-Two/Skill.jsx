import React from "react";

function Skill({ name, description, color }) {
  const style = {
    color: color,
  };
  return (
    <div className="pb-2 w-full">
      <div className="flex flex-col ">
        <p className="text-2xl" style={style}>{name}</p>
        <p className="text-sm text-gray-600 md:pl-6 pt-2">{description}</p>
      </div>
      {/* <div className="ml-2 h-[4px] w-full bg-gray-500/40 mt-3 rounded-xl flex items-center">
        <div
          className="h-[6px] rounded-xl shadow-gray-400 shadow"
          style={style}
        ></div>
      </div> */}
    </div>
  );
}

export default Skill;
