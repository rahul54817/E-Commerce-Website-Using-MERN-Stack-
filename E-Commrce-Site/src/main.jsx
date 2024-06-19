import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Contact from "./Pages/Contact";
import ShopingCart from "./Pages/ShopingCart";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

import Layout from "./Pages/Layout.jsx";
import CheckOut from "./Pages/CheckOut.jsx";
import Shopdetails from "./Pages/ShopDetails.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import AddProducts from "./Components/Products/AddProducts.jsx";
import Shops from "./Pages/Shop.jsx";
import ProductCart from "./Components/ProductCart.jsx";
import UserProfile from "./Pages/UserProfile.jsx";
import FilteredProducts from "./Pages/FilteredProducts.jsx";
import UserOrders from "./Pages/UserOrders.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="pages/cart" element={<ShopingCart />} />
      <Route path="pages/checkout" element={<CheckOut />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
      <Route path="product-details" element={<ProductDetails />} />
      <Route path="add-product" element={<AddProducts />} />
      <Route path="shop/:page" element={<Shops />} />
      <Route path="shop" element={<Shops />} />
      <Route path="cart" element={<ProductCart />} />
      <Route path="user" element={<UserProfile />} />
      <Route path="product-detail" element={<Shopdetails />} />
      <Route path="category/:category" element={<FilteredProducts />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="orders" element={<UserOrders />} />

     
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>
);
