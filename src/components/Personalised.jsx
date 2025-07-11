import React from "react";
import ColourSection from "./ColourSection";

const Personalised = () => {
  return (
    <div className="bg-[#F8F7F4] mx-auto">
      <div className="flex flex-col w-[85%] md:w-[70%] justify-center items-start mx-auto">
        <div>
          <h1 className="playfair font-semibold text-4xl text-[#0C111D] mt-5">
            Your Personalized Palette
          </h1>
        </div>
        <div>
          <h2 className="inter font-semibold text-4xl text-[#F63D68] mt-6">
            Autumn Harmony
          </h2>
          <p className="inter font-normal text-[16px] md:text-sm text-[#475467] mt-4">
            A warm, earthy palette that complements the skin's warm undertones,
            emphasizes the depth of darker hair, and enhances the richness of
            brown eyes. This palette is perfect for a classic yet modern look,
            capturing the essence of autumn.
          </p>
        </div>
        <div>
          <h2 className="playfair font-semibold text-2xl text-[#0C111D] mt-6">
            Recommended Colors
          </h2>
        </div>
        <div>
          <ColourSection />
        </div>
        <div>
          <ColourSection />
        </div>
        <div>
          <ColourSection />
        </div>
        <div>
          <ColourSection />
        </div>
        <div>
          <ColourSection />
        </div>
        <div>
          <h2 className="playfair text-[#0C111D] font-semibold text-2xl">Colors to Avoid</h2>
        </div>
        <div>
          <ColourSection />
        </div>
        <div>
          <ColourSection />
        </div>
      </div>
    </div>
  );
};

export default Personalised;
