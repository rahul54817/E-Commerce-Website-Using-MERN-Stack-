import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopingCart = () => {
  const [subTotal, setSubTotle] = useState(0);
  const [total, setTotle] = useState(0);
  const [shipingCost, setShipingCost] = useState(0);
  const [myCarts, setMyCarts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true)
  const navigate = useNavigate();

  // get all carts from db 
  const getCarts = () => {
    axios
      .post("http://localhost:8080/api/cart/get_all_carts", {
        user_id: localStorage.getItem("user_id"),
      })
      .then((res) => {
        setMyCarts(res.data.carts);
        if(myCarts.length > 0){
          setIsDisabled(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

 // update the cart when quantity changes
  const updateCart = (data) => {

    axios
    .put("http://localhost:8080/api/cart/update_cart", data)
    .then((res) => {
      console.log(res.data.message);
      getCarts();
    })
    .catch((err) => {
      console.log(err);
    });

  }

  // quantity increment 
  const addQuantity = (count, id) => {
    if (count >= 1) {
      const data = {
        cart_id: id,
        quantity: count + 1,
      };

      updateCart(data);

    
    }
  };

  // quantity decrement
  const removeQuantity = (count, id) => {
    if (count > 1) {
      const data = {
        cart_id: id,
        quantity: count - 1,
      };
      updateCart(data);
    }
  };

  // remove cart from cart list
  const removeCart = (id) => {
    console.log("cart _  id  :  ", id);
    const data = {
      cart_id: id,
    };

    console.log(data);

    axios
      .post("http://localhost:8080/api/cart/delete_cart", data)
      .then((res) => {
        console.log(res.data.message);
        getCarts();
      })
      .then((res) => {
        console.log(res.data.message);
        getCarts();
      });
  };


  // calculate total price
  const calculateTotal = () => {
    let total = 0;
    myCarts.map((product) => {
      total = total + product.price * product.quantity;
    });
    setSubTotle(total);
  };

  useEffect(()=>{
    calculateTotal()
    setShipingCost(()=>{
      return myCarts.length * 30
    })
    setTotle(subTotal + shipingCost)
  },[updateCart])
  

  useEffect(()=>{
    if(myCarts.length>0) setIsDisabled(false)
    else setIsDisabled(true)
  },[myCarts])
  useEffect(() => {
    getCarts();
  }, [0]);

  
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {myCarts?.map((product) => {
                return (
                  <tr>
                    <td className="text-left">
                      <div className="row">
                        <div className="col-2 d-flex">
                          <img
                            src={`http://localhost:8080/${product.product_image}`}
                            alt
                            style={{
                              width: 35,
                              textAlign: "left",
                              marginRight: 25,
                            }}
                          />
                        </div>
                        <div className="col">{product.product_name}</div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div>
                        <p>₹ {product.price}</p>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: 100 }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick={() => {
                              removeQuantity(product.quantity, product._id);
                            }}
                          >
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={product.quantity}
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick={() => {
                              addQuantity(product.quantity, product._id);
                            }}
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle"> ₹ {product.total}</td>
                    <td className="align-middle">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          console.log(product._id);
                          removeCart(product._id);
                        }}
                      >
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form className="mb-5" action>
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium"> ₹ {subTotal}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$ ₹ {shipingCost}</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold"> ₹ {total}</h5>
              </div>
              <button
                disabled = {isDisabled}
                className="btn btn-block btn-primary my-3 py-3"
                onClick={() => navigate("/pages/checkout")}
               
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
