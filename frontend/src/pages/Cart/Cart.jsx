import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from '../../store/cartSlice';
import { totalAmount } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { food_list } = useContext(StoreContext);
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItem);
  const totalPrice  = useSelector(totalAmount);
  const navigate = useNavigate();
  return (
    <div id='cart'>
      <div id="cart-item">
        <div id="cart-title" className='grid grid-cols-6 gap-5 items-center mb-2 font-semibold md:text-lg text-xs'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div key={index} className='grid grid-cols-6 md:gap-5 gap-4 items-center my-3 font-medium md:text-sm text-xs' >
                    <img src={item.image} alt="item_image" className='md:w-24 w-12 md:h-24 h-12 rounded-xl' />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p className='cursor-pointer' onClick={() => dispatch(removeCart(item._id))}>x</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }
      </div>
      <div id="cart-bottom" className='flex md:flex-row flex-col justify-between gap-5 mt-10 md:p-5 p-0 w-full'>
        <div id="cart-total left-Part" className='md:w-1/2 w-full'>
          <h2 className='font-medium text-2xl' id='title'>Cart total</h2>
          <div className='mt-2 text-gray-600' id='cart-total-details'>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100 p-1'>
              <h2 className='font-medium text-base'>Sub Total</h2>
              <p className='font-medium text-base'>${totalPrice}</p>
            </div>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100 p-1'>
              <h2 className='font-medium text-base'>Delivery fees</h2>
              <p className='font-medium text-base'>${totalPrice === 0 ? 0 : 2 }</p>
            </div>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100 p-1'>
              <h2 className='font-medium text-base'>Total</h2>
              <p className='font-medium text-base'>${totalPrice === 0 ? 0 : totalPrice + 2}</p>
            </div>
          </div>
          <button className='bg-red-600 text-white px-5 py-2.5 mt-2 text-sm rounded-sm' onClick={() => navigate('/placeOrder')}>Proceed to Checkout</button>
        </div>
        <div id="cart-promoCode right-part">
          <div>
            <h2 className='font-medium text-xl'>If you have a promo Code apply it</h2>
            <div id='cart-promocode' className='mt-3 flex items-center gap-2'>
              <input type="text" placeholder='Enter a promo code' className='border-2 border-slate-200 outline-none p-2 rounded-sm' />
              <button className='bg-blue-500 py-2 px-4 text-white font-medium rounded-sm'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;