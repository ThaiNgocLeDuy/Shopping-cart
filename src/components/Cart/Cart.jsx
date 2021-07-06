import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove, store, upQuantity, downQuantity } from "../../store/index";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);

  const getTotal = (state) => {
    const total = state.reduce(
      (result, item) => item.qty * item.price + result,
      0
    );
    return total === 0 ? 0 : Math.trunc(total + 1);
  };

  return (
    <div className="wrapper-cart">
      <h1 className="title">Cart</h1>
      <h2 className="total">Total: {getTotal(cart)} $</h2>
      <div className="all-products">
        {cart.map((product) => (
          <div key={product.id} className="product">
            <img className="product-img" src={product.image} alt="" />
            <Link to="">
              <p className="info product-name">{product.title}</p>
            </Link>
            <p className="info product-price">
              Price {Math.trunc(product.price * product.qty + 1)} ${" "}
            </p>
            <div className="block-quantity">
              <button onClick={() => store.dispatch(downQuantity(product))}>
                -
              </button>
              <p className="info product-quantity">Quantity: {product.qty}</p>
              <button onClick={() => store.dispatch(upQuantity(product))}>
                +
              </button>
            </div>
            <button
              onClick={() => store.dispatch(remove(product))}
              className="info product-add"
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
