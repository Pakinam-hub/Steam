import React, {useState } from "react";
import Navbar from "./Components/navbar";
import Store from "./Components/store";
import Cart from "./Components/cart";
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import Support from "./Components/Support.js";
import Login from "./Components/Login.js";
import Signup from "./Components/signup.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show? <h2></h2>:<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
      

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Store" element={<Store handleClick={handleClick} /> } />
          <Route path="/Support" element={<Support />} />
          <Route path="/About" element={<About />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>



    </React.Fragment>
  );
};

export default App;
