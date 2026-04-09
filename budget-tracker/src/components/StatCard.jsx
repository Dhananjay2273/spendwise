function StatCard({ label, value, sub, accent }) {
  return (
    <div className="bg-cardDark rounded-2xl p-4 border border-gray-700 flex flex-col gap-1">
      <span className="text-xs uppercase tracking-wide text-gray-400">{label}</span>
      <span className="text-2xl font-semibold">{value}</span>
      {sub && <span className="text-xs text-gray-400">{sub}</span>}
      {accent && (
        <div className="mt-2 h-1.5 w-16 rounded-full" style={{ backgroundColor: accent }} />
      )}
    </div>
  );
}

export default StatCard;
