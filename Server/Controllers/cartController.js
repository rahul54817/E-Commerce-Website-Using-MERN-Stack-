const Cart = require("../Models/cartModel");
const Product = require("../Models/productModel");

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find({ user_id: req.body.user_id });
    res.status(200).json({
      result: true,
      message: "fatching cart successfully",
      carts: carts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.addCart = async (req, res) => {
  try {
    if (!req.body.product_id && !req.body.user_id && !req.body.quantity) {
      return res.status(404).json({
        result: false,
        message: "requied  product_id, user_id, quantity",
      });
    }

    const products = await Product.findOne({ _id: req.body.product_id });
    console.log("Product : ", products);

    const cart = new Cart({
      product_id: req.body.product_id,
      user_id: req.body.user_id,
      quantity: req.body.quantity,
      product_name: products.name,
      product_image: products.image,
      price: products.price,
      total: products.price * req.body.quantity,
    });

    console.log("Cart product", cart);
    const newCart = await cart.save();
    res.status(200).json({
      result: true,
      message: "cart added successfully",
      cart: newCart,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};



exports.deleteCart = async (req, res) => {
  try {
    console.log("cart id :  ", req.body.cart_id);
    const cart = await Cart.findOne({ _id: req.body.cart_id });
    if (!cart) {
      res.status(404).json({
        result: true,
        message: "cart not found",
      });
    }

    await cart.deleteOne();

    res.status(200).json({
      result: true,
      message: "cart deleted",
      cart: cart,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    console.log("cart id :  ", req.body.cart_id);
    const cart = await Cart.findOne({ _id: req.body.cart_id });
    if (!cart) {
      res.status(404).json({
        result: true,
        message: "cart not found",
      });
    }

    cart.quantity = req.body.quantity;
    cart.total = req.body.quantity * cart.price;
    await cart.save();

    res.status(200).json({
      result: true,
      message: "cart updated",
    });
  } catch(err) {
   
    res.status(500).json({
      error: err,
    });
  }
};


