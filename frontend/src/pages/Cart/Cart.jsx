import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useSelector } from "react-redux";

const Cart = () => {
  const {food_list} = useContext(StoreContext);
  const cartItems = useSelector(state => state.cart.cartItem);
  return (
    <div id='cart'>
      <div id="cart-item">
        <div id="cart-title">
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
                <div key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p>x</p>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Cart