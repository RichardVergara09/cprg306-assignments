import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const submissionHandler = (event) => {
        event.preventDefault();
        const item = {
            id: uuidv4(),
            name,
            quantity,
            category
        };
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <form 
            onSubmit={submissionHandler}
            className="flex flex-col items-center bg-green-900 justify-start p-4 rounded-lg space-y-3 max-w-xs"
        >
            <div className="w-full">
                <input 
                    required 
                    type="text" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    placeholder="Item name"
                    className="w-full p-2 border border-gray-300 rounded-md bg-white placeholder-gray-400"
                />
            </div>
            <div className="flex w-full space-x-3">
                <input 
                    required 
                    type="number" 
                    onChange={(e) => setQuantity(e.target.value)} 
                    value={quantity} 
                    min="1"
                    max="99" 
                    className="w-1/2 p-2 border border-gray-300 rounded-md bg-white text-black"
                />                
                <select 
                    required 
                    onChange={(e) => setCategory(e.target.value)} 
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
    );
}
