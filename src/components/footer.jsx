import React from 'react'
import InstagramLogo from '../assets/instagram.png'
import FacebookLogo from '../assets/facebook.png'
import LinkedInLogo from '../assets/linkedin.png'

function footer() {
  return (
    <>
       <div className='w-[100%] p-[20px] pb-[30px] lg:pb-[50px] bg-black rounded-t-[40px] -mt-[40px] flex flex-col  justify-between lg:flex-row xl:flex-row sm:text-[30px] sm:text-wrap'>

        <div className='flex flex-col gap-[13px] mt-[140px] lg:ml-[58px]'>
      <p className='lg:text-[53px] xl:text-[60px] xl:leading-[70px] lg:leading-[61px] text-white '>WORK</p>
      <p className='lg:text-[53px] xl:text-[60px] xl:leading-[70px] lg:leading-[61px] text-white '>SERVICES</p>
      <p className='lg:text-[53px] xl:text-[60px] xl:leading-[70px] lg:leading-[61px] text-white '>SUBSCRIPTION</p>
      <p className='lg:text-[53px] xl:text-[60px] xl:leading-[70px] lg:leading-[61px] text-white '>FREEBIES</p>
      <p className='lg:text-[53px] xl:text-[60px] xl:leading-[70px] lg:leading-[61px] text-white '>ABOUT US</p>
      <p className='lg:text-[53px] xl:text-[60px] xl:leading-[70px] lg:leading-[61px] text-white '>CONTACT</p>
      
      
        </div>

        <div className='flex flex-col gap-2 mt-[140px] lg:mr-[30px]'>
            <p className='text-white lg:text-[53px]'>Contact us</p>
            <p className='text-white lg:text-[53px] leading-[86px] mt-[50px]'>Based in NewYork United States</p>
            <p className='text-white lg:text-[53px]'>
            hello@yourdomain.com
            </p>
            <p className='text-white lg:text-[53px]'>(078) 12345 12112</p>
            <div className='flex flex-row lg:flex-row xl:flex-row '>
                <img src={InstagramLogo} alt="" />
                <img src={FacebookLogo} alt="" />
                <img src={LinkedInLogo} alt="" />
            </div>

        </div>

        
       </div>
    </>
  )
}

export default footer
