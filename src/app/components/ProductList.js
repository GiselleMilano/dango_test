"use client";
import React from "react";
import Product from "./Product";

export default function ProductList({ products }) {
  if (products.length < 1 || products === null) {
    return <ul>No products to show...</ul>;
  }

  return (
    <ul className="grid grid-cols-4 gap-3">
      {products.map((product) => (
        <li key={product.id} className="w-48 border-2 border-black">
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
