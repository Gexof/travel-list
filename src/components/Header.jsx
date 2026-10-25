function Header() {
  return (
    <header className="relative overflow-hidden bg-emerald-950 px-4 py-8 text-center text-white sm:py-10">
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400 text-3xl shadow-lg shadow-black/10">
          🧳
        </div>

        <h1 className="text-3xl font-black uppercase tracking-[0.18em] sm:text-4xl">
          Far Away
        </h1>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-200 sm:text-sm">
          Your next adventure starts here
        </p>
      </div>

      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full border border-white/10" />
    </header>
  );
}

export default Header;
