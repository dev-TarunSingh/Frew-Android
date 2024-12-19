import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const CartContext = createContext();

// Context provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const updateTotalAmount = (updatedCart) => {
    const total = updatedCart.reduce((sum, item) => sum + Number(item.price || 0), 0);
    setTotalAmount(total);
  };

  const addItem = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      updateTotalAmount(updatedCart);
      return updatedCart;
    });
  };

  const removeItem = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (cartItem) => cartItem.id !== item.id
      );
      updateTotalAmount(updatedCart);
      return updatedCart;
    });
  };

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalAmount, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export default CartContext;