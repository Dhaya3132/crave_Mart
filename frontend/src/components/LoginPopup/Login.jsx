import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login')
  return (
    <div id='login-Form' className='bg-loginColor absolute z-10 w-full'>
      <form id="login-container">
        <div id="login-title">
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div id="login-Input">
          {currentState === 'Login' ? <></> : <input type="text" placeholder='Enter your Name' required />}
          <input type="email" placeholder='Enter your Email' required />
          <input type="password" placeholder='Enter your Password' required />
        </div>
        <button>{currentState === 'Sign Up' ? 'Create an account' : 'Login'}</button>
        <div id="login-Condition">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState === 'Login' ? <p>Create new account ? <span onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Click here</span></p> :
          <p>Already have an account ? <span onClick={() => setCurrentState('Login')} className='cursor-pointer' >Login</span></p>}
      </form>
    </div>
  )
}

export default Login