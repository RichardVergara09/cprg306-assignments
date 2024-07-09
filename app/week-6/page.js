"use client";

import React, { useState } from "react";
import ItemForm from "./new-item";
import ItemList from "./item-list";
import itemsData from './item.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="p-6 bg-black-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Shopping List</h1>
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}