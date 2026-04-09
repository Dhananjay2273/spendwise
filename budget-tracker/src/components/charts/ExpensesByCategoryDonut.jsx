import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#FFB300", "#00C853", "#42A5F5", "#EF5350", "#AB47BC", "#26C6DA", "#FFA726",
];

function ExpensesByCategoryDonut({ data }) {
  return (
    <div className="bg-cardDark rounded-2xl p-4 border border-gray-700">
      <h2 className="text-sm font-semibold mb-2">Amount per type</h2>
      <div className="flex gap-4">
        <div className="w-2/3 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={55}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: "#1f2937", border: "none", borderRadius: "0.5rem" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/3 text-xs">
          <Legend
            payload={data.map((d, i) => ({
              value: `${d.name} - $${d.value}`,
              type: "square",
              color: COLORS[i % COLORS.length],
              id: d.name,
            }))}
            layout="vertical"
          />
        </div>
      </div>
    </div>
  );
}

export default ExpensesByCategoryDonut;
