import React, { useState } from "react";
import list from '../data'
import Cards from "./card";
import "../Style/store.css";

const Store = ({ handleClick }) => {
  
  return (
    <body className="home">
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    </body>
  );
};

export default Store;