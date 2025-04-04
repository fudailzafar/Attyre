import React from "react";
import Badge from "./BadgeSelector";

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
        <p className="inter font-normal text-sm text-start pt-1 text-[#475467]">
          Defines the intensity and vibrancy of the colors in the palette.
        </p>
        <hr className="my-3 border" />
        <div className="flex justify-start items-center gap-2">
          <Badge label={"Bold"} />
          <Badge label={"Vibrant"} />
          <Badge label={"Muted"} />
          <Badge label={"Pastel"} />
          <Badge label={"Soft"} />
          <Badge label={"Neutral"} />
          <Badge label={"Classic"} />
          <Badge label={"Dark"} />
          <Badge label={"Earthy"} />
          <Badge label={"Warm"} />
        </div>
        <h3 className="inter font-semibold text-lg text-start pt-10">
          Seasonal Preferences{" "}
        </h3>
        <p className="inter font-normal text-sm text-start pt-1 text-[#475467]">
          Colors inspired by the mood and feel of each season.{" "}
        </p>
        <hr className="my-3 border" />
        <div className="flex justify-start items-center gap-2">
          <Badge label={"Winter"} />
          <Badge label={"Spring"} />
          <Badge label={"Summer"} />
          <Badge label={"Autumn"} />
        </div>

        <h3 className="inter font-semibold text-lg text-start pt-10">
          Occasion-Based Preferences{" "}
        </h3>
        <p className="inter font-normal text-sm text-start pt-1 text-[#475467]">
          Find colors that fit the occasion, from casual to formal.{" "}
        </p>
        <hr className="my-3 border" />
        <div className="flex justify-start items-center gap-2">
          <Badge label={"Casual"} />
          <Badge label={"Everyday"} />
          <Badge label={"Work"} />
          <Badge label={"Formal"} />
          <Badge label={"Vacation"} />
          <Badge label={"Festive"} />
          <Badge label={"Sports"} />
        </div>
        <h3 className="inter font-semibold text-lg text-start pt-10">
          Personal Style Preferences
        </h3>
        <p className="inter font-normal text-sm text-start pt-1 text-[#475467]">
          Match colors to your unique style, whether minimal or bold.{" "}
        </p>
        <hr className="my-3 border" />
        <div className="flex justify-start items-center gap-2">
          <Badge label={"Minimalist"} />
          <Badge label={"Maximalist"} />
          <Badge label={"Modern"} />
          <Badge label={"Edge"} />
          <Badge label={"Vintage"} />
          <Badge label={"Bohemian"} />
          <Badge label={"Classic"} />
        </div>
        <div className="flex justify-center">
          <button
            className="font-semibold inter text-sm md:text-base bg-[#F63D68] rounded-md text-white py-3 px-28 md:px-40 mt-10"
            type="submit"
          >
            Generate Pallete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
