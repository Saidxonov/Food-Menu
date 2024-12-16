import React from "react";
import { FoodProvider } from "./FoodContext";
import Menu from "./Menu";
import Cart from "./Cart";

function App() {
  return (
    <FoodProvider>
      <div className="min-h-screen text-gray-800 bg-gray-100">
        <header className="py-4 text-center text-white bg-blue-600">
          <h1 className="text-3xl font-bold">
            1. Ovqat Buyurtma Qilish Dasturi
          </h1>
        </header>
        <main className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          <Menu />
          <Cart />
        </main>
      </div>
    </FoodProvider>
  );
}
export default App;
