import React, { useEffect, useState } from "react";

const Features = () => {
  const [products, setProducts] = useState(() => {
    let locaData = localStorage.getItem("products");
    if (locaData != null) {
      return JSON.parse(locaData);
    } else {
      return [];
    }
  });
  const getTotleProduct = (category) => {
    let total = products.filter((product) => {
      return product.product_category === category;
    });
    return total.length;
  };
  const [totalShirts, setTotalShirts] = useState();
  const [totalJeans, setTotalJeans] = useState(() => {
    getTotleProduct("jeans");
  });
  const [totalKids, setTotalKids] = useState(() => {
    getTotleProduct("kids");
  });
  const [totalElectronics, setTotalElectronics] = useState(() => {
    getTotleProduct("electronic");
  });
  const [totalTshirts, setTotalTshirts] = useState(() => {
    getTotleProduct("t-shirts");
  });
  const [totalWomens, setTotalWomens] = useState(() => {
    getTotleProduct("womens");
  });
  useEffect(() => {
    setTotalShirts(getTotleProduct("shirts"));
    setTotalJeans(getTotleProduct("jeans"));
    setTotalKids(getTotleProduct("kids"));
    setTotalElectronics(getTotleProduct("electronic"));
    setTotalWomens(getTotleProduct("womens"));
    setTotalTshirts(getTotleProduct("t-shirts"));
    
  }, []);

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <h3 className="text-right">{totalShirts} Products</h3>

            <a href className="cat-img position-relative overflow-hidden mb-3">
              <img
                className="img-fluid"
                src="https://clipart-library.com/image_gallery2/Dress-Shirt-Free-Download-PNG.png"
                style={{
                  width: "35rem",
                  height: "25rem",
                }}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Shirts</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
          <h3 className="text-right">{totalJeans} Products</h3>
            <a href className="cat-img position-relative overflow-hidden mb-3">
              <img
                className="img-fluid"
                src="https://rukminim2.flixcart.com/image/612/612/jwi518w0/jean/k/n/6/28-combo3-501-502-503-clubrocks-original-imafeevahghzjb9t.jpeg?q=70"
                style={{
                  width: "35rem",
                  height: "25rem",
                }}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Jeans </h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
          <h3 className="text-right">{totalKids} Products</h3>
        
            <a href className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src="https://rukminim2.flixcart.com/image/612/612/l2xmqvk0/kids-apparel-combo/x/p/9/12-13-years-champian-starshort-set-fasla-original-image6f6vrtc6vhk.jpeg?q=70" alt 
                style={{
                  width: "35rem",
                  height: "25rem",
                }}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Kids</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
          <h3 className="text-right">{totalWomens} Products</h3>
            <a href className="cat-img position-relative overflow-hidden mb-3">
              <img
                className="img-fluid"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/5/d/w/free-combo-1742-2-1742-5-anand-sarees-unstitched-original-imagxgagmvwqj98h.jpeg?q=70"
                style={{
                  width: "35rem",
                  height: "25rem",
                }}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Womens Collectios</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
          <h3 className="text-right"> {totalElectronics} Products</h3>
            
            <a href className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src="https://rukminim2.flixcart.com/image/612/612/xif0q/laptop-accessories-combo/4/8/8/alive-set-of-5-keyboard-and-mouse-combo-with-usb-hub-c-type-otg-original-imahyfjcggfg2hrz.jpeg?q=70" 
              style={{
                  width: "35rem",
                  height: "25rem",
                }}
              alt />
            </a>
            <h5 className="font-weight-semi-bold m-0">Eletronics</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
          <h3 className="text-right"> {totalTshirts} Products</h3>
            <a href className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/k/d/l-109-combo-men-t-shirt-printed-vanghee-original-imagqhafu4snzmmg.jpeg?q=70" alt
              style={{
                  width: "35rem",
                  height: "25rem",
                }} />
            </a>
            <h5 className="font-weight-semi-bold m-0">T-Shirts</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
