import React from "react";

const ColourSection = () => {
  return (
    <div className="w-[100%] flex flex-row max-w-96 gap-10 py-5">
      <div>
        <div className="px-[90px] py-[100px] bg-[#228B22]"></div>
        <div>
          <h2 className="inter font-semibold text-lg py-1">Forest Green</h2>
          <h3 className="inter font-medium text-sm">Main</h3>
          <p className="inter font-normal text-sm py-3 text-[#475467]">
            A rich green that harmonizes with the warm undertones of autumn.
          </p>
        </div>
      </div>
      <div>
        <div className="px-[90px] py-[100px] bg-[#B7410E]"></div>
        <div>
          <h2 className="inter font-semibold text-lg py-1">Rust</h2>
          <h3 className="inter font-medium text-sm">Main</h3>
          <p className="inter font-normal text-sm py-3 text-[#475467]">
            A warm, earthy red-brown that brings out the natural warmth in the
            skin tone.
          </p>
        </div>
      </div>
      <div>
        <div className="px-[90px] py-[100px] bg-[#CC5500]"></div>
        <div>
          <h2 className="inter font-semibold text-lg py-1">Burnt Orange</h2>
          <h3 className="inter font-medium text-sm">Main</h3>
          <p className="inter font-normal text-sm py-3 text-[#475467]">
            A vibrant orange that adds a modern twist to classic autumn tones.
          </p>
        </div>
      </div>
      <div>
        <div className="px-[90px] py-[100px] bg-[#6B8E23]"></div>
        <div>
          <h2 className="inter font-semibold text-lg py-1">Golden Olive</h2>
          <h3 className="inter font-medium text-sm">Main</h3>
          <p className="inter font-normal text-sm py-3 text-[#475467]">
            A warm, muted green that complements the richness of brown eyes.
          </p>
        </div>
      </div>
      <div>
        <div className="px-[90px] py-[100px] bg-[#FFDB58]"></div>
        <div>
          <h2 className="inter font-semibold text-lg py-1">Mustard Yellow</h2>
          <h3 className="inter font-medium text-sm">Main</h3>
          <p className="inter font-normal text-sm py-3 text-[#475467]">
            A deep, earthy yellow that pairs well with dark hair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColourSection;
