import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  return (
    <nav className='p-5 flex justify-between items-center' id='navBar'>
        <img src={assets.logo} alt="logo" className='w-24' />
        <ul id="navBar-Menu" className='flex gap-5 items-center text-base font-normal'>
          <li onClick={()=> setMenu('home')} className={menu === 'home' ? 'underline-orange-500 underline-offset-8' : ''}>Home</li>
          <li onClick={()=> setMenu('menu')} className={menu === 'menu' ? 'underline underline-offset-8' : ''}>Menu</li>
          <li onClick={()=> setMenu('blog')} className={menu === 'blog' ? 'underline underline-offset-8' : ''}>Blog</li>
          <li onClick={()=> setMenu('contact')} className={menu === 'contact' ? 'underline underline-offset-8' : ''}>Contact us</li>
          <li onClick={()=> setMenu('mobile-app')} className={menu === 'mobile-app' ? 'underline underline-offset-8' : ''}>Mobile-app</li>
        </ul>
        <div className='flex items-center gap-5'>
          <img src={assets.search_icon} alt="search-icon" className='w-5' />
          <div id='cart' className='relative'>
            <img src={assets.basket_icon} alt="cart" className='w-5' />
            <div id='dot' className='w-2 h-2 bg-orange-500 rounded-full absolute -top-2 -right-1'></div>
          </div>
          <button className='text-white font-medium text-base px-6 py-2 bg-indigo-500 rounded-full'>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar;