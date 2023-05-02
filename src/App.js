import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([
    {
      id: 1,
      name: "Item 1",
      price: 100,
      description: "This is item 1",
      quantity: 0,
    },
    {
      id: 2,
      name: "Item 2",
      price: 200,
      description: "This is item 2",
      quantity: 0,
    },
  ]);

  function addToCart(itemId, selectedQuantity) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + selectedQuantity,
        };
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop addToCart={addToCart} items={items} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart items={items} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
