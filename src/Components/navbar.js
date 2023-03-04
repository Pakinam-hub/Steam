import React from "react";
import cart from './shopping-cart.png';
import '../Style/navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Navbar = ({ setShow, size }) => {

    return (
        <nav>
            <div className="nav_box">
            <Link to="/" className="site-title">
        <h1>STEAM</h1>
      </Link>
      <ul>
        <CustomLink to="/Store">STORE</CustomLink>
        <CustomLink to="/support">SUPPORT</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
   
      </ul>

   
                <span className="game_store" onClick={() => setShow(true)}>close cart</span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span><img width="20 px" src={cart} /></span>
                    <span>{size}</span>
                </div>
<ul>                <CustomLink to="/Login" className="login">LOGIN</CustomLink>
</ul>

                
            </div>
        </nav>
    );
};
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Navbar;