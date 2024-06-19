const Order = require("../Models/orderModel");
const Cart = require("../Models/cartModel");

exports.placeOrder = async (req, res) => {
  try {
    const user_carts = await Cart.find({ user_id: req.body.user_id });

    const newOrder = new Order({
      user_id: req.body.user_id,
      user_carts: user_carts,
      shipping_cost: req.body.shipping_cost,
      sub_total: req.body.sub_total,
      total_cost: req.body.total_cost,
    });

    const data = await newOrder.save();
    await Cart.deleteMany({ user_id: req.body.user_id });

    res.status(200).json({
      result: true,
      message: "order placed successfully",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.getOrders = async (req, res) => {
  try {
    console.log("ID : ",req.body.user_id)
    const user_orders = await Order.find({  user_id: req.body.user_id });


    if (!user_orders)
      res.status(404).json({
        result: false,
        message: "orders not found of this uesr",
      });

    res.status(201).json({
      result: true,
      message: "orders fatching successfully",
      orders_details: user_orders,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: "something went wrong" + error,
    });
  }
};
