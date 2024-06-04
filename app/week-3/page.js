import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="p-6 bg-black-900 text-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}