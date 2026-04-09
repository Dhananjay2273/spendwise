import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function ExpensesByPersonBar({ data }) {
  return (
    <div className="bg-cardDark rounded-2xl p-4 border border-gray-700 flex flex-col">
      <h2 className="text-sm font-semibold mb-2">Expenses per individual</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} layout="vertical" barCategoryGap={18}>
          <XAxis type="number" stroke="#888" />
          <YAxis type="category" dataKey="name" stroke="#888" />
          <Tooltip
            contentStyle={{ background: "#1f2937", border: "none", borderRadius: "0.5rem" }}
          />
          <Bar dataKey="amount" radius={[0, 8, 8, 0]} fill="#00C853" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensesByPersonBar;
