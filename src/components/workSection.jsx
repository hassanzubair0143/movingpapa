import React, { useState } from 'react'


function workSection() {
    const [active, setActive] = useState('')

    const handleButton = (button) => {
      setActive(button);
    };

  return (
    <>
      
      <div className="mt-[160px] flex justify-center items-center w-full">
        <p className="text-[35px] mb-[43px] lg:text-[60px] text-[#000000]">How it Works</p>
      </div>

      <div className="lg:my-10 flex justify-center items-center w-full">
        <div className="bg-black rounded-full flex justify-start items-start gap-1">
            <div className={`text-white px-3 py-2 lg:px-4 m-2 rounded-full lg:text-[50px] lg:leading-[70px] ${
              active === 'button1' ? 'bg-red-400' : 'bg-black text-[#E0E0E0]'
            }`}
            onClick={() => handleButton('button1')}>Full-Service</div>


            <div className={`text-white py-2 px-3 lg:px-4 m-2 rounded-full lg:text-[50px] lg:leading-[70px] ${
              active === 'button2' ? 'bg-red-400' : 'bg-black text-[#E0E0E0]'
            }`}
            onClick={() => handleButton('button2')}>Self-Service</div>
          {/* <button
            className={`text-white py-2 px-4 m-2 rounded-full text-[50px] leading-[70px] ${
              active === 'button1' ? 'bg-red-400' : 'bg-black text-[#E0E0E0]'
            }`}
            onClick={() => handleButton('button1')}
          >
            Full-Service
          </button> */}
          {/* <button
            className={`text-white py-2 px-4 m-2 rounded-full text-[50px] leading-[70px] ${
              active === 'button2' ? 'bg-red-400' : 'bg-black text-[#E0E0E0]'
            }`}
            onClick={() => handleButton('button2')}
          >
            Self-Service
          </button> */}
        </div>
      </div>

      <div className='mt-[170px] flex flex-col justify-center  px-8 gap-5 lg:gap-0 lg:px-0 lg:ml-0 w-[100%] lg:justify-around lg:flex-row xl:flex-row '>
        <div className='  flex flex-col lg:items-center justify-start lg:ml-[124px] xl:ml-[150px]'>
         <div className='lg:text-center'> 
          <p className='text-[#00292A] lg:text-[40px] font-semibold'>Book Your Move</p>
          </div>
          <div className='flex lg:justify-center lg:items-center lg:max-w-[500px] lg:mt-7'><p className='lg:text-[37px] text-[#888888] lg:leading-[48px] '>Tell us when and where, and we’ll handle the rest. Booking is easy and stress free.</p></div>
        </div>

        <div className='   flex flex-col lg:items-center justify-start'>
         <div className='lg:text-center'> <p className='lg:text-[#00292A] lg:text-[40px] font-semibold'>We move you</p></div>
          <div className='lg:max-w-[490px] lg:mt-7'><p className='lg:text-[37px] text-[#888888] lg:leading-[48px] lg:text-center'>Our proffessional movers arrive on time, ready to carefully pack, load and transport your belongings.</p></div>
        </div>

        <div className='   flex flex-col lg:items-center justify-start '>
         <div className='lg:text-center'> <p className='text-[#00292A] lg:text-[40px] font-semibold'>Settle in</p></div>
          <div className='lg:max-w-[490px] lg:mt-7'><p className='lg:text-[37px] text-[#888888] lg:leading-[48px] lg:text-center'>We unload and all you need to do is relax and enjoy your new space. </p></div>
        </div>
      </div>

      <div className="flex items-center justify-center my-[90px]">
              <button className="text-white py-[15px] px-[40px] lg:text-[53px] lg:p-[40px] text-center lg:leading-[32px] bg-[#F84734] rounded-full hover:bg-[#00292A] transition-all duration-300">
                Get a Quote
              </button>
            </div>
    </>
  )
}

export default workSection
