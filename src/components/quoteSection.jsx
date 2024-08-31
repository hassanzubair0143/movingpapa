import React from 'react'

function quoteSection() {
  return (
    <>
      <div className='w-[100%] bg-[#00292A] flex flex-col items-center justify-start gap-5 pt-[74px]'>
        <p className='text-center  text-white lg:text-[61px] font-bold'>Our commitment to transparency</p>
        <div className='mt-[110px]'><p className='text-white text-center lg:text-[53px] lg:leading-[61px]'>Get your instant quote</p>
        <p className='text-white text-center lg:text-[53px] lg:leading-[61px]'>and see why thousands trust Moving Papa</p></div>

        <div className="flex items-center justify-center mt-[90px] mb-[200px]">
              <button className="text-white lg:text-[53px] p-[10px] lg:p-[40px] text-center lg:leading-[32px] bg-[#F84734] rounded-full hover:bg-[#00292A] transition-all duration-300">
                Get a Quote
              </button>
            </div>
      </div>
    </>
  )
}

export default quoteSection
