import React, { useState } from 'react';

function EventHandler() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("Hello bro");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    const value = event.target.value;
    setShipping((prev) => {
      if (prev.includes(value)) {
        return prev.filter((method) => method !== value); // Remove if already selected
      } else {
        return [...prev, value]; // Add if not selected
      }
    });
  };

  return (
    <>
    <div className='papa'>
      <div>
        <label>Name: </label>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
      </div>
      
      <div>
        <label>Quantity: </label>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>
      </div>

      <div>
        <label>Comment: </label>
        <select value={comment} onChange={handleCommentChange}>
          <option value="Hello bro">Hello bro</option>
          <option value="Great service!">Great service!</option>
          <option value="Would order again">Would order again</option>
        </select>
        <p>Comment: {comment}</p>
      </div>

      <div>
        <label>Payment Method: </label>
        <input
          type="radio"
          value="Credit Card"
          name="payment"
          checked={payment === "Credit Card"}
          onChange={handlePaymentChange}
        /> Credit Card
        <input
          type="radio"
          value="PayPal"
          name="payment"
          checked={payment === "PayPal"}
          onChange={handlePaymentChange}
        /> PayPal
        <input
          type="radio"
          value="Cash on Delivery"
          name="payment"
          checked={payment === "Cash on Delivery"}
          onChange={handlePaymentChange}
        /> Cash on Delivery
        <p>Payment: {payment}</p>
      </div>

      <div>
        <label>Shipping Methods: </label>
        <input
          type="checkbox"
          value="Standard"
          checked={shipping.includes("Standard")}
          onChange={handleShippingChange}
        /> Standard
        <input
          type="checkbox"
          value="Express"
          checked={shipping.includes("Express")}
          onChange={handleShippingChange}
        /> Express
        <input
          type="checkbox"
          value="Overnight"
          checked={shipping.includes("Overnight")}
          onChange={handleShippingChange}
        /> Overnight
        <p>Shipping Methods: {shipping.join(", ")}</p>
      </div>
      </div>
    </>
  );
}

export default EventHandler;
