import React from "react";
import ProductCard from "./Components/ProductCard"
import { useState } from "react";

const products = [
  {
    id:1,
    name:"Laptop",
    price:130000,
    category:"Electronics",
    inStock:true
  },
  {
    id:2,
    name:"Track Pant",
    price:6000,
    category:"Clothing",
    inStock:false
  },
  {
    id:3,
    name:"Mobile",
    price:100000,
    category:"Electronics",
    inStock:true
  },
  {
    id:4,
    name:"Shoes",
    price:3000,
    category:"Clothing",
    inStock:true
  }
]
function App(){
  const [showAllProducts , setShowAllProducts] = useState(true);
  const availableProducts = products.filter(product=>product.inStock)
  function handleProducts(){
    setShowAllProducts(!showAllProducts)
  }
  const visibleProducts = showAllProducts? products : availableProducts;
  console.log("App rendered, showAllProducts =", showAllProducts);
  return(
    <div>
      {
        visibleProducts.map((product)=>(
        <ProductCard 
        key={product.id}
        name={product.name} 
        price={product.price} 
        category={product.category} 
        inStock={product.inStock}/>
        ))
      }
      <button className="border border-black p-2 cursor-pointer hover:bg-red-200" onClick={handleProducts}>{showAllProducts?"Showing:All":"Showing:In stock only"}</button>
    </div>
  )
}
export default App; 
  