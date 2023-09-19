import React, { useContext, useEffect, useState } from "react";
import { MobileContext } from "../App";
import { useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";


const Cart = () => {
  const context = useContext(MobileContext);
  const [totalPrice,setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = context.cart.reduce((sum, product) => sum + product.price, 0);
    setTotalPrice(newTotalPrice);
  }, [context.cart]);


const handleClick = (e) => {
    const indexToRemove = context.cart.findIndex((product) => product === e);
  
    if (indexToRemove !== -1) {
      const updatedCart = [...context.cart];
      updatedCart.splice(indexToRemove, 1);
  
      context.setCart(updatedCart);
      context.setCartValue(updatedCart.length);
    }
  };

  const nav = useNavigate();

  const backMobiles = (e) => {
    e.preventDefault();
    nav("/mobiles");
  };

  const clearButton = (e) => {
    e.preventDefault();
    context.setCart([]);
    context.setCartValue(0);
  };

  const payButton = (e) => {
    context.setCart([]);
    context.setCartValue(0);
    e.preventDefault();
    nav("/");
    alert("Your Order will reach you soon , Kindly pay using Cash on Delivery Payment Mode")
  };

  const clearEnable = context.cart.length === 0;


  return (
    <>
      <div className="cart-wrapper">
        <div className="cart-option-buttons">
          <button className="cart-option-page back-page" onClick={backMobiles}>
          ← Mobile Page
          </button>
          <button
            className="cart-option-page clear-cart"
            onClick={clearButton}
            disabled={clearEnable}
          >
            Clear Cart
          </button>
        </div>

        {context.cart.length ? (
          <>
            <h2 className="order-caption">You have Ordered ↓	 </h2>
            <div className="cart-section">{
            context.cart.map((e, i) => {
              return (
                <div className="cart-item-wrapper" key={i}>
                  <div className="cart-details">
                    <h4>{e.name}</h4>
                    <div className="mobile-price"> $ {e.price}</div>
                    {/* <div className="mobile-desc">{e.desc}</div> */}
                    <div className="rmv-div">
                    <button className="remove-button" onClick={()=>handleClick(e)} >
                      <BiTrash color="red" fontSize={26}/>
                    </button>
                    </div>
                  </div>
                  <div className="mobile-image-cart">
                    <img src={e.image} alt={e.name} height={100} width={100} />
                  </div>
                </div>
              );
            })
            }
            </div>
            <div className="cart-price-section" >
                <div className="total-price">Total Price : $ {totalPrice} <span style={{color:"grey",fontSize:"16px",fontFamily:'times new roman'}}>( <span style={{color:"red"}}>*</span> including all taxes ) </span> </div>
                <div className="btn-order-proceed">
                <button className="proceed-button" onClick={payButton} >Proceed to Pay</button>
                </div>
            </div>
          </>
        ) : (
          <h2 className="order-caption">Your Cart is Empty</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
