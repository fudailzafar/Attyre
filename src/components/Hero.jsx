import React from "react";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* left column */}
      <div className="bg-[#F8F7F4] w-full">
        <div className="px-10 py-16">
          <h1 className="playfair text-6xl  md:pt-20 font-semibold ">
            Personal Color Analysis
          </h1>
          <p className="inter text-lg md:text-xl pt-5">
            Our{" "}
            <span className="text-[#F63D68]">
              AI-powered color analysis tool
            </span>{" "}
            helps you discover the colors that enhance your natural beauty,
            match your unique features, and fit your personal style.{" "}
          </p>
          <p className="inter text-lg md:text-xl pt-5">
            Upload your photo get instant recommendations for your perfect color
            palette.
          </p>
          <div className="w-full pt-7">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-[#475467] ">
                    <span className="font-semibold text-[#F63D68] inter">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-[#475467] inter">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <button
              className="w-full mx-auto font-semibold inter text-base bg-[#F63D68] rounded-md flex justify-center items-center text-white py-3 mt-3"
              type="submit"
            >
              Create your Pallete
            </button>
          </div>
        </div>
      </div>
      {/* right column */}
      <div className="w-full overflow-hidden">
        <img
          src={"https://ik.imagekit.io/a5ujvxcmh/color_pallete.jpg?updatedAt=1743323607910"}
          alt="color_palette"
          className="w-full h-full object-cover object-left scale-150"
        />
      </div>
    </div>
  );
};

export default Hero;
