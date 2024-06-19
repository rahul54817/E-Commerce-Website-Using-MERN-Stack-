import React from "react";

import Features from "../Components/Features";
import Products1 from "../Components/Products1";
import Offers from "../Components/Offers";
import Products2 from "../Components/Products2";
import Vender from "../Components/Vender";
import Subscribe from "../Components/Subscribe";


const Home = () => {
  return (
    <div>
      
      <Features />
      <Offers />
      <Products1 />
      <Subscribe />
      <Products2 />
      <Vender />
    </div>
  );
};

export default Home;
