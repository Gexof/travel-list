import { useState } from "react";
import Item from "./Item";
import ConfirmModal from "./ConfirmModal";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  const [showClearModal, setShowClearModal] = useState(false);

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <section className="flex-1 bg-stone-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col">
        {/* Section heading */}
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
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        {/* Items */}
        {items.length > 0 ? (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 bg-white px-5 py-12 text-center">
            <span className="mb-3 text-4xl" aria-hidden="true">
              🧳
            </span>

            <h3 className="text-lg font-bold text-emerald-950">
              Your packing list is empty
            </h3>

            <p className="mt-1 max-w-sm text-sm text-stone-500">
              Add the essentials for your next adventure using the form above.
            </p>
          </div>
        )}

        {/* List controls */}
        <div className="mt-8 flex flex-col gap-3 border-t border-stone-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-500">Organize your items your way</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="sort-items">
              Sort packing list
            </label>

            <select
              id="sort-items"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 outline-none transition hover:border-emerald-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 sm:w-auto"
            >
              <option value="input">Sort by Input Order</option>
              <option value="description">Sort by Description</option>
              <option value="packed">Sort by Packed Status</option>
            </select>

            <button
              type="button"
              onClick={() => setShowClearModal(true)}
              disabled={items.length === 0}
              className="rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear List
            </button>
          </div>
        </div>
      </div>

      {showClearModal && (
        <ConfirmModal
          onClose={() => setShowClearModal(false)}
          onConfirm={() => {
            onClearList();
            setShowClearModal(false);
          }}
        />
      )}
    </section>
  );
}

export default PackingList;
