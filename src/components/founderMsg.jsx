import React from 'react'
import FounderImage from '../assets/founder-image.png'
import Seal from '../assets/seal.png'
import Logo from '../assets/logo2.png'

function founderMsg() {
  return (
    <>
      <div className='w-full p-[20px] lg:p-0 h-auto bg-[#F9E6F0]'>
        <div className='py-[58px] flex justify-center items-center'>
            <p className='lg:text-[70px] font-bold text-center'>A Message From The Founders</p>
        </div>
      <div className='flex flex-col pt-[50px] lg:flex-row xl:flex-row '>
      <div className='flex flex-col gap-[40px] lg:max-w-[930px] lg:mx-[58px] lg:mt-[50px]'>
        <p className='lg:text-[35px] lg:leading-[56px]'>At Moving Papa, we believe in keeping things simple and honest. Moving can be stressful, so transparency is at the heart of everything we do. </p>
        <p className='lg:text-[35px] lg:leading-[56px]'>You deserve to know exactly what to expect—no hidden fees, no unnecessary calls, just a straightforward process that works for you. We’re here to earn your trust by being open and always putting your needs first. </p>
        <p className='lg:text-[35px] lg:leading-[56px]'>Thank you for choosing us to be part of your journey.</p>
       
      </div>
      <div className='flex items-center justify-center mx-auto'>
      <img src={FounderImage} alt="" />
      </div>
     
      </div>
      <div className='flex items-center justify-center '>
        <img src={Seal} alt="" className='relative' />
        {/* <img src={} alt="" className='absolute '/> */}
        {/* <img src={Logo} alt="" className='absolute fill-[#8e1616]'/> */}
      </div>
      </div>
    </>
  )
}

export default founderMsg
