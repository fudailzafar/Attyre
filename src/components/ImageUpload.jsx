import React, { useRef, useState } from "react";
import { EyeDropperColorPicker } from "./EyeDropper";

const ImageUpload = () => {
  const [colors, setColors] = React.useState({
    skin: "#f2b57c",
    hair: "#1f1812",
    eye: "#48361e",
  });

  const handleColorChange = (colorType, newColor) => {
    setColors((prev) => ({
      ...prev,
      [colorType]: newColor,
    }));
  };

  const [selectedImage, setSelectedImage] = useState(
    "https://ik.imagekit.io/a5ujvxcmh/9da786378ade134eaec7550f74aa536c.jpeg?updatedAt=1743323705536"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setSelectedImage(localUrl);
    }
  };

  return (
    <div>
      <div className="bg-[#F8F7F4] pb-8 md:pb-16">
        {/* Heading & Paragraph */}
        <div className="w-[90%] md:w-[55%] text-center m-auto pb-8">
          <h1 className="playfair text-start py-4 text-[#0C111D] text-4xl font-semibold">
            Select Your Colors
          </h1>
          <p className="inter text-start text-[#475467] font-normal text-md md:text-lg mx-auto">
            Use the color picker tool to identify your hair, skin, and eye
            colors. For hair and skin, choose the primary tones without focusing
            on highlights or shadows. For eyes, select the most prominent color,
            typically found in the center of the iris.
          </p>
        </div>

        {/* Image Color Detector */}
        <div className="w-[90%] md:w-[55%] m-auto">
          <div className="flex md:flex-row justify-between gap-6">
            <div className="relative cursor-pointer">
          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="imageUpload"
            className="hidden"
          />
          {/* Clickable Image */}
          <label htmlFor="imageUpload">
            <img
              src={selectedImage}
              alt="Color reference"
              className="w-[286px] md:w-[666px] h-[382px] md:h-[500px] object-cover rounded-lg"
            />
          </label>
        </div>
            <div className="flex flex-col justify-around gap-6">
              <EyeDropperColorPicker
                color={colors.skin}
                onChange={(color) => handleColorChange("skin", color)}
                label="Skin"
              />
              <EyeDropperColorPicker
                color={colors.hair}
                onChange={(color) => handleColorChange("hair", color)}
                label="Hair"
              />
              <EyeDropperColorPicker
                color={colors.eye}
                onChange={(color) => handleColorChange("eye", color)}
                label="Eye"
              />
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <button
              className="font-semibold inter text-sm md:text-base bg-[#F63D68] rounded-md text-white py-3 px-28 md:px-40 mt-6"
              type="submit"
            >
              Generate Palette
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
