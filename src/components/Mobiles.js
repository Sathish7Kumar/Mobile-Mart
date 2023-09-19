import React, { useContext, useEffect, useState } from "react";
import { MobileContext } from "../App";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Mobiles = () => {
  const context = useContext(MobileContext);
  const nav = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getData = () => {
    if (context.data.length > 0) {
      setProducts(context.data);
    } else {
      nav("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
    <div className="search-input">
        <input
          className="searchBar"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search Products...."
        />
        </div>
      <div className="container">
        {/* <h2>Mobiles</h2> */}
        {filteredProducts.map((e, i) => {
          return (
            <div className="mobile-wrapper" key={i}>
              <div className="mobile-details">
                <h4>{e.name}</h4>
                <div className="mobile-image">
                    <img src={e.image} alt={e.name} />
                </div>
                <div className="mobile-price"> Price:${e.price} </div>
                <div className="mobile-desc">Specifications : {e.desc}</div>
                <button
                  className="mobile-order-button"
                  onClick={() => {
                    context.cart.push(e);
                    context.setCartValue(context.cart.length);
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </>
  );
};

export default Mobiles;
