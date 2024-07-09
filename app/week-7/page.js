"use client";

import React, { useState } from "react";
import ItemForm from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from './item.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    const itemName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(itemName);
  };

  return (
    <main className="p-6 bg-black-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Shopping List</h1>
      <div className="flex">
        <div className="flex-1">
          <ItemForm onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
