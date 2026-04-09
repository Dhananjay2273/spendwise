function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-cardDark">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center font-bold">
          BT
        </div>
        <h1 className="text-lg font-semibold">Budget Tracker</h1>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="hidden sm:inline text-gray-300">
          Welcome back, <span className="font-semibold">User</span>
        </span>
        <button className="px-3 py-1.5 rounded-full border border-gray-600 text-xs hover:bg-gray-800">
          Logout
        </button>
      </div>
    </header>
  );
}

export default TopBar;
