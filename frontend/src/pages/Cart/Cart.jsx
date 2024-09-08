import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useSelector, useDispatch } from "react-redux";
import {removeCart} from '../../store/cartSlice';

const Cart = () => {
  const { food_list } = useContext(StoreContext);
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItem);
  return (
    <div id='cart'>
      <div id="cart-item">
        <div id="cart-title" className='grid grid-cols-6 gap-5 items-center mb-2'>
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
                  <div key={index} className='grid grid-cols-6 gap-5 items-center my-7 font-normal text-sm' >
                    <img src={item.image} alt="item_image" className='w-24 h-24' />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p className='cursor-pointer' onClick={()=> dispatch(removeCart(item._id)) }>x</p>
                  </div>
                  <hr />
                </div>

              )
            }
          })
        }
      </div>
      <div id="cart-bottom" className='flex justify-between gap-10 mt-10 p-10'>
        <div id="cart-total" className='flex-1'>
          <h2 className='font-medium text-2xl'>Cart total</h2>
          <div className='mt-2 text-gray-600'>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100'>
              <h2 className='font-medium text-base'>Sub Total</h2>
              <p>{2}</p>
            </div>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100'>
              <h2>Delivery fees</h2>
              <p>{2}</p>
            </div>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100'>
              <h2>Total</h2>
              <p>{0}</p>
            </div>
          </div>
          <button className='bg-red-800 text-white px-5 py-2'>Proceed to Checkout</button>
        </div>
        <div id="cart-promoCode">
          <div>
            <h2>If you have a promo Code apply it</h2>
            <div id='cart-promocode'>
              <input type="text" placeholder='Enter a promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart