import React, { useState } from "react";

const Badge = ({ label }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSelected(!selected)}
      className={`inter px-3 py-1 flex justify-center items-center rounded-full text-sm font-medium transition-all border focus:outline-none 
        focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 
        ${selected 
          ? "bg-[#FFF1F3] text-[#F63D68] border-[#FECDD6]" 
          : "bg-[#F9FAFB] text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
        }`}
    >
      {label}
    </button>
  );
};

export default Badge;
