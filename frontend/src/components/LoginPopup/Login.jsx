import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login')
  return (
    <div id='login-Form' className='z-50 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
      <form id="login-container" className='bg-white p-5 rounded-lg'>
        <div id="login-title" className='flex justify-between items-center mb-4'>
          <h2 className='font-semibold text-2xl'>{currentState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} className='w-5 h-5' />
        </div>
        <div id="login-Input" className='flex flex-col gap-4'>
          {currentState === 'Login' ? <></> : <input type="text" placeholder='Enter your Name' required className='p-2 border rounded-md' />}
          <input type="email" placeholder='Enter your Email' required className='p-2 border rounded-md' />
          <input type="password" placeholder='Enter your Password' required className='p-2 border rounded-md' />
        </div>
        <button className='text-center w-full bg-orange-500 text-white p-2 mt-3 rounded-md'>{currentState === 'Sign Up' ? 'Create an account' : 'Login'}</button>
        <div id="login-Condition" className='flex gap-1 mt-3'>
          <input type="checkbox" />
          <p className='font-light text-sm'>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState === 'Login' ? <p className='mt-3'>Create new account ? <span onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-blue-500'>Click here</span></p> :
          <p className='mt-3'>Already have an account ? <span onClick={() => setCurrentState('Login')} className='cursor-pointer text-blue-500' >Login</span></p>}
      </form>
    </div>
  )
}

export default Login;