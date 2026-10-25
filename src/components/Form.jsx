import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newITem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newITem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <section className="bg-orange-100 px-4 py-8 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-4xl flex-col gap-4"
      >
        <div className="text-center">
          <h2 className="text-xl font-bold text-emerald-950 sm:text-2xl">
            What do you need for your trip?
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Add everything you don't want to forget.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="quantity">
            Item quantity
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-stone-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 sm:w-28"
          >
            {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>

          <label className="sr-only" htmlFor="description">
            Item description
          </label>
          <input
            id="description"
            type="text"
            placeholder="e.g. T-shirts, sunglasses, passport..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-w-0 flex-1 rounded-xl border border-orange-200 bg-white px-4 py-3 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          />

          <button
            type="submit"
            className="rounded-xl bg-emerald-900 px-7 py-3 font-bold text-white shadow-sm transition hover:bg-emerald-800 active:scale-[0.98] sm:shrink-0"
          >
            Add item <span aria-hidden="true">+</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
