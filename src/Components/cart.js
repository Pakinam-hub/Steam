import React, { useState, useEffect } from "react";
import '../Style/cart.css';
const Cart = ({ setShow,cart, setCart}) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
      
      <article>

        {cart.map((item) => (
          
          <div className="cart_box" key={item.id}>
            
            <div className="cart_img">
              <img src={item.img} alt="" />
            </div>
            <div className="cart_text">
              <p>{item.title}</p>
            </div>
            <div>
              <span>{item.price}£</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        
        <div className="total">
          <span>Total</span>
          <span>{price} EGP </span>
        </div>
        
      </article>
    );

};

export default Cart;