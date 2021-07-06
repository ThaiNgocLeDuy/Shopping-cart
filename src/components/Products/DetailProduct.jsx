import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { add, store } from "../../store/index";
import './Products.css';

const DetailProduct = () => {
  let { id } = useParams();

  const product = useSelector((state) =>
    state.products.find((x) => x.id === id)
  );

  const handleAddToCart = (product) => {
    store.dispatch(add(product));
    alert("Added This Product to Your Cart");
  };

  return (
    <div key={product.id} className="wrapper-details">
      <img src={product.image} alt={product.title} />
      <div className="details-info">
        <p className="info detail-name">{product.title}</p>
        <p className="info detail-price">{product.price} $</p>
        <button onClick={() => handleAddToCart(product)} className="info detail-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default DetailProduct;
