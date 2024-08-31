import React from 'react'
import Delivery from '../assets/delivery.png'
import Line from '../assets/card-line.png'

function card() {
  return (
    <>
      <div className='max-w-[400px] lg:max-w-[646px] rounded-[45px] bg-white rounded-lg flex flex-col'>

       <div className='lg:m-[56px] m-[25px] flex inline '><img src={Delivery} alt="" /></div>
       <div className='lg:mx-[50px] mx-5'><p className='lg:text-[40px] font-bold text-[#020800]'>Local Moving <span className='text-[24px] text-[#98A393]'>01</span> </p></div>
       <div className='lg:mx-[50px] lg:my-[21px]  lg:max-w-[530px] mr-3 flex justify-start items-center'><p className='text-[18px] lg:text-[28px]   text-[#020800]'>Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna in odio in urna amet ultrices fermentum.</p></div>
      <div className='mx-[50px] max-w-[530px] h-[20px] my-[46px] flex items-center'>
        <div className='h-3 w-3 rounded-full bg-[#98A393] relative'></div>
        <div className='w-[530px] h-1 bg-[#98A393] '></div>
        <div className='h-3 w-3 rounded-full bg-[#98A393]  justify-end'></div>
         </div>
      </div>
    </>
  )
}

export default card
