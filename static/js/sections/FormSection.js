import React from 'react';
import LoginForm from '../components/LoginForm';
import SpringDiv from '../components/SpringDiv';

const FormSection = () => {
  return (
    <div className='py-20 px-5 md:px-10 lg:p-20 lg:flex'>

        <SpringDiv className='lg:w-1/2 xl:p-20 text-left'>
            <h1>We solve digital problems with an outstanding creative flare</h1>
            <p className='mt-10 text-lg'>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </SpringDiv>

        <SpringDiv duration={0.8} className='lg:w-1/2 mt-16 lg:mt-0'>
            <LoginForm />
        </SpringDiv>

    </div>
  )
}

export default FormSection