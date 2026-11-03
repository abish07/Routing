import React, { useState } from "react";
import ProductCard from "./Components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 130000, category: "Electronics", inStock: true },
  { id: 2, name: "Track Pant", price: 6000, category: "Clothing", inStock: false },
  { id: 3, name: "Mobile", price: 100000, category: "Electronics", inStock: true },
  { id: 4, name: "Shoes", price: 3000, category: "Clothing", inStock: true },
];

function App() {
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [search, setSearch] = useState("");

  function handleProducts() {
    setShowAllProducts(!showAllProducts);
    console.log(showAllProducts)
  }

  // One pipeline: products -> toggle filter -> search filter
  const visibleProducts = products
    .filter((product) => showAllProducts || product.inStock)
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="flex flex-col m-3 bg-slate-600">
      <div className="flex justify-center text-4xl text-rose-300">
        <h1>Products</h1>
      </div>

      <div className="text-center">
        <input
          className="bg-slate-200 p-1"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 items-center">
        {visibleProducts.length === 0 ? (
          <p className="col-span-3 text-center text-white">No products found</p>
        ) : (
          visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
            />
          ))
        )}
      </div>

      <div className="flex justify-center mb-4">
        <button
          className="border border-black p-2 bg-orange-300 cursor-pointer hover:bg-red-200"
          onClick={handleProducts}
        >
          {showAllProducts ? "Showing: All" : "Showing: In stock only"}
        </button>
      </div>
    </div>
  );
}

export default App;