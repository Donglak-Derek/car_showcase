"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const searchBarSection = document.getElementById("discover");
    if (searchBarSection) {
      searchBarSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Test it out,<br></br> Own it later!
        </h1>

        <p className="hero__subtitle">
          Effortless rentals for confident purchases.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero_gray.v1.cropped.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;

/** create components folder outside of app folder
 * new Next13
 * only related with route will go in app folder
 */
