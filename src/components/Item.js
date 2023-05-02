import React from "react";
import "../styles/Item.css";

export default function Item(props) {
  const [quantity, setQuantity] = React.useState(1);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.id}</h3>
      <h5>{props.price}</h5>
      <p>{props.description}</p>
      <p>Quantity: {quantity}</p>
      <div>
        <button onClick={increment}> + </button>
        <button onClick={() => props.addToCart(props.id, quantity)}>
          {" "}
          Add to Cart{" "}
        </button>
        <button onClick={decrement}> - </button>
      </div>
    </div>
  );
}
