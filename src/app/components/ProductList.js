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
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      {props.products.map((product) => (
        <li
          key={product.id}
          onClick={() => props.onProductClick(product.id)}
          className={`w-48 border-2 cursor-pointer border-neutral-600 ${
            props.productIdSelected === product.id
              ? "bg-neutral-300"
              : "bg-white"
          }`}
        >
          <Product product={product} onQuantityChange={onQuantityChange} />
        </li>
      ))}
    </ul>
  );
}
