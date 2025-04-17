import React, { useRef } from "react";

const ImageUpload = () => {
  const skinRef = useRef(null);
  const hairRef = useRef(null);
  const eyeRef = useRef(null);

  const openEyeDropper = async (ref) => {
    if (!window.EyeDropper) {
      alert("EyeDropper API not supported in this browser.");
      return;
    }

    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      if (ref.current) {
        ref.current.value = result.sRGBHex;
      }
    } catch (error) {
      console.error("Eyedropper cancelled or failed:", error);
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
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <img
                src="https://ik.imagekit.io/a5ujvxcmh/9da786378ade134eaec7550f74aa536c.jpeg?updatedAt=1743323705536"
                alt="Color reference"
                className="w-[286px] md:w-[666px] h-[382px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-around gap-6">
              {/* Skin */}
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  ref={skinRef}
                  className="h-14 w-14 rounded-full border-2 border-gray-300 shadow-sm cursor-pointer p-1"
                  id="skin-color"
                  title="Choose skin color"
                  onClick={() => openEyeDropper(skinRef)}
                  readOnly
                />
                <label htmlFor="skin-color" className="text-sm font-medium">
                  Skin
                </label>
              </div>

              {/* Hair */}
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  ref={hairRef}
                  className="h-14 w-14 rounded-full border-2 border-gray-300 shadow-sm cursor-pointer p-1"
                  id="hair-color"
                  title="Choose hair color"
                  onClick={() => openEyeDropper(hairRef)}
                  readOnly
                />
                <label htmlFor="hair-color" className="text-sm font-medium">
                  Hair
                </label>
              </div>

              {/* Eye */}
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  ref={eyeRef}
                  className="h-14 w-14 rounded-full border-2 border-gray-300 shadow-sm cursor-pointer p-1"
                  id="eye-color"
                  title="Choose eye color"
                  onClick={() => openEyeDropper(eyeRef)}
                  readOnly
                />
                <label htmlFor="eye-color" className="text-sm font-medium">
                  Eye
                </label>
              </div>
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
