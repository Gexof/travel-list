import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-stone-50 text-stone-800">
      <Header />

      <Form />

      <section className="flex flex-1 flex-col">
        <PackingList />
      </section>

      <Stats />
    </main>
  );
}

export default App;
