const multer = require("multer");
const Product = require("../Models/productModel");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,

  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png/;
    const extname = fileType.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileType.test(file.mimetype);

    console.log(
      "File extension:",
      path.extname(file.originalname).toLowerCase()
    );
    console.log("MIME type:", file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
}).single("image");

exports.addProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }

    try {
      const { name, price, description, brand, mrp, category } = req.body;
      const token = req.body.token;
      console.log("token : ", token);

      const newProduct = new Product({
        name: name,
        price: price,
        description: description,
        brand: brand,
        mrp: mrp,
        category: category,
        image: req.file.path,
      });

      console.log(newProduct);

      const data = await newProduct.save();
      res.status(200).json({
        result: "true",
        message: "product added successfully",
        data: data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    }
  });
};

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      result: "true",
      message: "fatching product successfully",
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {

    if (!req.body.product_id) {
      return res.status(400).json({
        result: false,
        message: "product_id is required",
      });
    }

    const product = await Product.findOne({ _id : req.body.product_id });
    if (!product) {
      return res.status(400).json({
        result: false,
        message: "Product not Found",
      });
    }

      res.status(200).json({
        result: true,
        message: "fatching product successfully",
        product: product,
      })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};
