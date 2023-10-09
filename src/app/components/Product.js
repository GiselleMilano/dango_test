"use client";
import React from "react";
import Image from "next/image";
import QuantityInput from "./QuantityInput";

export default function Product(props) {
  const product = props.product;

  function onQuantityChange(quantity) {
    const newProductData = { ...product, quantity: quantity };
    props.onQuantityChange(newProductData);
  }

  if (!product) {
    return <div>Not product information found...</div>;
  }

  return (
    <div
      className={
        "pl-5 pr-5 pt-8 pb-8 flex flex-col items-center justify-center gap-6"
      }
    >
      <div className="w-full flex flex-col gap-6">
        <div className="w-full h-20 bg-black rounded-xl flex justify-center items-end">
          <Image
            src={product.image}
            width={120}
            height={110}
            alt="Product Image"
            className="rounded-t-md"
          />
        </div>
        <h1
          className="w-full font-bold text-left break-words"
          style={{ fontSize: `${product.fontSize}px` }}
        >
          {product.title}
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-full flex flex-row gap-2 items-center">
          <p className="font-bold text-base">${product.price}</p>
          <QuantityInput
            quantity={product.quantity}
            onQuantityChange={onQuantityChange}
          />
        </div>
        <p className="w-full h-24 text-clip text-neutral-600 overflow-hidden text-xs text-left">
          {product.description}
        </p>
        <div className="w-full flex items-center justify-center">
          <button className="border border-black bg-[#ead7e5] p-1 text-sm">
            Add to cart
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <a href="#" className="underline text-sm">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
