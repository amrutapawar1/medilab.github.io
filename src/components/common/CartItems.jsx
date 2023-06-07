import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

const CartItems = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <div className="dropdown">
      <a
        className="dropdown-toggle "
        type="button"
        id="cart"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-shopping-bag"></i>
        {cartItems.length > 0 && (
          <span className="badge bg-maincolor2">{cartItems.length}</span>
        )}
      </a>
      {cartItems.length === 0 ? (
        <>
          <span className="badge bg-maincolor2">0</span>
          <div className="dropdown-menu" aria-labelledby="dropdown">
            <div className="widget woocommerce widget_shopping_cart">
              <div className="widget_shopping_cart_content">
                <span>Cart is Empty !</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="dropdown-menu" aria-labelledby="cart">
            <div className="widget woocommerce widget_shopping_cart">
              <div className="widget_shopping_cart_content">
                <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                  {cartItems.map((item) => (
                    <li className="woocommerce-mini-cart-item mini_cart_item" key={item.id}>
                      <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt="" />
                        {item.name}
                      </Link>
                      <i
                        className=" fa fa-trash "
                        aria-hidden="true"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(item.id);
                        }}
                        style={{ fontSize: "12px", color: 'red', marginLeft: "" }}
                      ></i>
                    </li>
                  ))}
                </ul>
                <p className="woocommerce-mini-cart__buttons buttons d-flex" style={{ marginTop: "-30px" }}>
                  <Link to="cart" className="button wc-forward" style={{ fontSize: '11px', minWidth: '100px', margin: '0' }}>
                    View cart
                  </Link>
                  <Link to="/contact" className="button wc-forward" style={{ fontSize: '13px', minWidth: '100px', marginLeft: '20px' }}>
                    Send Enquiry
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default CartItems;