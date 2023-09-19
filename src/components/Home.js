import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import mobileimg from './mobile-img-cart.avif'

const Home = () => {

    const nav = useNavigate()

    const handleClick = (e) =>{
        e.preventDefault()
        nav('/cart')
    }
  return (
    <div className="home-wrapper">
      <div className="item-wrapper">
        <Link to="mobiles">
        <img
          src={mobileimg}
          className="item-image"
        ></img>
        <div className="item-name">Click here to see all Mobiles</div>
        </Link>
        <button onClick={handleClick} className="cart-button"> <FaShoppingCart/>  Go to Cart</button>
      </div>
    </div>
  );
};

export default Home;
