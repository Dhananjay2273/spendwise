import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ExpensesPerDayChart({ data }) {
  return (
    <div className="bg-cardDark rounded-2xl p-4 border border-gray-700 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold">Expenses per day</h2>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{ background: "#1f2937", border: "none", borderRadius: "0.5rem" }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#00C853"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpensesPerDayChart;
