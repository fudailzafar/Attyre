import React from "react";

const Preferences = () => {
  return (
    <div>
      <div className="w-[90%] md:w-[55%] text-center m-auto py-12">
        <h2 className="text-start playfair font-semibold text-xl md:text-3xl text-[#344054]">
          Advanced Preferences - Optional
        </h2>
        <h3 className="inter font-semibold text-lg text-start pt-10">
          Color Intensity Preference
        </h3>
        <p className="inter font-normal text-sm text-start pt-1">
          Defines the intensity and vibrancy of the colors in the palette.
        </p> 
        <hr className="mt-10" />
        <h3 className="inter font-semibold text-lg text-start pt-10">
          Seasonal Preferences{" "}
        </h3>
        <p className="inter font-normal text-sm text-start pt-1">
          Colors inspired by the mood and feel of each season.{" "}
        </p>
        <hr className="mt-10" />
        <h3 className="inter font-semibold text-lg text-start pt-10">
          Occasion-Based Preferences{" "}
        </h3>
        <p className="inter font-normal text-sm text-start pt-1">
          Find colors that fit the occasion, from casual to formal.{" "}
        </p>
        <hr className="mt-10" />
        <h3 className="inter font-semibold text-lg text-start pt-10">
          Personal Style Preferences
        </h3>
        <p className="inter font-normal text-sm text-start pt-1">
          Match colors to your unique style, whether minimal or bold.{" "}
        </p>
        <hr className="mt-10" />
      </div>
    </div>
  );
};

export default Preferences;
