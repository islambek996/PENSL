import React from 'react'
import Button from '../components/Button'
import PlayIcon from '../assets/play-icon.png'
import SpringDiv from '../components/SpringDiv'

const CallToActionSection = () => {
  return (
    <div className="bg-[url('./assets/hero-image.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="bg-[rgba(47,24,147,0.5)] h-full w-full text-white flex flex-col items-center
        py-32 px-5">
            
            <SpringDiv>
                <h1 className=''>Easy to setup.</h1>
                <h1 className='mb-10'>Easy to maintain.</h1>
            </SpringDiv>

            <SpringDiv duration={0.8}>
                <p className='max-w-[500px] mb-10'>Bootsrap is a widely-used, sleek, intuituve and powerful front-end framework for faster and easier web development.</p>
            </SpringDiv>

            <SpringDiv duration={1.2}>
                <div className='flex gap-10 flex-row'>
                    <div className='h-12 w-12 bg-red-500 rounded-[100px] flex justify-center items-center cursor-pointer'>
                        <img src={PlayIcon} alt="play icon" className='translate-x-[2px]' />
                    </div>
                    
                    <div className='flex items-center'>
                        <Button text="Get Started" type="secondary" />
                    </div>
                </div>
            </SpringDiv>
        </div>
    </div>
  )
}

export default CallToActionSection