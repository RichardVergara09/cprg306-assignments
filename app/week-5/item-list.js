"use client";
import { useState } from "react";
import Item from "./item"; 
import items from './item.json';

export default function ItemList() {
    let itemArray = items.map((item) => ({ ...item }));

    let [sortBy, setSortBy] = useState("name");

    itemArray = itemArray.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div>
                Sort by:
            </div>
            <div className="mb-4">
                <button
                    onClick={() => setSortBy('name')}
                    className="px-5 py-3 bg-purple-500 mr-6 rounded-md text-black"
                    style={{
                        backgroundColor: sortBy === 'name' ? 'lightblue' : 'purple',
                    }}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className="px-5 py-3 bg-yellow-500 mr-6 rounded-md text-black"
                    style={{
                        backgroundColor: sortBy === 'category' ? 'lightblue' : 'yellow',
                    }}
                >
                    Category
                </button>
            </div>
            <div>
                {itemArray.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
