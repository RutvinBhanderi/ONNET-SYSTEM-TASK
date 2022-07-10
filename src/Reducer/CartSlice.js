import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    saved: 0,
    totalQty: 0,
  },
  reducers: {
    //Add Product To Cart
    addProduct(state, action) {
      state.products.push(action.payload);
      state.totalQty = state.totalQty + 1;
      state.saved =
        state.saved +
        (action.payload.list__price - action.payload.selling__price);
      state.totalPrice = state.totalPrice + action.payload.selling__price;
    },
    removeProduct(state, action) {
      //Remove Product From Cart
      const qty = state.products.find(
        (item) => item.product__id === action.payload.product__id
      ).qty;
      state.totalQty = state.totalQty - qty;

      state.products = state.products.filter(
        (item) => item.product__id !== action.payload.product__id
      );
      state.totalPrice =
        state.totalPrice - action.payload.selling__price * action.payload.qty;

      state.saved =
        state.saved -
        (action.payload.list__price - action.payload.selling__price);
    },

    addQuantity(state, action) {
      //Add product Quantity
      state.products.map(
        (item) =>
          item.product__id === action.payload.product__id &&
          (item.qty = item.qty + 1)
      );
      state.totalQty = state.totalQty + 1;
      state.totalPrice = state.totalPrice + action.payload.selling__price;
      state.saved =
        state.saved +
        (action.payload.list__price - action.payload.selling__price);
    },
    removeQuantity(state, action) {
      //Remove Product Quantity
      state.products.map(
        (item) =>
          item.product__id === action.payload.product__id &&
          (item.qty = item.qty - 1)
      );
      state.totalQty = state.totalQty - 1;
      state.totalPrice = state.totalPrice - action.payload.selling__price;
      state.saved =
        state.saved -
        (action.payload.list__price - action.payload.selling__price);
    },
  },
});

//Cart Actions
export const { addProduct, addQuantity, removeProduct, removeQuantity } =
  cartSlice.actions;

//Cart Reducer
export default cartSlice.reducer;
