import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#E31B54] inter">
        <div className="p-10 px-auto">
          <div className="md:flex md:flex-row md:justify-between">
            <div>
              <h2 className="text-white font-semibold">Join the waitlist</h2>
              <p className="text-[#EAECF0] font-normal mt-2">
                We’ll send you an email once we officially launch
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[#667085] pr-[80px] pl-2 md:pl-4 md:pr-20 py-2 text-start rounded-md"
              />
              <button className="bg-[#F9F5FF] font-semibold text-[#F63D68] rounded mt-4 md:mt-0 md:ml-4 px-[115px] md:px-1 py-2 md:p-2">
                Subscribe
              </button>
            </div>
          </div>
          <hr className="my-8" />
          <div className="flex flex-row justify-between text-white">
            <div>
              <h3 className="cookie text-6xl">attyre</h3>
              <p className="mt-5 mb-5">Reach out to us on info@attyre.app</p>
              <ul className="md:flex md:flex-row space-y-2 md:space-y-0 md:gap-8 md:font-semibold">
                <li>Explore</li>
                <li>Creators</li>
                <li>Curations</li>
                <li>Find the Fit</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h3>Get the app</h3>
            </div>
          </div>
          <hr className="my-8" />
          <div className="md:flex md:flex-row md:justify-between">
            <div>
              <h2 className="text-white text-base font-medium">
                © 2024 Attyre India Pvt. Ltd. All rights reserved.
              </h2>
            </div>
            <div className="mt-5 md:mt-0 flex flex-row gap-4">
              <Linkedin color="white" />
              <Instagram color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
