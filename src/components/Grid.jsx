import React from "react";
import {
  SquareUserRound,
  Zap,
  SquareChartGantt,
  ShoppingCart,
  Command,
  MessageCircleHeart,
} from "lucide-react";

const Grid = () => {
  return (
    <div className="py-12">
      <section className="container mx-auto text-center py-12 md:py-14">
        <h3 className="inter font-semibold text-[#F63D68] text-base">
          Our Capabilities
        </h3>
        <h2 className="inter font-semibold text-[#101828] text-4xl mt-4">
          Why Use Our Color Analysis Tool?
        </h2>
        <p className="inter font-normal text-[#475467] text-xl mt-6 mx-7 lg:mx-96">
          Your personal color palette is more than just a range of shades; it’s
          a path to feeling confident, radiant, and truly yourself. Our advanced
          color analysis tool reveals colors that harmonize with your unique
          skin tone, eye color, and hair color, making it easier to choose tones
          that enhance your natural beauty.
        </p>
      </section>

      <section className="mx-4 lg:mx-40 pt-8 mb-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 inter">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="bg-[#FFE4E8] p-4 rounded-full">
                <SquareUserRound
                  color="red"
                  size={60}
                  className="p-4 bg-rose-200 rounded-3xl"
                />
              </div>
            </div>
            <h4 className="font-semibold text-xl mt-1 lg:mt-4">
              Customized for Your Natural Beauty
            </h4>
            <p className="my-4">
              {" "}
              Tailors recommendations based on your unique skin tone, eye color,
              and hair color to create a harmonious look.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="bg-[#FFE4E8] p-4 rounded-full">
                <Zap
                  color="red"
                  size={60}
                  className="p-4 bg-rose-200 rounded-3xl"
                />
              </div>
            </div>
            <h4 className="font-semibold text-xl mt-4">
              Instantly Curated Palette
            </h4>
            <p className="my-4 text-base">
              {" "}
              Quickly get a personalized palette with 25 colors to wear and 10
              to avoid, complete with names, hex codes, and reasons for easy
              styling.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="bg-[#FFE4E8] p-4 rounded-full">
                <SquareChartGantt
                  color="red"
                  size={60}
                  className="p-4 bg-rose-200 rounded-3xl"
                />
              </div>
            </div>
            <h4 className="font-semibold text-xl mt-4">
              Flexible to Your Style Preferences
            </h4>
            <p className="my-4 text-base">
              {" "}
              Choose from options like bold, neutral, minimalist, or vibrant
              colors, so your palette truly reflects your personal style.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="bg-[#FFE4E8] p-4 rounded-full">
                <ShoppingCart
                  color="red"
                  size={60}
                  className="p-4 bg-rose-200 rounded-3xl"
                />
              </div>
            </div>
            <h4 className="font-semibold text-xl mt-4">
              Enhances Shopping Confidence
            </h4>
            <p className="my-4 text-base">
              {" "}
              Know exactly which colors to look for when shopping, making it
              easier to find pieces you’ll love.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="bg-[#FFE4E8] p-4 rounded-full">
                <Command
                  color="red"
                  size={60}
                  className="p-4 bg-rose-200 rounded-3xl"
                />
              </div>
            </div>
            <h4 className="font-semibold text-xl mt-4">
              Built on Color Science
            </h4>
            <p className="my-4 text-base">
              {" "}
              Utilizes principles of color theory to ensure each color
              complements your natural tones and undertones.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="bg-[#FFE4E8] p-4 rounded-full">
                <MessageCircleHeart
                  color="red"
                  size={60}
                  className="p-4 bg-rose-200 rounded-3xl"
                />
              </div>
            </div>
            <h4 className="font-semibold text-xl mt-4">
              Save Time and Eliminate Guesswork
            </h4>
            <p className="my-4 text-base">
              {" "}
              No more trial and error with colors that don’t suit you. Get
              instant recommendations that are tailored for you, making shopping
              easier than ever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
