import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, filterBy, search, store } from "../../store/index";
import "./Products.css";

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const sort = useSelector((state) => state.sort);

  const handleAddToCart = (product) => {
    store.dispatch(add(product));
    alert("Added This Product to Your Cart");
  };

  const handleOnChange = (e) => {
    const input = e.target.value;
    store.dispatch(search({ value: input }));
  };

  const handleSelectChange = (e) => {
    const action = filterBy(e.target.value);
    console.log(action);
    store.dispatch(action);
  };

  return (
    <div className="wrapper-products">
      <h1 className="title">All Products</h1>
      <div className="filters">
        <h3>{products.length} products</h3>
        <div className="select-option">
          <select
            value={sort}
            onChange={handleSelectChange}
            className="select-option"
          >
            <option value="" disabled>
              Choose here
            </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="search-bar">
          <input
            onChange={handleOnChange}
            type="text"
            className="input-search"
            placeholder="Search..."
          />
          <span className="search-effect">SEARCH</span>
        </div>
      </div>
      <div className="all-products">
        {products &&
          products.length &&
          products.map((product) => (
            <div key={product.id} className="product">
              <Link to={`/products/${product.id}`}>
                <img className="product-img" src={product.image} alt="" />
              </Link>
              <Link to={`/products/${product.id}`}>
                <p className="info product-name">{product.title}</p>
              </Link>
              <p className="info product-price">Price: {product.price} $ </p>
              <button
                className="info product-add"
                onClick={() => handleAddToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
