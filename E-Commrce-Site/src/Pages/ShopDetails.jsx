import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Shopdetails() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  // get product by ID
  const getProductById = () => {
    const data = {
      product_id: JSON.parse(localStorage.getItem("product_id")),
    };

    axios
      .post("http://localhost:8080/api/product/get_product_by_id", data)
      .then((res) => {
        console.log(res);
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getProductById()
  },[0])

  // adding product in to Cart
  const addToCart = () => {
    
    if(!localStorage.getItem("user_id")){
      navigate('/login')
    }


    const data = {
      user_id : localStorage.getItem("user_id"),
      product_id : JSON.parse(localStorage.getItem("product_id")),
      quantity : count,
    }
    console.log(data);

    axios.post('http://localhost:8080/api/cart/add_to_cart', data)
    .then((res)=>{
      console.log(res.data.message);
      navigate('/pages/cart')
    })
 
       
    }
  

  const addQuantity = () => {
    setCount(count + 1);
  };
  const removeQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5">
        <div className="col-lg-5 pb-5">
          <div
            id="product-carousel"
            className="carousel slide "
            data-ride="carousel"
            style={{
              width: "500px",
              height: "650px",
              marginLeft: "100px",
            }}
          >
            <div className="carousel-inner border">
              <div className="carousel-item active">
                <img
                  className="w-100 h-100"
                  src={`http://localhost:8080/${product.image}`}
                  alt="Image"
                />
              </div>
            
            </div>
            <a
              className="carousel-control-prev"
              href="#product-carousel"
              data-slide="prev"
            >
              <i className="fa fa-2x fa-angle-left text-dark" />
            </a>
            <a
              className="carousel-control-next"
              href="#product-carousel"
              data-slide="next"
            >
              <i className="fa fa-2x fa-angle-right text-dark" />
            </a>
          </div>
        </div>
        <div className="col-lg-7 pb-5">
          <h3 className="font-weight-semi-bold">{product.name}</h3>
          <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star-half-alt" />
              <small className="far fa-star" />
            </div>
            <small className="pt-1">(50 Reviews)</small>
          </div>
          <h3 className="font-weight-semi-bold mb-4">
            $ {product.price}
          </h3>
          <p className="mb-4">
          {product.description}
           
          </p>
          <div className="d-flex mb-3">
            <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-1"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-1">
                  XS
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-2"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-2">
                  S
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-3"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-3">
                  M
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-4"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-4">
                  L
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-5"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-5">
                  XL
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex mb-4">
            <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-1"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-1">
                  Black
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-2"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-2">
                  White
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-3"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-3">
                  Red
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-4"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-4">
                  Blue
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-5"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-5">
                  Green
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center mb-4 pt-2">
            <div className="input-group quantity mr-3" style={{ width: 130 }}>
              <div className="input-group-btn">
                <button
                  className="btn btn-primary btn-minus"
                  onClick={removeQuantity}
                >
                  <i className="fa fa-minus" />
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary text-center"
                value={count}
              />
              <div className="input-group-btn">
                <button
                  className="btn btn-primary btn-plus"
                  onClick={addQuantity}
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <button className="btn btn-primary px-3"
             onClick={addToCart}
             >
              <i className="fa fa-shopping-cart mr-1" /> Add To Cart
            </button>
          </div>
          <div className="d-flex pt-2">
            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
            <div className="d-inline-flex">
              <a className="text-dark px-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-xl-5">
        <div className="col">
          <div className="nav nav-tabs justify-content-center border-secondary mb-4">
            <a
              className="nav-item nav-link active"
              data-toggle="tab"
              href="#tab-pane-1"
            >
              Description
            </a>
            <a
              className="nav-item nav-link"
              data-toggle="tab"
              href="#tab-pane-2"
            >
              Information
            </a>
            <a
              className="nav-item nav-link"
              data-toggle="tab"
              href="#tab-pane-3"
            >
              Reviews (0)
            </a>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-pane-1">
              <h4 className="mb-3">Product Description</h4>
              <p>
                {product.discription}
                 ipsum kasd eos consetetur at
                sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                sanctus eirmod takimata dolor ea invidunt.
              </p>
              <p>
                Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                tempor. Gubergren amet amet labore sadipscing clita clita diam
                clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                voluptua sit rebum. Ea erat sed et diam takimata sed justo.
                Magna takimata justo et amet magna et.
              </p>
            </div>
            <div className="tab-pane fade" id="tab-pane-2">
              <h4 className="mb-3">Additional Information</h4>
              <p>
                Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
                diam ea vero et dolore rebum, dolor rebum eirmod consetetur
                invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd
                ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
                Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut
                diam consetetur duo justo est, sit sanctus diam tempor aliquyam
                eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at
                sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                sanctus eirmod takimata dolor ea invidunt.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0">
                      Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                    </li>
                    <li className="list-group-item px-0">
                      Amet kasd gubergren sit sanctus et lorem eos sadipscing
                      at.
                    </li>
                    <li className="list-group-item px-0">
                      Duo amet accusam eirmod nonumy stet et et stet eirmod.
                    </li>
                    <li className="list-group-item px-0">
                      Takimata ea clita labore amet ipsum erat justo voluptua.
                      Nonumy.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0">
                      Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                    </li>
                    <li className="list-group-item px-0">
                      Amet kasd gubergren sit sanctus et lorem eos sadipscing
                      at.
                    </li>
                    <li className="list-group-item px-0">
                      Duo amet accusam eirmod nonumy stet et et stet eirmod.
                    </li>
                    <li className="list-group-item px-0">
                      Takimata ea clita labore amet ipsum erat justo voluptua.
                      Nonumy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-3">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="mb-4">
                    1 review for "Colorful Stylish Shirt"
                  </h4>
                  <div className="media mb-4">
                    <img
                      src="img/user.jpg"
                      alt="Image"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        John Doe
                        <small>
                          {" "}
                          - <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <div className="text-primary mb-2">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                        <i className="far fa-star" />
                      </div>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum
                        magna dolores sed sed eirmod ipsum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="mb-4">Leave a review</h4>
                  <small>
                    Your email address will not be published. Required fields
                    are marked *
                  </small>
                  <div className="d-flex my-3">
                    <p className="mb-0 mr-2">Your Rating * :</p>
                    <div className="text-primary">
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="message">Your Review *</label>
                      <textarea
                        id="message"
                        cols={30}
                        rows={5}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group mb-0">
                      <input
                        type="submit"
                        defaultValue="Leave Your Review"
                        className="btn btn-primary px-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopdetails;
