import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/cart/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {
  const { addToCart } = useContext(CartContext);
  const notify = () => toast.success("Item added successfully!");
  return (
    <div
      className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pb-2"
      key={props.id}
    >
      <div className="products">
        <div className="product">
          <Link
            className="woocommerce-LoopProduct-link"
            to={`/product/${props.id}`}
          >
            <img src={props.image} alt="image" />
            <h2>{props.name}</h2>
            {/* <p>{props.category}</p> 
            <p>{props.Product_Category}</p>  */}
            <div className="product-description-short"></div>
          </Link>
          {/* <a
            onClick={() => {addToCart(props);
                notify();
            }}
            className="button product_type_simple"
          >
            <i style={{color:"white"}}>
            Add To Cart</i>
          </a> */}

          <Link to={`/product/${props.id}`} className="button product_type_simple">
            <i style={{ color: "white" }}>View</i>
          </Link>
          <ToastContainer position="bottom-right" closeOnClick="false" autoClose={10} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
