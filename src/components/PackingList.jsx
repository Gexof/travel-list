import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Hats", quantity: 3, packed: true },
// ];

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <section className="flex-1 bg-stone-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              Your checklist
            </p>
            <h2 className="text-2xl font-black text-emerald-950 sm:text-3xl">
              Packing List
            </h2>
          </div>

          <span className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-semibold text-emerald-900">
            {items.length} items
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PackingList;
