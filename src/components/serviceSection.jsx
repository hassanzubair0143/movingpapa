import React, { useState } from 'react';
import Arrow from '../assets/arrow.png';
import Card from './card'; // Assuming Card is a component or an image
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ServiceSection() {
  const [active, setActive] = useState(0); // Active card index
  const cards = [<Card />, <Card/>,<Card/>,<Card/>,<Card/>, <Card/>]; // Array of cards

  // For previous card
  const goPrevious = () => {
    const isFirstSlide = active === 0;
    const newIndex = isFirstSlide ? cards.length - 1 : active - 1;
    setActive(newIndex);
  };

  // For next card
  const goNext = () => {
    const isLastSlide = active === cards.length - 1;
    const newIndex = isLastSlide ? 0 : active + 1;
    setActive(newIndex);
  };

  return (
    <>
      <div className='w-full h-auto pb-[50px] px-[20px] lg:h-[1314px] bg-[#00292A] flex flex-col justify-start items-center'>
        <div className='mt-16 lg:mt-[68px] justify-center items-center py-5'>
          <h1 className='text-white lg:text-[60px]  lg:leading-[69px] text-center lg:max-w-[800px] font-bold'>
            Our Services: <span className='font-medium'>Making your move a breeze</span>
          </h1>
        </div>

        <div className='mt-8 lg:mt-[30px] px-4 lg:px-0'>
          <p className='text-[20px] lg:text-[32px] leading-[30px] lg:leading-[51px] text-white text-center'>
            Moving Papa provides flexible moving solutions,
            <br /> from full-service to DIY options. Our tech-driven platform ensures a smooth,
            <br /> transparent process, so you can move with ease.
          </p>
        </div>

        {/* Arrow Navigation */}
        <div className='flex justify-around items-center mt-8 lg:mt-[50px] w-full max-w-4xl px-4 lg:px-0'>
          <div onClick={goPrevious} className={`cursor-pointer  flex items-center justify-center rounded-full w-14 h-14 ${active > 0 ? 'bg-red-600 rounded-3xl': ''}`}>
            <ArrowBackIcon  className={`text-white  `} />
          </div>
          <div onClick={goNext} className={`cursor-pointer flex items-center justify-center rounded-full w-14 h-14  ${active <= active + 1 ? 'bg-red-600 rounded-3xl' : ''}`}>
            <ArrowForwardIcon className={` text-white  `} />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full flex max-w-4xl mt-8 lg:ml-[300px] flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-500 
                ${active === index ? 'scale-100 brightness-125' : 'scale-90 opacity-50'}`} // Highlighting active card
              >
                {card}
                {/* {card} Render the Card component or image here */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
