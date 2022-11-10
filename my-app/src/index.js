import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"
import { CartProvider,useCart } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider
        id="jamie"
        onItemAdd={(item) => console.log(`Item ${item.id} added!`)}
        onItemUpdate={(item) => console.log(`Item ${item.id} updated.!`)}
        onItemRemove={() => console.log(`Item removed!`)}
      >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

