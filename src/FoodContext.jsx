import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [cart, setCart] = useState([]);

  const menu = [
    { id: 1, name: "Burger", price: 5 },
    { id: 2, name: "Pizza", price: 8 },
    { id: 3, name: "Salad", price: 4 },
  ];

  const addToCart = (food) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === food.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === food.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...food, count: 1 }];
    });
  };

  const removeFromCart = (foodId) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === foodId);
      if (existing.count === 1) {
        return prevCart.filter((item) => item.id !== foodId);
      }
      return prevCart.map((item) =>
        item.id === foodId ? { ...item, count: item.count - 1 } : item
      );
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <FoodContext.Provider
      value={{ menu, cart, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </FoodContext.Provider>
  );
}
