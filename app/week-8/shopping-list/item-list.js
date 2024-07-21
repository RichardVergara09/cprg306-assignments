"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let itemArray = [...items];

  itemArray = itemArray.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="flex flex-col items-left justify-center">
      <div>
        Sort by:
      </div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-5 py-3 bg-purple-500 mr-6 rounded-md text-black ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-5 py-3 mr-6 rounded-md ${sortBy === 'category' ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
        >
          Category
        </button>
      </div>
      <div>
        {itemArray.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </div>
    </div>
  );
}
