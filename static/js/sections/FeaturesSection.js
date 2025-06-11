import React from 'react'
import LaptopImage from '../components/LaptopImage'
import Icon1 from '../assets/icon1.png';
import SpringDiv from '../components/SpringDiv';

const FeaturesSection = () => {
  return (
    <div id="features-section" className="bg-[url('./assets/features-image.png')] bg-cover bg-center bg-no-repeat lg:h-screen bg-fixed">
        <div className='bg-[rgba(47,24,147,0.5)] w-full h-full px-5 py-20 relative flex items-center'>
            <LaptopImage />

            <div className='text-white md:w-[60%] xl:w-[45%] ml-auto lg:mr-[10%] xl:mr-[15%] flex flex-col justify-between'>
                <SpringDiv className='text-left'>
                    <h1 className='font-bold'>We Create Something New</h1>
                    <p className='text-lg mt-5'>We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.</p>
                </SpringDiv>

                <div className='block md:flex mt-10'>
                    <SpringDiv className='text-left pr-10' duration={0.8}>
                        <img className="mb-5" src={Icon1} alt="Icon"/>
                        <p>30 NEW FEATURE PAGES</p>
                        <p className="mb-5 leading-loose font-extralight" >Startup Framework contains components and complex blocks which can easily.</p>
                    </SpringDiv>

                    <SpringDiv className='text-left' duration={1}>
                        <img className="mb-5" src={Icon1} alt="Icon"/>
                        <p>30 NEW FEATURE PAGES</p>
                        <p className="mb-5 leading-loose font-extralight" >Samples will show you the feeling on how to play around using the components.</p>
                    </SpringDiv>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection