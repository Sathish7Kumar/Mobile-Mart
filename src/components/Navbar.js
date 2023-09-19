import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { MobileContext } from "../App";

const Navbar = () => {

    const context = useContext(MobileContext)

  return (
    <div className="nav-wrapper">
      <div className="nav-title">
        <Link to="/">
          <span className="nav-icon">
            <FaMobileAlt />
          </span>{" "}
          <span className="nav-link-name">Mobile-Mart</span>
        </Link>
      </div>
      <div className="nav-cart">
        <Link to="cart">
          {" "}
          <FaShoppingCart /> {context.cartValue}
        </Link>
        {/* <span className="count">{0}</span> */}
      </div>
    </div>
  );
};

export default Navbar;
