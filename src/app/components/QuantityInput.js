import React from "react";

export default function QuantityInput(props) {
  const handleQuantityChange = (event) => {
    if (/^[0-9]*$/.test(event.target.value)) {
      props.onQuantityChange(Number(event.target.value));
    }
  };

  return (
    <input
      size={2}
      value={props.quantity}
      onChange={handleQuantityChange}
      className="border border-neutral-600 text-center text-neutral-600 text-xs"
    />
  );
}
