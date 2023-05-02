import React from "react";

export default function Cart(props) {
  const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        let newTotal = 0;
        props.items.forEach((item) => {
            newTotal += item.price * item.quantity;
        });
        setTotal(newTotal);
    }, [props.items]);

  return (
    <div>
      <h1>Cart</h1>
      <div className="cartItems">
        {props.items.map((item) => {
          if (item.quantity > 0) {
            return (
              <div key={item.id} className="cartItem">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Item Total: {item.price * item.quantity}</p>
              </div>
            );
          }
          return null;
        })}
        <h3>Total: {total}</h3>
          </div>
          <button> Checkout </button>
    </div>
  );
}
