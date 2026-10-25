function Stats({ totalItems, packedItems }) {
  return (
    <footer className="bg-emerald-950 px-4 py-6 text-center text-white sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm font-medium text-emerald-100 sm:text-base">
          <span className="mr-2" aria-hidden="true">
            ✈️
          </span>
          You have
          <span className="font-bold text-orange-300">{totalItems} items</span>
          on your list
        </p>

        <div className="flex items-center gap-3">
          <div className="h-2 w-28 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-orange-400 transition-all"
              style={{
                width: `${(packedItems / totalItems) * 100}%`,
              }}
            />
          </div>

          <span className="text-xs font-semibold text-emerald-200">
            {packedItems}/{totalItems} packed
          </span>
        </div>
      </div>

      <p className="mt-4 text-xs text-emerald-300/70">
        Ready for your next adventure?
      </p>
    </footer>
  );
}

export default Stats;
