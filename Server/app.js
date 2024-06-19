// import section
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoutes.js");
const productRoutes = require("./Routes/productRoutes.js");
const cartRoutes = require("./Routes/cartRoutes.js");
const checkoutOrderRoutes = require("./Routes/checkOutRoutes.js");

const path = require("path");


const app = express();

//Middleware Section
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/", userRoutes);
app.use("/api/product", productRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/cart', cartRoutes);
app.use('/api/order', checkoutOrderRoutes);



// exports

module.exports = app;
