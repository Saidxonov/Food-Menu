import React, { useContext } from "react";
import { FoodContext } from "./FoodContext";

function Cart() {
  const { cart, removeFromCart, addToCart, totalPrice } =
    useContext(FoodContext);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="mb-4 text-xl font-semibold">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">No items in the cart.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between pb-2 border-b"
            >
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600"> x {item.count}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  -
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 text-right">
        <h3 className="text-lg font-semibold">Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
}
export default Cart;
