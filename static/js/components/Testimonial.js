import React from 'react'
import SlideInLeftDiv from './SlideInLeftDiv'

const Testimonial = ({ name, quote, image, duration }) => {
  return (
    <SlideInLeftDiv 
      duration={duration} 
      className='min-h-[220px] lg:w-[calc(50%-2.5rem)] m-5 p-5 rounded-md border-2 border-slate-400 border-opacity-50 flex'
    >
        <div className='h-full w-20'>
            <img className="h-15 w-15" src={image} alt="User Profile"/>
        </div>
        
        <div className='w-[calc(100%-5rem)] text-left flex flex-col justify-between px-5 text-white'>
            <p>"{quote}"</p>
        
            <p className='mt-5'>-{name}</p>
        </div>
    </SlideInLeftDiv>
  )
}

export default Testimonial