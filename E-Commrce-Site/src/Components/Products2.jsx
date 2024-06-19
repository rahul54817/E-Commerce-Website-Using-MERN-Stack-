import React from 'react'
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Products2 = () => {
  const [products, setProdcts] = useState([]);
  useEffect(() => {
    let productList = localStorage.getItem("products");
    if (productList) {
      setProdcts(JSON.parse(productList));
    }
  }, []);
  return (
   <div className="container-fluid pt-5">
  <div className="text-center mb-4">
    <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
  </div>
  <div className="row px-xl-5 pb-3">
  {products?.slice(8,16).map((product) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
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
                          src={product.product_img}
                          alt
                          style={{
                            width: "20rem",
                            height: "25rem",
                          }}
                        />
                      </div>
                      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">
                          {product.product_name}
                        </h6>
                        <div className="d-flex justify-content-center">
                          <h6> ₹ {product.product_price}</h6>
                          <h6 className="text-muted ml-2">
                            <del> ₹ {product.product_mrp}</del>
                          </h6>
                        </div>
                      </div>
                      <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link
                          to="/product-detail"
                          className="btn btn-sm text-dark p-0"
                          onClick={() => goToDetails(product.product_id)}
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
    {/* <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-1.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-2.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-3.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-4.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-5.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-6.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-7.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-8.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div> */}
  </div>
</div>

    
  )
}

export default Products2
