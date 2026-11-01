import React from "react";
import ProductCard from "./Componenets/ProductCard"
import { useState } from "react";

function App(){
  const [showAllProducts , setShowAllProducts] = useState(true);
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
  const availableProducts = products.filter(product=>product.inStock)
  function handleProducts(){
    setShowAllProducts(!showAllProducts)
  }
  return(
    <div>
      {
        showAllProducts?
        products.map((product)=>(
        <ProductCard 
        key={product.id}
        name={product.name} 
        price={product.price} 
        category={product.category} 
        inStock={product.inStock}/>
        ))
        :
        availableProducts.map((availableProduct)=>(
          <ProductCard 
            key={availableProduct.id}
            name={availableProduct.name} 
            price={availableProduct.price} 
            category={availableProduct.category} 
            inStock={availableProduct.inStock}/>
        ))
      }
      <button onClick={handleProducts}>{showAllProducts?"Show Available Products":"Show all Products"}</button>
    </div>
  )
}
export default App; 
  