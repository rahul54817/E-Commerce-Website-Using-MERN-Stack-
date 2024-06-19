import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [myCart, setMyCart] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true)

  const navigate = useNavigate();

  // get carts added by user
  const getCarts = () => {
    axios
      .post("http://localhost:8080/api/cart/get_all_carts", {
        user_id: localStorage.getItem("user_id"),
      })
      .then((response) => {
        // console.log(response.data.carts)
        setMyCart(response.data.carts);
        if(myCart.length > 0) {
          setIsDisabled(false)
        }
        calculate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // clear the cart
  const clearCart = () => {
    let user_id = localStorage.getItem('user_id')
    axios
    .post("http://localhost:8080/api/cart/clear_cart/", {user_id: user_id})
    .then((res)=>{
      if(res.data.result === true){
        console.log(res.data.message)
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  // place order and after the order has been successfully the clear the cart
  const placeOrder = () => {
    const data = {
      user_id: localStorage.getItem("user_id"),
      shipping_cost: shipping,
      sub_total: subtotal,
      total_cost: total,
    };

    axios
      .post("http://localhost:8080/api/order/place_order", data,{
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then((response) => {
        if (response.data.result === true) {
          console.log(response.data.message);
   
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const calculate = () => {
    let _subtotal = 0;
    myCart?.map((item) => {
      _subtotal = _subtotal + item.total;
    });

    setShipping(myCart.length * 30);

    setSubTotal(_subtotal);
    let _total = subtotal + shipping;
    setTotal(_total);
  };

  useEffect(() => {
    getCarts();
  }, []);

  useEffect(() => {
    calculate();
  }, [getCarts]);

  
  useEffect(()=>{
    if(myCart.length>0) setIsDisabled(false)
    else setIsDisabled(true)
  },[myCart])

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <div className="mb-4">
            <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" placeholder="Doe" />
              </div>
              <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="example@email.com"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="+123 456 789"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 1</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 2</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Country</label>
                <select className="custom-select">
                  <option selected>United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input className="form-control" type="text" placeholder={123} />
              </div>
              <div className="col-md-12 form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="newaccount"
                  />
                  <label className="custom-control-label" htmlFor="newaccount">
                    Create an account
                  </label>
                </div>
              </div>
              <div className="col-md-12 form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="shipto"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="shipto"
                    data-toggle="collapse"
                    data-target="#shipping-address"
                  >
                    Ship to different address
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse mb-4" id="shipping-address">
            <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" placeholder="Doe" />
              </div>
              <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="example@email.com"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="+123 456 789"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 1</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 2</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Country</label>
                <select className="custom-select">
                  <option selected>United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input className="form-control" type="text" placeholder={123} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Order Total</h4>
            </div>
            <div className="card-body">
              <h5 className="font-weight-medium mb-3">Products</h5>

              {myCart?.map((cart, index) => {
                return (
                  <div key={index} className="d-flex justify-content-between">
                    <p>{cart.product_name}</p>
                    <p>₹ {cart.price * cart.quantity}</p>
                  </div>
                );
              })}

              <hr className="mt-0" />
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium"> ₹ {subtotal}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium"> ₹ {shipping}</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold"> ₹ {total}</h5>
              </div>
            </div>
          </div>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Payment</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="paypal"
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="directcheck"
                  />
                  <label className="custom-control-label" htmlFor="directcheck">
                    Direct Check
                  </label>
                </div>
              </div>
              <div className>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="banktransfer"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="banktransfer"
                  >
                    Bank Transfer
                  </label>
                </div>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <button
                disabled =  {isDisabled}
                className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
