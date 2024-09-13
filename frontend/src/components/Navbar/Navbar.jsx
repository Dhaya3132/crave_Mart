import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { totalAmount } from '../../store/cartSlice';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const totalPrice = useSelector(totalAmount);
  const [menu, setMenu] = useState('home');
  const [open, setIsOpen] = useState(false);
  const handleMenu = () => { setIsOpen(!open); }
  const { token } = useContext(StoreContext);

  return (
    <nav>
      <div className='flex justify-between items-center font-medium text-sm' id='navBar'>
        <div id="leftPart" className='flex gap-4'>
          <Link to='/'><img src={assets.Logo} alt="logo" className='w-32' /></Link>
          <ul id="navBar-Menu" className='cursor-pointer md:flex hidden gap-7 items-center'>
            <Link to='/'><li onClick={() => setMenu('home')} className={menu === 'home' ? 'underline underline-offset-4' : ''}>Home</li></Link>
            <a href='#menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'underline underline-offset-4' : ''}>Menu</a>
            <a href='#footer' onClick={() => setMenu('contact')} className={menu === 'contact' ? 'underline underline-offset-4' : ''}>Contact us</a>
          </ul>
        </div>
        <div id='rightPart' className='md:flex items-center gap-7 hidden'>
          <img src={assets.search_icon} alt="search-icon" className='w-5' />
          <div id='cart' className='relative'>
            <Link to='/cart'><img src={assets.basket_icon} alt="cart" className='w-5' /></Link>
            {totalPrice > 0 ? <div id='dot' className='w-2 h-2 bg-orange-500 rounded-full absolute -top-2 -right-1'></div> : ''}
          </div>
          {!token ? <button className='text-white px-5 py-2.5 bg-black rounded-full text-xs' onClick={() => setShowLogin(true)}>Sign in/ Login</button> :
            <div>
              <img src={assets.profile_icon} alt="" />
              <ul className='navbar-dropdwon'>
                <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>}
        </div>
        <img src={assets.burger} className='w-10 h-10 md:hidden' onClick={handleMenu} />
      </div>
      {
        open &&
        <div className=' bg-black text-white p-4'>
          <ul id="navBar-Menu" className='cursor-pointer flex flex-col gap-3 justify-start items-start text-base font-normal'>
            <li onClick={() => setMenu('home')} className={menu === 'home' ? 'underline underline-offset-8' : ''}>Home</li>
            <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'underline underline-offset-8' : ''}>Menu</li>
            <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'underline underline-offset-8' : ''}>Contact us</li>
            <li onClick={() => setMenu('cart')} className={menu === 'cart' ? 'underline underline-offset-8' : ''}>Cart</li>
            <li onClick={() => setMenu('signin')} className={menu === 'signin' ? 'underline underline-offset-8' : ''}>Sign in/Loging</li>
          </ul>
        </div>
      }
    </nav>
  )
}
export default Navbar;