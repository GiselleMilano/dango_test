"use client";
import { useState } from "react";
import ProductList from "./components/ProductList";
import TotalQuantityProducts from "./components/TotalQuantityProducts";
import TitleInput from "./components/TitleInput";
import TitleFontSize from "./components/TitleFontSize";

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
      fontSize: 16,
    },
    {
      id: 2,
      image: "/soap_1.png",
      title: "Product2",
      price: 20,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 2,
      fontSize: 16,
    },
    {
      id: 3,
      image: "/soap_1.png",
      title: "Product3",
      price: 30,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 3,
      fontSize: 16,
    },
    {
      id: 4,
      image: "/soap_1.png",
      title: "Product4",
      price: 40,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 4,
      fontSize: 16,
    },
    {
      id: 5,
      image: "/soap_1.png",
      title: "Product5",
      price: 50,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 5,
      fontSize: 16,
    },
    {
      id: 6,
      image: "/soap_1.png",
      title: "Product6",
      price: 60,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
      quantity: 6,
      fontSize: 16,
    },
  ]);
  const [productId, setProductId] = useState(null);

  function onQuantityChange(product) {
    const newProductList = products.map((productOld) => {
      return productOld.id == product.id ? product : productOld;
    });
    setProducts(newProductList);
  }

  function onProductClick(productId) {
    setProductId(productId);
  }

  function onChangeTitle(title) {
    const newProductList = products.map((productOld) => {
      const newProduct = { ...productOld, title };
      return productOld.id === productId ? newProduct : productOld;
    });
    setProducts(newProductList);
  }

  function onChangeFontSize(fontSize) {
    const newProductList = products.map((productOld) => {
      const newProduct = { ...productOld, fontSize };
      return productOld.id === productId ? newProduct : productOld;
    });
    setProducts(newProductList);
  }

  return (
    <main className="w-full h-full">
      <div className="flex flex-row gap-8 mt-8 ml-8">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="gap-2 border-2 border-neutral-600">
            <div className="w-full flex flex-row justify-center items-center border-b-2 border-neutral-600 p-2">
              <h1 className="text-xl">Edit Product</h1>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 p-2">
              <div className="w-full flex flex-row gap-3">
                <p>Title:</p>
                <TitleInput
                  productId={productId}
                  products={products}
                  onChangeTitle={onChangeTitle}
                />
              </div>
              <div className="w-full flex flex-row items-center gap-3">
                <label htmlFor="default-range">Title Font Size:</label>
                <TitleFontSize
                  products={products}
                  productId={productId}
                  onChangeFontSize={onChangeFontSize}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <TotalQuantityProducts products={products} />
          </div>
        </div>
        <ProductList
          products={products}
          onQuantityChange={onQuantityChange}
          onProductClick={onProductClick}
          productIdSelected={productId}
        />
      </div>
    </main>
  );
}
