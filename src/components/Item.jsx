function Item({ item }) {
  return (
    <li
      className={`group flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        item.packed
          ? "border-emerald-100 bg-emerald-50/60"
          : "border-stone-200 hover:border-emerald-200"
      }`}
    >
      <input
        type="checkbox"
        checked={item.packed}
        readOnly
        aria-label={`Mark ${item.description} as packed`}
        className="h-5 w-5 shrink-0 cursor-pointer accent-emerald-700"
      />

      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
          item.packed
            ? "bg-emerald-100 text-emerald-800"
            : "bg-orange-100 text-orange-800"
        }`}
      >
        {item.quantity}
      </span>

      <span
        className={`min-w-0 flex-1 break-words font-medium ${
          item.packed ? "text-stone-400 line-through" : "text-stone-800"
        }`}
      >
        {item.description}
      </span>

      <button
        type="button"
        aria-label={`Remove ${item.description}`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xl text-stone-400 transition hover:bg-red-50 hover:text-red-600"
      >
        ×
      </button>
    </li>
  );
}

export default Item;
