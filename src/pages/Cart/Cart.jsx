/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const { cartItems, food_list, removeFromCart , getTotalCartAmount } = useContext(StoreContext);


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* To add items in the cart */}

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
              
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>

              </>

            )
          }
        })}
      </div>

      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className='cart-total-money'>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delievery Fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 30}</p>
              </div>
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}</b>
              </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <p>If you have a promo code , Enter here </p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart