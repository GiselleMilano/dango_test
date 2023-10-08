import React from "react";

export default function QuantityInput({ quantity }) {
  const handleQuantityChange = (event) => {
    if (/^[0-9]*$/.test(event.target.value)) {
      console.log(`the new value to input is: ${event.target.value}`);
    }
  };

  return (
    <input
      size={2}
      defaultValue={quantity}
      onChange={handleQuantityChange}
      className="border border-neutral-600 text-center text-neutral-600 text-xs"
    />
  );
}
