import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products1 = () => {
  const [products, setProdcts] = useState([]);

  const getAllProducts = () => {
    axios.get("http://localhost:8080/api/product/get_products").then((res) => {
      console.log(res.data.products);
      setProdcts(res.data.products);
    });
  };
  useEffect(() => {
    getAllProducts();
  }, [0]);

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Trandy Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3 d-flex ">
        {products?.map((product, index) => {
          return (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="card product-item border-0 mb-4"
                style={{
                  width: "20rem",
                  height: "30rem",
                }}
              >
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid "
                    src={`http://localhost:8080/${product.image}`}
                    alt
                    style={{
                      width: "20rem",
                      height: "25rem",
                    }}
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">{product.name}</h6>
                  <div className="d-flex justify-content-center">
                    <h6> ₹ {product.price}</h6>
                    <h6 className="text-muted ml-2">
                      <del> ₹ {product.mrp}</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <Link
                    to="/product-detail"
                    className="btn btn-sm text-dark p-0"
                    onClick={() => goToDetails(product._id)}
                  >
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </Link>

                  <button className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products1;
