import React from "react";
import { useState } from "react";

function App(){
  const [store, setStore] = useState({});

  const [inputCategory, setCategoryInput] = useState("");
  const [inputItems, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [deleteItem, setDeleteItem] = useState(""); 

  function addCategory(){
    const category = inputCategory.trim();
    if(category=="")
    {
      alert("Please enter the Category to add!");
      return;
    }
    if(store[category])
    {
      alert(`${category} already exists`);
      return;
    }
    setStore({...store,[category]:[]});
    setCategoryInput("");
  }
  function addItem(){
    const items = inputItems.trim();
    const category = selectedCategory.trim();

    if(items=="" || category==""){
      alert("Enter item and select the category");
      return;
    }
    if(!store[category]){
      alert(`${category} doesnt exists. Please create a category to insert items of the particular category.`);
      return;
    }
    setStore({...store,[selectedCategory]:[...store[category],items]});
  }
  function DeleteItem(category,index){
    const filterStore = store[category].filter((items,actIndex)=>(
      index!==actIndex
    ))
    setStore({...store,[category]:filterStore})
  }
  return(
    <div className="flex flex-col items-center gap-10 justify-center m-[10vh]">
      <div className="flex flex-col items-center bg-stone-300 gap-y-10 w-[50vh] py-4">
        <div>
          <h1 className="text-2xl">Enter Category and Items</h1>
        </div>
        <div className="flex gap-x-4">
          <input
          className="p-2 border-1 rounded-md border-red-700" 
          type="text" 
          placeholder="Enter Category"
          value={inputCategory}
          onChange={(e)=>setCategoryInput(e.target.value)}
          />
          <button className="bg-lime-400 text-white w-20 p-1 rounded-md border-red-900 cursor-pointer" type="submit" onClick={addCategory}>Add Category</button>
        </div>
        <div className="flex flex-col gap-y-3">
          <div>
            <select
            className="bg-stone-700 text-white border rounded-md p-2 border-red-900 "
            value={selectedCategory}
            onChange={(e)=>setSelectedCategory(e.target.value)}
            >
            <option value="">Select Category</option>
            {Object.keys(store).map((category)=>(
              <option 
              className="text-white bg-stone-500 p-2"
              key={category} value={category} >
                {category}
              </option>
            ))}
            </select>
          </div>
          <div className="flex gap-x-4">
            <input 
            className="p-2 border-1 rounded-md border-red-700" 
            type="text" 
            placeholder="Enter the Items"
            value={inputItems}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button className="bg-lime-400 text-white w-20 p-1 rounded-md border-red-900 cursor-pointer " onClick={addItem}>Add Item</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-stone-800 text-white p-3 w-fit">
        <div className="text-center">
          <h1 className="text-4xl ">Product Lists:</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Object.keys(store).map((category)=>(
            <div className="bg-slate-800 w-[20vh]">
              <div className="text-center text-2xl text-rose-400 m-3">
                <h1>{category}</h1>
              </div>
              <div className="">
                <ul className="flex flex-col gap-2">
                  {store[category].map((items,index)=>(
                    <li key={index} className="flex justify-between px-2">
                      {items}
                      <button className="cursor-pointer bg-red-900" onClick={()=>DeleteItem(category,index)}>🗑</button>
                    </li>
                    
                  ))}
                </ul>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}
export default App; 
  