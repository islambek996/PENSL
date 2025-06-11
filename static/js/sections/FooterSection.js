import React from 'react'
import Icon1 from '../assets/twitter-icon.png'
import Icon2 from '../assets/facebook-icon.png'
import Icon3 from '../assets/google-plus-icon.png'

const FooterSection = () => {
  return (
    <div id="contact-section" className='bg-[rgb(47,24,147)] py-10 px-5  xl:px-20 text-white'>
        <div className='lg:flex justify-between'>
            <h3 className='text-left text-2xl mb-5 xl:mb-0'>Startup3</h3>

            <div className='flex items-center'>
                <p className='mr-5 cursor-pointer'>Privacy Policy</p>
                <p className='mr-5 cursor-pointer'>Terms</p>
                <img className="h-4 mr-5 cursor-pointer" src={Icon1} alt="icon" />
                <img className="h-4 mr-5 cursor-pointer" src={Icon2} alt="icon" />
                <img className="h-4 mr-5 cursor-pointer" src={Icon3} alt="icon" />
            </div>
        </div>

        <div className='h-[1px] bg-slate-400 my-5 xl:my-10 w-full opacity-50'></div>

        <div className='lg:flex justify-between'>
            <ul className='lg:flex text-left'>
                <li className='mr-10 cursor-pointer'>Tour</li>
                <li className='mr-10 cursor-pointer'>Features</li>
                <li className='mr-10 cursor-pointer'>Pricing Plans</li>
                <li className='mr-10 cursor-pointer'>Our Works</li>
                <li className='mr-10 cursor-pointer'>Brands</li>
                <li className='mr-10 cursor-pointer'>Contacts</li>
            </ul>

            <p className='mt-5 xl:mt-0 text-sm'>@2017 Designmodeo. All rights reserved.</p>

        </div>
    </div>
  )
}

export default FooterSection