import React, { useEffect, useState } from "react";
import ProductCart from "../Components/ProductCart";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Shops = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // get all producs
  const getAllProducts = () => {
    axios.get("http://localhost:8080/api/product/get_products").then((res) => {
      // console.log(res.data.products)
      setProducts(res.data.products);
    });
  };

  // adding product in to Cart
  const addToCart = (id) => {
    if(!localStorage.getItem("user_id")){
      navigate('/login')
    }

    const data = {
      user_id: localStorage.getItem("user_id"),
      product_id:id,
      quantity: 1,
    };
    console.log(data);

    axios
      .post("http://localhost:8080/api/cart/add_to_cart", data)
      .then((res) => {
        console.log(res.data.message);
        navigate("/pages/cart");
      });
  };
  useEffect(() => {
    getAllProducts();
  }, [0]);

  const [pageProducts, setPageProducts] = useState([]);

  const [page, setPage] = useState(1);
  //  console.log('currentPage :>> '+currentPage);

  const goToPage = async () => {
    let startingIndex = page * 6 - 6;
    let endingIndex = page * 6;
    let limitProduct = products.slice(startingIndex, endingIndex);
    setPageProducts(limitProduct);

    console.log(pageProducts);
  };
  useEffect(() => {
    goToPage();
  }, [page]);

  const goToPrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page * 6 <= products.length) setPage(page + 1);
  };

  const goToDetails = (id) => {
    localStorage.setItem("product_id", JSON.stringify(id));

    navigate("/product-detail");
  };

  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-12">
            {/* Price Start */}
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="price-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label className="custom-control-label" htmlFor="price-1">
                    $0 - $100
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label className="custom-control-label" htmlFor="price-2">
                    $100 - $200
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label className="custom-control-label" htmlFor="price-3">
                    $200 - $300
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label className="custom-control-label" htmlFor="price-4">
                    $300 - $400
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label className="custom-control-label" htmlFor="price-5">
                    $400 - $500
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="color-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Color
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-1"
                  />
                  <label className="custom-control-label" htmlFor="color-1">
                    Black
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-2"
                  />
                  <label className="custom-control-label" htmlFor="color-2">
                    White
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-3"
                  />
                  <label className="custom-control-label" htmlFor="color-3">
                    Red
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-4"
                  />
                  <label className="custom-control-label" htmlFor="color-4">
                    Blue
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" htmlFor="color-5">
                    Green
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Color End */}
            {/* Size Start */}
            <div className="mb-5">
              <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="size-all"
                  />
                  <label className="custom-control-label" htmlFor="size-all">
                    All Size
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-1"
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-2"
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-3"
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-4"
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    L
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-5"
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    XL
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a className="dropdown-item" href="#">
                        Latest
                      </a>
                      <a className="dropdown-item" href="#">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="#">
                        Best Rating
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {products?.map((product, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                    <div
                      className="card product-item border-0 mb-4"
                      style={{
                        width: "20rem",
                        height: "30rem",
                      }}
                    >
                      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img
                          className="img-fluid "
                          src={`http://localhost:8080/${product.image}`}
                          alt
                          style={{
                            width: "20rem",
                            height: "25rem",
                          }}
                        />
                      </div>
                      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{product.name}</h6>
                        <div className="d-flex justify-content-center">
                          <h6> ₹ {product.price}</h6>
                          <h6 className="text-muted ml-2">
                            <del> ₹ {product.mrp}</del>
                          </h6>
                        </div>
                      </div>
                      <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link
                          to="/product-detail"
                          className="btn btn-sm text-dark p-0"
                          onClick={() => goToDetails(product._id)}
                        >
                          <i className="fas fa-eye text-primary mr-1" />
                          View Detail
                        </Link>

                        <button
                          className="btn btn-sm text-dark p-0"
                          onClick={() => addToCart(product._id)}
                        >
                          <i className="fas fa-shopping-cart text-primary mr-1" />
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="col-12 pb-1">
                <nav aria-label="Page navigation ">
                  <ul className="pagination justify-content-center mb-3 pagination-container">
                    <li className="page-item ">
                      <button
                        className={"page-link"}
                        aria-label="Previous"
                        onClick={goToPrevPage}
                        disabled={page === 1}
                      >
                        <span aria-hidden="true">« Previous</span>
                        <span className="sr-only"></span>
                      </button>
                    </li>
                    <li
                      className="page-item active page-link d-flex justify-content-center"
                      style={{ width: "50px" }}
                    >
                      {page}
                    </li>

                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Previous"
                        onClick={goToNextPage}
                        disabled={page * 6 >= products.length}
                      >
                        <span aria-hidden="true">Next »</span>
                        <span className="sr-only">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      {/* Shop End */}
    </div>
  );
};

export default Shops;
