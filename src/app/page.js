"use client";
import { useState } from "react";
import ProductList from "./components/ProductList";
import TotalQuantityProducts from "./components/TotalQuantityProducts";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/soap_1.png",
      title: "Product1",
      price: 10,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 1,
    },
    {
      id: 2,
      image: "/soap_1.png",
      title: "Product2",
      price: 20,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 2,
    },
    {
      id: 3,
      image: "/soap_1.png",
      title: "Product3",
      price: 30,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 3,
    },
    {
      id: 4,
      image: "/soap_1.png",
      title: "Product4",
      price: 40,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 4,
    },
    {
      id: 5,
      image: "/soap_1.png",
      title: "Product5",
      price: 50,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 5,
    },
    {
      id: 6,
      image: "/soap_1.png",
      title: "Product6",
      price: 60,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 6,
    },
  ]);

  return (
    <main className="w-full h-full">
      <div className="flex justify-center flex-col items-center gap-8">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <ProductList products={products} />
        </div>
        <div className="w-full flex justify-center">
          <hr className="w-full mt-4 mb-4 border-b-1 border-black" />
        </div>
        <div className="w-full flex justify-end">
          <TotalQuantityProducts products={products} />
        </div>
      </div>
    </main>
  );
}
