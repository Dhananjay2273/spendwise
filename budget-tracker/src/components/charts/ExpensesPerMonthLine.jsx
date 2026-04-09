import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ExpensesPerMonthLine({ data }) {
  return (
    <div className="bg-cardDark rounded-2xl p-4 border border-gray-700">
      <h2 className="text-sm font-semibold mb-2">
        Expenses per month, per individual
      </h2>
      <ResponsiveContainer width="100%" height={230}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{ background: "#1f2937", border: "none", borderRadius: "0.5rem" }}
          />
          <Legend />
          <Line type="monotone" dataKey="you" name="You" stroke="#42A5F5" strokeWidth={2} dot />
          <Line type="monotone" dataKey="person2" name="Roommate" stroke="#EF5350" strokeWidth={2} dot />
          <Line type="monotone" dataKey="person3" name="Partner" stroke="#FFD54F" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensesPerMonthLine;
