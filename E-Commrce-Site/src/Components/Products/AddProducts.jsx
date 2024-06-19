import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddProducts = () => {
  const [product_name, setProduct_name] = useState("");
  const [product_brand, setProduct_brand] = useState("");
  const [product_description, setProduct_description] = useState("");
  const [product_price, setProduct_price] = useState(null);
  const [product_mrp, setProduct_mrp] = useState(null);
  const [product_category, setProduct_category] = useState("");
  const [product_img, setProduct_img] = useState("");

  const navigate = useNavigate()


  
  const addProduct = (event) => {
    event.preventDefault();


    console.log("name : ",product_name );
    console.log("brand : ",product_brand );
    console.log("price : ", product_price);
    console.log("image : ", product_img)
    
    
   

    const token = localStorage.getItem('token') ;
    console.log(token)

    let formdata = new FormData();
    formdata.append("name", product_name);
    formdata.append("brand", product_brand);
    formdata.append("description", product_description);
    formdata.append("price", product_price);
    formdata.append("mrp", product_mrp);
    formdata.append("category", product_category);
    formdata.append("image", product_img);
    formdata.append("token", token);
   
    //

    console.log(" formdata : ",formdata);
    const options = {
      token: token
    }
    console.log(" options : ", options);
    axios
    .post('http://localhost:8080/api/product/add_product', formdata, options
    )
    .then((res) => {
      if (res.data.message === true) {
        console.log(res.data.message);

        navigate('/')
      } else {
        console.log(res.data.message);
      }
    })
    .catch((err)=>{
      console.log(err)
    })

   

    
  };

  return (
    <div className="container mt-5">
      <h3>Add new Product</h3>
      <form action>
        <div className="form-group d-flex">
          <label>Product Name : </label>
          <input
            type="text"
            className="form-control border-2 py-4"
            placeholder="Product Name"
            required="required"
            value={product_name}
            onChange={(e) => setProduct_name(e.target.value)}
          />
        </div>

        <div className="form-group d-flex">
          <label>Product Brand : </label>
          <input
            type="text"
            className="form-control border-2 py-4"
            placeholder="Producr Brand"
            required="required"
            value={product_brand}
            onChange={(e) => setProduct_brand(e.target.value)}
          />
        </div>

        <div className=" form-group d-flex">
          <label for="avatar">Product Image</label>

          <input
            type="file"
            id="avatar"
            name="avatar"
            placeholder="select file"
            className=" form-select input-group mb-3 p-3"
            accept="Image/*"
            onChange={(e) => setProduct_img(e.target.files[0])}
          />
        </div>

        <div className="form-group d-flex">
          <div class="input-group mb-3">
            <label>Category</label>
            <select
              class="form-select input-group mb-3 p-3"
              onClick={(e) => setProduct_category(e.target.value)}
              id=""
            >
              <option hidden>Select Category</option>
              <option className="p-2" value="shirts">
                Shirts
              </option>
              <option className="p-2" value="pents">
                Pents
              </option>
              <option className="p-2" value="t-shirts">
                T-Shirts
              </option>
              <option className="p-2" value="kids">
                Kids
              </option>
              <option className="p-2" value="jeans">
                Jeans
              </option>
              <option className="p-2" value="electronic">
                Electronics
              </option>
              <option className="p-2" value="womens">
                Womens
              </option>
            </select>
          </div>
        </div>

        <div className="form-group d-flex">
          <label>Product Description : </label>
          <input
            type="text"
            className="form-control border-2 py-4"
            placeholder="Product Description"
            required="required"
            value={product_description}
            onChange={(e) => setProduct_description(e.target.value)}
          />
        </div>

        <div className="form-group d-flex">
          <label>Product MRP : </label>
          <input
            type="number"
            className="form-control border-2 py-4"
            placeholder="Product MRP"
            required="required"
            value={product_mrp}
            onChange={(e) => setProduct_mrp(e.target.value)}
          />
        </div>
        <div className="form-group d-flex">
          <label>Product Price : </label>
          <input
            type="number"
            className="form-control border-2 py-4"
            placeholder="Product Price"
            required="required"
            value={product_price}
            onChange={(e) => setProduct_price(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary btn-block border-2 py-3"
          type="submit"
          onClick={addProduct}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
