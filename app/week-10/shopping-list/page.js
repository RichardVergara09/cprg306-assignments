"use client";

import React, { useState, useEffect } from "react";
import ItemForm from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../services/shopping-list-service";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    const itemId = await addItem(user.uid, item);
    setItems([...items, { ...item, id: itemId }]);
  };

  const handleItemSelect = (item) => {
    const itemName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(itemName);
  };

  if (!user) {
    return (
      <main className="p-6 bg-black-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Shopping List</h1>
        <p>You must be logged in to view this page.</p>
        <Link href="/week-10/">
          <a className="text-lg m-2 hover:underline">Click here to return to the sign in page.</a>
        </Link>
      </main>
    );
  }

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
