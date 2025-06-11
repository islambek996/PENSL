import React, { useState } from 'react'
import Google from '../assets/google.webp';

const Button = ({ text, type }) => {
  const [hover, setHover] = useState(false);
  
  const primaryColor = '#482BE7';
  const primaryHoverColor = '#2c11bf';
  const secondaryColor = '#25DAC5';
  const secondaryHoverColor = '#20bdab';
  const tertiaryColor = '#E93A7D';
  const tertiaryHoverColor = '#c72a66';

  let buttonColor = '';
  let hoverColor = '';

  if (type === 'primary') {
    buttonColor = primaryColor;
    hoverColor = primaryHoverColor;
  }
  else if (type === 'secondary') {
    buttonColor = secondaryColor;
    hoverColor = secondaryHoverColor;
  }
  else {
    buttonColor = tertiaryColor;
    hoverColor = tertiaryHoverColor;
  }
    
  const googleButton = (
    <div className="px-5 border border-gray-900 hover:bg-gray-900 text-black hover:text-white rounded-[100px] flex justify-center items-center 
        cursor-pointer duration-500"
    >
        <img className="h-10" src={Google} alt='Google Logo' />
        <p className=''>{text}</p>
    </div>
  );

  const transparentButton = (
    <div className="px-5 py-2 border-2 border-slate-400 hover:bg-[#E93A7D] hover:border-opacity-0 border-opacity-50 rounded-[100px] 
        cursor-pointer duration-500"
    >
        <p className='text-white'>{text}</p>
    </div>
  );

  if (type === 'google') {
    return googleButton;
  }

  if (type === 'transparent') {
    return transparentButton;
  }

  return (
    <div 
      style={{ backgroundColor: !hover ? buttonColor : hoverColor }}
      className="px-5 py-2 rounded-[100px] cursor-pointer duration-500"
      onMouseEnter={() => {setHover(true)}}
      onMouseLeave={() => {setHover(false)}}
    >
        <p className='text-white'>{text}</p>
    </div>
  )
}

export default Button