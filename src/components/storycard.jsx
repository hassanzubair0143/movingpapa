import React, { useState } from 'react';
import GoogleImage from '../assets/google.png';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function StoryCard() {
  const [active, setActive] = useState([false, false, false, false, false]);

  const toggleStar = (index) => {
    const updatedStars = [...active];

    if (active[index]) {
      // Unselect only if it's the last selected star
      if (index === active.lastIndexOf(true)) {
        updatedStars[index] = false;
      }
    } else {
      // Select the star and all stars before it
      for (let i = 0; i <= index; i++) {
        updatedStars[i] = true;
      }
    }

    setActive(updatedStars);
  };

  return (
    <>
      <div className='lg:max-w-[357px] lg:h-[685px] rounded-[25px] shadow-2xl flex flex-col items-center justify-around'>
        {/* 1st div */}
        <div className='flex flex-col items-center justify-start'>
          <div className='flex justify-center items-center'>
            <img src={GoogleImage} alt="Google" className=' ' />
          </div>
          <div className='flex flex-row lg:flex-row xl:flex-row mt-3'>
            {[...Array(5)].map((_, i) => (
              <button key={i} onClick={() => toggleStar(i)}>
                {active[i] ? (
                  <StarIcon className="text-yellow-500" />
                ) : (
                  <StarOutlineIcon className="text-gray-400" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2nd div */}
        <div className='mx-[50px] items-center text-center'>
          <p className='text-[18px] leading-[28px] text-center text-[#6A6A6A]'>
            Et eligendi expedita. Accusantium qui est eius nemo eaque dolore necessitatibus voluptatem. Ut accusamus provident beatae dolorum amet. Omnis sapiente aut saepe aliquam doloribus eaque. Iure sit sed animi molestiae impedit.
          </p>
        </div>

        {/* 3rd div */}
        <div>
          <p className='lg:text-[18px] lg:leading-[28px] text-center text-[#6A6A6A]'>
            From: Sophia Jenkins
          </p>
          <div className='mx-5'>
            <a href="#" className='text-[#4285F4]'>
              See it on Google
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryCard;
