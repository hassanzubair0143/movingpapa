import React from 'react'
import StoryCard from './storycard'

function storiesSection() {
  return (
    <>
      <div className='w-[100%] p-[20px] lg:p-0'>
      <div className='py-[80px]'>
      <h1 className=' lg:text-[62px] text-center text-black font-normal'>Real Stories From <span className='bg-gradient-to-r from-[#F84734] to-[#FCD503] bg-clip-text text-transparent '>Happy Customers</span></h1>
      </div>

      <div className='flex  flex-col sm:flex-row md:flex-row gap-3 justify-around items-center py-[96px] lg:flex-row xl:flex-row'>
        <StoryCard/>
        <StoryCard/>
        <StoryCard/>
        </div>
      </div>
    </>
  )
}

export default storiesSection
