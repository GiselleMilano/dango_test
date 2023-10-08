"use client";
import React from "react";

export default function TotalQuantityProducts({ products }) {
  const totalQuantity = products.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return <p>Total Quantity: {totalQuantity}</p>;
}
