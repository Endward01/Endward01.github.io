import "./Loader.css";

const Loader = () => {
  return (
    <div className="spinner-wrapper absolute top-0 left-0 w-full h-full  z-10 bg-[#1d1d1d]">
      <div className="spinner">
        <div className="sk-folding-cube absolute top-[48%] left-[48%] h-10 w-10 rotate-45">
          <div className="sk-cube1 sk-cube float-left w-1/2 h-1/2 relative scale-110"></div>
          <div className="sk-cube2 sk-cube float-left w-1/2 h-1/2 relative scale-110"></div>
          <div className="sk-cube4 sk-cube float-left w-1/2 h-1/2 relative scale-110"></div>
          <div className="sk-cube3 sk-cube float-left w-1/2 h-1/2 relative scale-110 mb-4"></div>
          <p className="text-white font-bold text-md">Welcome!</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
