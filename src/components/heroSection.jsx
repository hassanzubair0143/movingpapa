import React, { useState } from 'react';
import Google from '../assets/google.png';
import PickUp from '../assets/pickup.png';
import Destination from '../assets/destination.png';
import VanImage from '../assets/van-image.png';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function HeroSection() {
  const [activeStars, setActiveStars] = useState([false, false, false, false, false]);

  // Calculate the rating based on the number of active stars
  const rating = activeStars.filter(star => star).length;

  const toggleStar = (index) => {
    const updatedStars = [...activeStars];

    if (activeStars[index]) {
      // Unselect only if it's the last selected star
      if (index === rating - 1) {
        updatedStars[index] = false;
      }
    } else {
      // Select the star and all stars before it
      for (let i = 0; i <= index; i++) {
        updatedStars[i] = true;
      }
    }

    setActiveStars(updatedStars);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full mt-20">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center mt-10 lg:mt-22 lg:w-1/2 w-full px-4 lg:px-0">
        <div className="lg:text-[75px] font-arialBold p-3 text-center lg:text-left">
          Your Move, Simplified
        </div>
        <div className="text-[#908989] text-lg lg:text-[30px] leading-7 lg:leading-[35px] text-center lg:text-left mt-4 lg:mt-0">
          Full service moving teams or rent a truck.
        </div>

        <div className="flex flex-row gap-2 justify-center mt-10 lg:mt-14 items-center shadow-lg p-5 border-t-8 border-[#34A853] rounded-xl w-full lg:w-auto">
          <div>
            <img src={Google} alt="Google" className='h-24 w-24' />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg lg:text-[27px] leading-7 lg:leading-[27px] text-[#6A6A6A]">
              Google Top Rated Service
            </p>
            <div className="flex flex-row lg:flex-row items-center gap-3 justify-start">
              <p className="text-[#FEA500] text-2xl lg:text-[40px] leading-7 lg:leading-[40px]">
                {rating.toFixed(1)}
              </p>
              <div className="flex flex-row">
                {[...Array(5)].map((_, i) => (
                  <button key={i} onClick={() => toggleStar(i)}>
                    {activeStars[i] ? (
                      <StarIcon className="text-yellow-500" />
                    ) : (
                      <StarOutlineIcon className="text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm lg:text-[20px] leading-5 lg:leading-[20px] text-[#868686]">
              See our All Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="bg-[#00292A] lg:w-1/2 w-full h-auto lg:h-[948px] flex items-start justify-center rounded-2xl mt-10 lg:mt-0 pt-3">
        <div className="flex flex-col gap-5 h-auto lg:h-[838px] justify-center items-center px-4 lg:px-0">
          <p className="text-white text-xl lg:text-[32px] leading-6 lg:leading-[37px] text-center">
            Where Are You Moving To?
          </p>
          <div className="bg-white flex justify-start items-center rounded-3xl border-2 hover:border-[#F84734] w-full lg:w-auto">
            <img src={PickUp} alt="Pick Up" className="h-4 w-4 ml-3" />
            <input
              type="text"
              placeholder="Choose pickup point"
              className="outline-none border-none p-3 rounded-full w-full lg:w-auto"
            />
          </div>

          <div className="bg-white flex gap-3 justify-start items-center rounded-3xl border-2 hover:border-[#F84734] w-full lg:w-auto">
            <img src={Destination} alt="Destination" className="h-5 w-4 ml-3" />
            <input
              type="text"
              placeholder="Choose Your Destination"
              className="outline-none border-none p-3 rounded-full w-full lg:w-auto"
            />
          </div>
          <div className="flex items-center justify-center w-full lg:w-auto">
            <button className="text-white text-lg lg:text-[28px] leading-6 lg:leading-[32px] bg-[#F84734] p-3 rounded-3xl hover:bg-red-400 transition-all duration-300 w-full lg:w-auto">
              Get a Quote
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-white opacity-65 text-sm lg:text-[21px] leading-5 lg:leading-[20px]">
              No hidden fees.
            </p>
            <p className="text-white opacity-65 text-sm lg:text-[21px]">
              Transparent Pricing from start to finish
            </p>
          </div>

          <div className="pt-10 lg:pt-[110px] rounded-3xl">
            <img src={VanImage} alt="Van" className="object-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
