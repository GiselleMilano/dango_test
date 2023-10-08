"use client";
import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  function onQuantityChange(product) {
    props.onQuantityChange(product);
  }

  if (props.products.length < 1 || props.products === null) {
    return <ul>No products to show...</ul>;
  }

  return (
    <ul className="grid grid-cols-4 gap-3">
      {props.products.map((product) => (
        <li key={product.id} className="w-48 border-2 border-black">
          <Product product={product} onQuantityChange={onQuantityChange} />
        </li>
      ))}
    </ul>
  );
}
