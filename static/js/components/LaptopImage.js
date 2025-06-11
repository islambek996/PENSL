import React from 'react'
import Img1 from '../assets/macbook.png';
import Img2 from '../assets/screen.png';
import SlideInLeftDiv from './SlideInLeftDiv';

const LaptopImage = () => {
  return (
    <div className='absolute left-0 top-[50%] translate-y-[-50%] hidden md:block'>
      <SlideInLeftDiv duration={0.8}>
          <img 
            className="h-[200px] md:h-[350px] xl:h-[500px]" 
            src={Img1} 
            alt="Macbook Pro"  
          />

          <img 
            className="absolute h-[167px] md:h-[298px] xl:h-[425px] translate-y-[-113%] md:translate-y-[-113%] xl:translate-y-[-113%]" 
            src={Img2} 
            alt="Macbook Pro" 
          />
      </SlideInLeftDiv>
    </div>
  )
}

export default LaptopImage