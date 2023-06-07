import React, { useContext, useState, useEffect } from "react";
import CartContext from "./CartContext";
import { Formik, Form, Field, FieldArray } from 'formik';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom"

const Carts = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  return (<>
    <h1 className="special-heading sub-title"><span>Cart Items</span></h1>
    <Formik
      enableReinitialize="true"
      initialValues={cartItems}
      onSubmit={(values) =>
        emailjs
          .send(
            "service_xzfwhe3",
            "template_i593mxg",
            values,
            "dodAVOQTHU3ApPuw4"
          )
          .then(
            (result) => {
              toast.success("Enquiry Submitted Successfully!");
            },
            (error) => {
              toast.error("Failed to send Enquiry!");
            }
          )
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="data"
            render={arrayHelpers => (
              <div className="container px-xl-50">
                {values && values.length > 0 ? (
                  values.map((item, index) => (
                    <div className="row  woocommerce-message" key={index} >
                      <div className="col-md-3 ">
                        <img
                          width="150"
                          height="150"
                          src={item.image}
                          className=""
                          alt="product-image"
                        />
                      </div>
                      <div className="col-md-3 ">
                        <b>{item.name}</b>
                        <p>{item.description}</p>
                      </div>
                      <div className="col-md-3 ">
                        <label>Quantity</label>
                        <input type="number" name="quantity" />
                      </div>
                      <div className="col-md-3 ">
                        <i className="fa fa-trash" style={{ color: "red" }} onClick={() => removeItem(item.id)}></i>
                      </div>
                    </div>
                  ))
                ) : (navigate('/product')
                )}
                <button
                  type="submit"
                  className="button product_type_simple add_to_cart_button"
                  style={{cursor:"pointer"}}
                >
                  Send Enquiry
                </button>
                <ToastContainer position="top-right" closeOnClick="false" autoClose={10} />
              </div>
            )}
          />
        </Form>
      )}
    />
  </>
  )
}
export default Carts