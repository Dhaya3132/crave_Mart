import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Header = () => {
  return (
    <div className='mt-2 h-full w-full bg-neutral-50  text-black font-normal flex md:flex-row flex-col md:justify-between justify-center items-center'>
      <div className='md:w-1/2 w-full pt-5 shrink-0 text-white bg-orange-500'>
        <img src={assets.header_img} alt="header_image" className='mx-auto md:mx-0' />
      </div>
      <div className='md:p-10 p-5 flex flex-col flex-1'>
        <div>
          <h2 className='text-3xl'>Order favourite food now</h2>
          <p className='text-orange-500 text-6xl'>Fast and Fresh</p>
          <button className='bg-black text-white text-sm px-5 py-2 mt-2 rounded-full'>View menu</button>
        </div>
        <p className='md:text-5xl text-2xl mt-4'>Hungry? Order now</p>
        <p className='md:text-3xl text-lg font-extralight'>get flat 20% on all foods</p>
      </div>

    </div>
  )
}

export default Header;
