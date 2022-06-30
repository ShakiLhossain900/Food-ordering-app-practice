import React from "react";

const CartContext = React.createContext({
  //defult data
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});
export default CartContext;
