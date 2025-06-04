import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export const LivestreamPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-xl rounded-2xl p-2 z-50 w-[300px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold">Live Now</h2>
        <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-red-500">
          ✖
        </button>
      </div>
      <div className="w-full h-[170px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=L1Ta38LNcUE"
          playing
          controls
          width="200PX"
          height="100PX"
          pip
        />
      </div>
    </div>
  );
};
