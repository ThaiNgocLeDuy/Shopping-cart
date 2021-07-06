import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../data";

const cartSlice = createSlice({
  name: "cart",
  initialState: data,
  reducers: {
    add: (state, action) => {
      const inCart = state.cart.find((x) =>
        x.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    },
    upQuantity: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty + 1 }
            : item
        ),
      };
    },
    downQuantity: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty - 1 }
            : item
        ),
      };
    },
    search: (state, action) => {
      const { value } = action.payload;
      const searchByValue = state.products.filter((val) =>
        val.title.toLowerCase().includes(value)
      );
      return {
        ...state,
        products: searchByValue,
      };
    },
    filterBy: (state, action) => {
      const sortBy = action.payload;
      const sortedProduct = state.products.slice();
      if (sortBy === "A-Z") {
        sortedProduct.sort((a, b) => (a.title > b.title ? 1 : -1));
      } else if (sortBy === "Z-A") {
        sortedProduct.sort((a, b) => (a.title > b.title ? -1 : 1));
      } else {
        sortedProduct.sort((a, b) =>
          sortBy === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price > b.price
            ? -1
            : 1
        );
      }
      return {
        ...state,
        sort: sortBy,
        products: sortedProduct,
      };
    },
    getProduct: (state, action) => {
      
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const { search, add, remove, upQuantity, downQuantity, filterBy } =
  cartSlice.actions;

export { cartSlice, store };
