import React from "react";
import { useState } from "react";

function App(){
  const [store, setStore] = useState({});

  const [inputCategory, setCategoryInput] = useState("");
  const [inputItems, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
  return(
    <div className="container">
      <div className="inputContainer">
        <div className="inputCategory">
          <input type="text" 
          placeholder="Enter Category"
          value={inputCategory}
          onChange={(e)=>setCategoryInput(e.target.value)}
          />
          <button type="submit" onClick={addCategory}>Add Category</button>
        </div>
        <div className="itemCategory">
          <select
          value={selectedCategory}
          onChange={(e)=>setSelectedCategory(e.target.value)}
          >
          <option value="">Select Category</option>
          {Object.keys(store).map((category)=>(
            <option key={category} value={category} >
              {category}
            </option>
          ))}
          </select>
          <input type="text" 
          placeholder="Enter the Items"
          value={inputItems}
          onChange={(e)=>setInput(e.target.value)}
          />
          <button onClick={addItem}>Add Item</button>
        </div>
      </div>
      <div className="displayContainer">
          {Object.keys(store).map((category)=>(
            <div className="cards">
              <div className="header">
                <h1>{category}</h1>
              </div>
              <div className="cardBody">
                <ul>
                  {store[category].map((items,index)=>(
                    <li key={index}>
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default App; 
  