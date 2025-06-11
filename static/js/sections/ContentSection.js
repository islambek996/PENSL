import React from 'react'
import SpringDiv from '../components/SpringDiv'

const ContentSection = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat py-20 px-5 md:px-10">
        <SpringDiv>
          <p className='text-lg mb-10'>Free Sample</p>
        </SpringDiv>
        
        <SpringDiv duration={0.8}>
          <h1 className='font-bold mb-5 text-xl md:text-3xl xl:text-5xl'>Powerful Generator and Free</h1>
          <h1 className='font-bold mb-10 text-xl md:text-3xl xl:text-5xl'>Figma Sources</h1>
        </SpringDiv>
        
        <SpringDiv duration={1.2}>
          <p className='text-lg w-full lg:w-3/4 max-w-[1000px] mx-auto'>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style and can easily be integrated into projects, allowing you to create hundreds of solutions.</p>
        </SpringDiv>
    </div>
  )
}

export default ContentSection