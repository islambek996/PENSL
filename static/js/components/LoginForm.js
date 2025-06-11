import React from 'react'
import Button from './Button'

const LoginForm = () => {
  return (
    <div className='border-grey border rounded-[10px] max-w-[35rem] py-8 px-10 mx-auto lg:mx-0'>
        <p className='mb-10 text-lg'>SIGN IN</p>

        <div className='w-full mb-8 border border-grey rounded-md px-5 py-2'>
            <input className='w-full focus:outline-none' placeholder='EMAIL' />
        </div>
        
        <div className='w-full mb-8 border border-grey rounded-md px-5 py-2'>
            <input className='w-full focus:outline-none' placeholder='PASSWORD' type='password' />
        </div>

        <Button text="Login" type="secondary" />

        <div className='h-[1px] w-full bg-slate-300 my-10 relative'>
          <p className='absolute top-[-12px] left-[50%] translate-x-[-50%] bg-white px-5 text-slate-400'>or</p>
        </div>

        <Button text="Sign in with Google" type="google" />
    </div>
  )
}

export default LoginForm