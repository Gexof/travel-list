function ConfirmModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close confirmation dialog"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-emerald-950/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="relative z-10 w-full max-w-md rounded-3xl border border-stone-100 bg-white p-6 shadow-2xl sm:p-8"
      >
        {/* Icon */}
        <div className="mb-5 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl">
            🗑️
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2
            id="modal-title"
            className="text-xl font-black text-emerald-950 sm:text-2xl"
          >
            Clear your packing list?
          </h2>

          <p
            id="modal-description"
            className="mt-3 text-sm leading-6 text-stone-500"
          >
            Are you sure you want to remove all items from your list? You'll
            lose your current packing checklist.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-stone-200 px-5 py-3 font-semibold text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/40"
          >
            Clear List
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
