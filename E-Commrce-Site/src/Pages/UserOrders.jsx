import axios from "axios";
import React, { useEffect, useState } from "react";

const UserOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [number, setNumber] = useState(1);

  const myOrders = () => {
    const data = {
      user_id: localStorage.getItem("user_id"),
    };

    console.log(data);

    axios
      .post("http://localhost:8080/api/order/get_orders", data)
      .then((res) => {
        if (res.data.result === true) {
          setUserOrders(res.data.orders_details);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    myOrders();
    console.log("useEfferct");
  }, [0]);

  // useEffect(()=>{
  //   setNumber((number)=>number+1);

  // },)
  return (
    <>
    <table className="table table-bordered m-5">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Order id</th>
                  <th>Order Date</th>
                  <th>Product</th>
                  <th>Quntity</th>
                  <th>Price</th>
                  <th>Ammount</th>
                </tr>
              </thead>
              <tbody>
                
             
      {userOrders?.map((order, orderIndex) => {
        return order.user_carts?.map((product , productIndex) => {
          return (
            <tr>
                  <td>{number}</td>
                  <td>{order._id}</td>
                  <td>{order.createdAt.slice(0,10)}</td>
                  <td>{product.product_name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.total}</td>
                </tr>
                
            
          );
        });
      })}
      </tbody>
            </table>
    </>
  );
};

export default UserOrders;
