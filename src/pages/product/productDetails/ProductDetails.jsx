import React, { useState, useContext } from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import { ProductData } from "../../../constants/ProductData";
import { useParams } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import CartContext from "../../../context/cart/CartContext";
import StickyForm from "../../../components/common/StickyForm";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);

  const [productData, setProductData] = useState(ProductData);
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  const id = useParams();
  const Detail = ProductData.filter((x) => x.id == id.id);
  const Product = Detail[0];

  return (<>
    <BreadCrumb label="Product" />
    <section className="ls s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60 c-gutter-30">
      <div className="container px-xl-50">
        <div className="row">
          <main className="col-lg-12 col-xl-12">
            <div className="product type-product ">
              <div className="images">
                <figure>
                  <div className='w3-card-4'>
                    <a>
                      <img
                        src={Product.image}
                        alt=""
                        data-caption=""
                        data-src={Product.image}
                        data-large_image={Product.image}
                        data-large_image_width="1000"
                        data-large_image_height="1000"
                        style={{ borderRadius: '10px' }}
                        className="img-thumbnail"
                      />
                    </a>
                  </div>
                </figure>
              </div>
              <div className="summary entry-summary text-left">
                <h1 className="product_title entry-title">{Product.name}</h1>
                <div className="product_meta">
                  <table class="table table-sm" style={{ listStyleType: 'none' }}>
                    <tbody>
                      <tr>
                        <td>Product ID</td>
                        <td>{Product.Product_Category}</td>
                      </tr>
                      <tr>
                        <td> Product Code </td>
                        <td>{Product.product_code}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td colspan="2">{Product.category}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p><b>Uses</b>&nbsp;&nbsp;{Product.uses}</p>
                  <b>{Product.heading}</b>
                  <p>{Product.description}</p>
                </div>
                <form>
                  <div className="single_variation_wrap">
                    <div className="">
                      <div className="d-flex pt-2">
                        {/* <a
                          onClick={() => addToCart(Product)}
                          className="button product_type_simple"
                          style={{
                            minWidth: "55px",
                            fontSize: "20px",
                            backgroundColor: "#eff5f2",
                            border: "none",
                            borderRadius: "0",
                            color: "black",
                          }}
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a> */}
                        <a
                          href="/contact"
                          className="button product_type_simple btn btn-small"
                          style={{
                            // minWidth: "55px",
                            // fontSize: "20px",
                             backgroundColor: "none",
                             border: "#07322b",
                            // borderRadius: "0",
                            // color: "black",
                          }}
                        >
                          <i class="fas fa-envelope"></i> 
                         <span className="ms-5"> Enquire Now</span>
                        </a>
                      </div>
                    </div>
                    <br />
                  </div>
                </form>
              </div>
              {/* <Tabs description={Product.description} /> */}
            </div>
          </main>
        </div>
          <div className="row">
          <h2 className="special-heading text-center">
            Related Products
          </h2>
          <h6 className="special-heading sub-title text-center">
            <span></span>
          </h6>
          <div className="divider-40 hidden-below-md"></div>
          <div className="divider-30 hidden-above-md"></div>
          {productData
            .filter((product) => product.category === Product.category && product.id !== Product.id)
            .map((ProductData) => (
              <ProductCard
                name={ProductData.name}
                image={ProductData.image}
                id={ProductData.id}
                description={ProductData.description}
              />
            ))}
        </div>        
      </div>
    </section>
    <StickyForm  />
  </>
  );
};

export default ProductDetails;
