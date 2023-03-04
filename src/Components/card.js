import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price} EGP</p>
        <button onClick={() => {handleClick(item);alert("Item Added Successfully to Cart.");}}>Add to Cart</button>
      
      </div>
    </div>
  );
};

export default Cards;