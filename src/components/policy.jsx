import React from 'react'
import Line from '../assets/line.png'
import Delivery from '../assets/delivery-image.png'

function policy() {
  return (
    <>
      <div className='flex items-center justify-center mt-[75px] pb-[100px] sm:flex-col'>
        <h1 className='lg:text-[61px] font-bold text-black '>Our Commitment To <span className='text-[#119333]'>Tansparency</span></h1>
      </div>

      <div className='flex flex-col justify-around items-center lg:flex-row sm:text-[23px] px-[20px] lg:p-0'>
        <div className='   flex flex-col '>
            <div className='flex gap-5'>
                <div>
                    <p className='lg:text-[31px] lg:leading-[44px] bg-gradient-to-b from-[#F84734] to-[#34A853] bg-clip-text text-transparent'>01</p>
                    </div>
                <div className='max-w-[800px] pb-[40px]'>
                    <h1 className='font-bold text-[#020800] lg:text-[28px]'>Clear, Upfront pricing <span className='lg:text-[28px] font-normal text-[#00292A]'>- We believe in honest communication from the start. We provide clear, upfront pricing with no hidden fees, so you know exactly what you’re paying for.</span></h1>
                    </div>
                
              
            </div>
            <div className='flex items-center justify-start'>
            <img src={Line} alt="" />
                 {/* <div className='h-3 w-3 border- rounded-full '></div>
                 <div className='h-1 w-[65%] '></div>
                 <div className='h-3 w-3 border rounded-full '></div> */}
                </div>

                <div className='flex gap-5 my-[37px]'>
                <div>
                    <p className='lg:text-[31px] lg:leading-[44px] bg-gradient-to-b from-[#F84734] to-[#34A853] bg-clip-text text-transparent'>02 </p>
                    </div>
                <div className='lg:max-w-[800px] pb-[40px]'>
                    <h1 className='font-bold text-[#020800] lg:text-[28px]'>Real-Time Tracking<span className='lg:text-[28px] font-normal text-[#00292A]'>- With MovingPapa You’ll always know the status of your move, from when we pick up your items to when they arrive at your new home, providing full visibility.</span></h1>
                    </div>
                
              
            </div>
            <div className='flex items-center justify-start '>
            <img src={Line} alt="" />
                 {/* <div className='h-3 w-3 border- rounded-full '></div>
                 <div className='h-1 w-[65%] '></div>
                 <div className='h-3 w-3 border rounded-full '></div> */}
                </div>

                <div className='flex gap-5 my-[37px]'>
                <div>
                    <p className='lg:text-[31px] leading-[44px] bg-gradient-to-b from-[#F84734] to-[#34A853] bg-clip-text text-transparent'>03</p>
                    </div>
                <div className='lg:max-w-[800px] pb-[40px]'>
                    <h1 className='font-bold text-[#020800] lg:text-[28px]'>Sustainability at the Core <span className='lg:text-[28px] font-normal text-[#00292A]'>- Transparency extends to our environmental impact. From our eco-friendly packing materials to optimized routes, we’re committed to moving your belongings while minimizing our carbon footprint.</span></h1>
                    </div>
                
              
            </div>
            <div className='flex items-center justify-start'>
            <img src={Line} alt="" />
                 {/* <div className='h-3 w-3 border- rounded-full '></div>
                 <div className='h-1 w-[65%] '></div>
                 <div className='h-3 w-3 border rounded-full '></div> */}
                </div>

                <div className='flex gap-5 my-[37px]'>
                <div>
                    <p className='lg:text-[31px] lg:leading-[44px] bg-gradient-to-b from-[#F84734] to-[#34A853] bg-clip-text text-transparent'>04</p>
                    </div>
                <div className='lg:max-w-[800px] pb-[40px]'>
                    <h1 className='font-bold text-[#020800] lg:text-[28px]'>24/7 Availability & Non-Intrusive Service<span className='lg:text-[28px] font-normal text-[#00292A]'>- Life doesn’t stop, so neither do we. With round-the-clock availability, you can schedule your move at your convenience. Plus, we respect your time—no spammy calls. You decide when you want to be contacted.</span></h1>
                    </div>
                
              
            </div>
            
                

        </div>
        <div className=' flex justify-center items-center'>
         <img src={Delivery} alt="" className=' '/>
        </div>

      </div>

    </>
  )
}

export default policy
