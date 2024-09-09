import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    
      <div id='sidebar' className='w-1/6 bg-black h-screen text-black'>
        <div id="sideBar-options" className='flex flex-col gap-5 p-5'>
          <Link to='/add'><div id="sideBar-option" className='bg-white flex item-center gap-3 md:p-2 p-1 cursor-pointer'>
            <img src={assets.add_icon} alt="" className='w-5 h-5' />
            <p className='hidden md:block'>Add Item</p>
          </div></Link>
          <Link to='/list'><div id="sideBar-option" className='bg-white flex item-center gap-3 md:p-2 p-1 cursor-pointer'>
            <img src={assets.order_icon} alt="" className='w-5 h-5' />
            <p className='hidden md:block'>List Item</p>
          </div></Link>
          <Link to='/orders'><div id="sideBar-option" className='bg-white flex item-center gap-3 md:p-2 p-1 cursor-pointer'>
            <img src={assets.order_icon} alt="" className='w-5 h-5' />
            <p className='hidden md:block'>Orders</p>
          </div></Link>
        </div>
      </div>

  )
}

export default Sidebar;