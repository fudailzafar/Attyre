import React from "react";

const ImageUpload = () => {
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
        {/* Image Color Detector  */}
        <div className="w-[90%] md:w-[55%] m-auto">
          <div className="flex justify-between">
            <div>
              <img
                src="https://ik.imagekit.io/a5ujvxcmh/9da786378ade134eaec7550f74aa536c.jpeg?updatedAt=1743323705536"
                alt=""
                className="w-[286px] md:w-[666px] h-[382px] md:h-[500px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-around">
              <input
                type="color"
                className="h-10 w-10 block bg-black cursor-pointer rounded-full"
                id="hs-color-input"
                title="Choose your color"
              />
              <label
                htmlFor="hs-color-input"
                className="block text-sm font-medium"
              >
                Skin
              </label>
              <input
                type="color"
                className="h-10 w-10 block bg-black cursor-pointer rounded-full"
                id="hs-color-input"
                title="Choose your color"
              />
              <label
                htmlFor="hs-color-input"
                className="block text-sm font-medium"
              >
                Hair
              </label>
              <input
                type="color"
                className="h-10 w-10 block bg-black cursor-pointer rounded-full"
                id="hs-color-input"
                title="Choose your color"
              />
              <label
                htmlFor="hs-color-input"
                className="block text-sm font-medium"
              >
                Eye
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="font-semibold inter text-sm md:text-base bg-[#F63D68] rounded-md text-white py-3 px-28 md:px-40 mt-3"
              type="submit"
            >
              Generate Pallete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
