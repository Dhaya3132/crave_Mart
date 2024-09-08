import React from 'react';
import { totalAmount } from '../../store/cartSlice';
import {useSelector} from 'react-redux'

const PlaceOrder = () => {
  const totalPrice = useSelector(totalAmount)
  return (
    <div id='place-order' className='flex md:flex-row flex-col justify-between items-start gap-10 md:p-10 p-3'>
      <div id="place-order-left" className='md:w-1/2 w-full flex flex-col gap-2'>
        <p className='title font-semibold text-2xl'>Delivery Information</p>
        <div id="input-fields" className='mt-4'>
          <input type="text" placeholder='Enter your First Name' />
          <input type="text" placeholder='Enter your Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div id="input-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div id="input-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div id="place-order-right" className='flex-1 md:w-64 w-full'>
        <div id="cart-total left-Part" className='w-full'>
          <h2 className='font-medium text-2xl' id='title'>Cart total</h2>
          <div className='mt-2 text-gray-600' id='cart-total-details'>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100 p-1'>
              <h2 className='font-medium text-base'>Sub Total</h2>
              <p className='font-medium text-base'>${totalPrice}</p>
            </div>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100 p-1'>
              <h2 className='font-medium text-base'>Delivery fees</h2>
              <p className='font-medium text-base'>${2}</p>
            </div>
            <div id="cart-total-details" className='flex justify-between border-b-2 border-slate-100 p-1'>
              <h2 className='font-medium text-base'>Total</h2>
              <p className='font-medium text-base'>${totalPrice + 2}</p>
            </div>
          </div>
          <button className='bg-blue-500 text-white px-5 py-2 mt-2 text-sm rounded-sm'>Proceed to Payment</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder