import React, { useContext } from "react";
import { FoodContext } from "./FoodContext";

function Menu() {
  const { menu, addToCart } = useContext(FoodContext);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="mb-4 text-xl font-semibold">Menu</h2>
      <ul className="space-y-4">
        {menu.map((food) => (
          <li
            key={food.id}
            className="flex items-center justify-between pb-2 border-b"
          >
            <span>{food.name}</span>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-600">${food.price}</span>
              <button
                onClick={() => addToCart(food)}
                className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
