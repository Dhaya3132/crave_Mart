import React from 'react';
import {assets} from '../../assets/assets';
const Navbar = () => {
  return (
    <div id='navbar' className='flex justify-between px-5 py-1 border-b-2 border-neutral-200 shadow-sm items-center'>
      <img src={assets.logo} alt="logo"  className='w-20 h-20'/>
      <img src={assets.profile_image} alt="profile" className='w-10 h-10' />
    </div>
  )
}

export default Navbar