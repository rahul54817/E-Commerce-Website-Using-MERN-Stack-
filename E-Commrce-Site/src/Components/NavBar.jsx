import React from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Crousal from "./Crousal";

const NavBar = () => {
 const navigate = useNavigate();
 const location = useLocation();
  const logOutHandler =() =>{
    localStorage.removeItem("user_id");
    navigate('/')


  
  }
  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 overflow-hidden"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav
            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: 410 }}
            >
              <NavLink
                to="category/shirts"
                className="nav-item nav-link"
                style={{ cursor: "pointer" }}
              >
                Shirts
              </NavLink>
              <NavLink
                to="category/jeans"
                className="nav-item nav-link"
                style={{ cursor: "pointer" }}
              >
                Jeans
              </NavLink>
              <NavLink
                to="category/t-shirts"
                className="nav-item nav-link"
                style={{ cursor: "pointer" }}
              >
                T-Shirts
              </NavLink>
              <NavLink
                to="category/womens"
                className="nav-item nav-link"
                style={{ cursor: "pointer" }}
              >
                Womens
              </NavLink>
              <NavLink
                to="category/kids"
                className="nav-item nav-link"
                style={{ cursor: "pointer" }}
              >
                Kids
              </NavLink>
              <NavLink
                to="category/electronic"
                className="nav-item nav-link"
                style={{ cursor: "pointer" }}
              >
                Electronics
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}
                <NavLink to="/shop" className="nav-item nav-link">
                  Shop
                </NavLink>
                {/* <a href="shop.html" className="nav-item nav-link">Shop</a> */}

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/pages/cart" className="dropdown-item">
                      Shoping Cart
                    </NavLink>

                    <NavLink to="/pages/checkout" className="dropdown-item">
                      Checkout
                    </NavLink>

                    <NavLink to="/orders" className="dropdown-item">
                      My Orders
                    </NavLink>
                    {/*                     
                    <a href="checkout.html" className="dropdown-item">
                      Checkout
                    </a> */}
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
                {/* <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a> */}
              </div>
              <div className="navbar-nav ml-auto py-0">
                {localStorage.getItem("user_id") ? (
                  <>
                    <NavLink to="/add-product" className="nav-item nav-link">
                      Add Product
                    </NavLink>
                    <a className="nav-item nav-link"
                    onClick={logOutHandler}
                    style={{cursor: 'pointer'}}
                    >
                      Logout
                    </a>
                  </>
                ) : (
                  <>
                    <NavLink to="/login" className="nav-item nav-link">
                      Login
                    </NavLink>
                    <NavLink to="/register" className="nav-item nav-link">
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </nav>
          {}
          
          {location.pathname == "/"  &&  <Crousal /> }
          {location.pathname === "/shop"  &&  <Crousal /> }
         
        </div>
      </div>
    </div>
  );
};

export default NavBar;
