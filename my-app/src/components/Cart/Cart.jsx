import React from 'react'
import './Cart.css'
import { useCart } from "react-use-cart";
import EmptyCart from '../EmptyCart/EmptyCart';

const Cart = () => {
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();
      if (isEmpty) return <EmptyCart/>;
  return (
    <>
    <div id="cart" class>
    <div class="parent">
      <div class = "items" >
      <p>{!isEmpty && <button className='btn btn-primary' onClick={emptyCart}>Empty cart</button>}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
           <h2>{item.quantity} x {item.title} &nbsp; 
            <button className='btn btn-primary'
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className='btn btn-primary'
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button  className='btn btn-primary' onClick={() => removeItem(item.id)}>Remove</button></h2>
          </li>
        ))}
      </ul>
      </div>
      <div class="totalcart">
    <div class="div1"><h1>Cart</h1></div>
    <div class="div2"><h1>total price: {cartTotal}</h1></div>
    <div class="div3"><button className='btn btn-primary'>checkout</button></div>
      </div>
      </div>
      </div>
    </>
  )
  
}

export default Cart