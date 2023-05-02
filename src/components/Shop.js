import React from "react";
import Item from "./Item";
import "../styles/Shop.css";

export default function Shop({ items, addToCart }) {

  return (
    <div className="shopContent">
      <h2>Shop</h2>
      <div className="shopItems">
        {items.map((item) => {
          return (
            <Item
              id= {item.id}
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              quantity={item.quantity}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
