import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import Location from '../assets/Location.png';
import Union from '../assets/Union.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <div className='flex lg:flex-row h-auto lg:h-[90px] w-full border-b border-[#6D6D6D]'>
        {/* Logo and Book a Move Button */}
        <div className='flex flex-row justify-between w-[90%] lg:w-[50%] items-center p-4 lg:py-0 lg:border-r border-[#6D6D6D]'>
          <div className='flex items-center'>
            <img src={Logo} alt="Logo" className='h-[30px] w-[45%] sm:h-[57px] lg:h-[57px]' />
          </div>
          <div className='flex items-center'>
            <button className='px-4 text-[12px] lg:py-2 rounded-full bg-[#F84734] text-white hover:bg-[#00292A] transition-all duration-300'>
              Book Move
            </button>
          </div>
        </div>

        {/* Menu Icon */}
        <div className={`flex items-center ${isMenuActive ? 'hidden' : 'lg:hidden'} ml-4`}>
          <button onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </div>

        {/* Rest of the Navbar (Hidden on small screens) */}
        <div className={`hidden lg:flex lg:flex-row w-full lg:w-[50%] ${isMenuActive ? 'hidden' : 'block'}`}>
          <div className='flex justify-center items-center w-[30%] lg:w-[30%] border-b lg:border-b-0 lg:border-r border-[#6D6D6D] p-4 lg:p-0'>
            <p className='text-center text-[22px] sm:text-[26px]'>Track Your Move</p>
            <div className='ml-0 sm:ml-2 mt-2 sm:mt-0'>
              <img src={Location} alt="Location" />
            </div>
          </div>

          <div className='flex justify-center items-center w-[30%] lg:w-[30%] border-b lg:border-b-0 lg:border-r border-[#6D6D6D] p-4 lg:p-0'>
            <p className='text-center sm:text-[26px]'>Sustainability</p>
            <div className='ml-0 sm:ml-2 mt-2 sm:mt-0'>
              <img src={Union} alt="Union" />
            </div>
          </div>

          <div className='flex justify-center items-center w-[20%] lg:w-[20%] border-b lg:border-b-0 lg:border-r border-[#6D6D6D] p-4 lg:p-0'>
            <p className='text-center text-[22px] sm:text-[26px]'>Sign Up</p>
          </div>
          <div className='flex justify-center items-center w-[20%] lg:w-[20%] p-4 lg:p-0'>
            <p className='text-center text-[22px] sm:text-[26px]'>Login</p>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-white shadow-lg z-50 transform ${isMenuActive ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className='flex justify-end p-4'>
          <button onClick={toggleMenu}>
            <CloseIcon />
          </button>
        </div>
        <div className='flex flex-col ml-5'>
          <div className='p-4 flex gap-2 border-b border-[#6D6D6D]'>
            <p className='text-[22px] sm:text-[26px]'>Track Your Move</p>
            <img src={Location} alt="Location" className='mt-2' />
          </div>
          <div className='p-4 flex gap-2 border-b border-[#6D6D6D]'>
            <p className='text-[22px] sm:text-[26px]'>Sustainability</p>
            <img src={Union} alt="Union" className='mt-2' />
          </div>
          <div className='p-4 border-b border-[#6D6D6D]'>
            <p className='text-[22px] sm:text-[26px]'>Sign Up</p>
          </div>
          <div className='p-4'>
            <p className='text-[22px] sm:text-[26px]'>Login</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
