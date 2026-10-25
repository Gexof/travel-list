import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  // ** Handlers
  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col bg-stone-50 text-stone-800">
      <Header />

      <Form onAddItems={handleAddItem} />

      <section className="flex flex-1 flex-col">
        <PackingList items={items} onDeleteItem={handleDeleteItem} />
      </section>

      <Stats />
    </main>
  );
}

export default App;
