"use client"

import {useState} from "react";

export default function ItemForm(){
    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const submissionHandler = (event) => {
        console.dir(event);

        event.preventDefault();

        const item = {name, quantity, category};
        console.log(item);


           //alert state 
        alert(`Name: ${name}
        n\ Quantity: ${quantity}
        n\ Category: ${category}`)

        setName("Item name")
        setQuantity(1)
        setCategory("Category")
    };

    const handleFormName = (event) => {
        // console.dir(event);
        setName(event.target.value);        
    };
    const handleForQuantity = (event) => setQuantity(event.target.value);
    const handleForCategory = (event) => setCategory(event.target.value);

    return(
        <div className="flex items-start justify-center min-h-screen pt-10 bg-black-900">
            <form 
                onSubmit={submissionHandler}
                className="flex flex-col items-center bg-green-900 justify-center p-4 rounded-lg space-y-3 max-w-xs"
            >
                <div className="w-full">
                    <input 
                        required 
                        type="text" 
                        onChange={handleFormName} 
                        value={name} 
                        placeholder="Item name"
                        className="w-full p-2 border border-gray-300 rounded-md bg-white placeholder-gray-400"
                    />
                </div>
                <div className="flex w-full space-x-3">
                    <input 
                        required 
                        type="number" 
                        onChange={handleForQuantity} 
                        value={quantity} 
                        min="1"
                        max="99" 
                        className="w-1/2 p-2 border border-gray-300 rounded-md bg-white text-black"
                    />                
                    <select 
                        required 
                        onChange={handleForCategory} 
                        value={category} 
                        className="w-1/2 p-2 border border-gray-300 rounded-md bg-white text-black"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="w-full pt-4">
                    <button 
                        type="submit" 
                        className="w-full py-2 bg-purple-500 text-white rounded-md text-xl"
                    >
                        +
                    </button>
                </div>
            </form>
        </div>
    );
}
