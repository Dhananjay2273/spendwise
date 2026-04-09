import Layout from "../components/Layout.jsx";
import StatCard from "../components/StatCard.jsx";
import ExpensesPerDayChart from "../components/charts/ExpensesPerDayChart.jsx";
import ExpensesByPersonBar from "../components/charts/ExpensesByPersonBar.jsx";
import ExpensesByCategoryDonut from "../components/charts/ExpensesByCategoryDonut.jsx";
import ExpensesPerMonthLine from "../components/charts/ExpensesPerMonthLine.jsx";

import {
  dailyExpenses,
  expensesByPerson,
  expensesByCategory,
  expensesPerMonth,
} from "../data/demoData.js";

function Dashboard() {
  const total = expensesByCategory.reduce((sum, c) => sum + c.value, 0);

  return (
    <Layout>
      {/* top row: logo/info + stats */}
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-4 mb-4">
        <div className="bg-cardDark rounded-2xl p-4 border border-gray-700 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Your Logo
            </p>
            <div className="border border-dashed border-gray-500 rounded-xl py-6 flex items-center justify-center">
              <span className="text-sm text-gray-500">UPLOAD LOGO</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            <p>Bring data from the last</p>
            <div className="mt-2 flex items-center gap-2">
              <input
                className="bg-bgDark border border-gray-600 rounded-lg px-3 py-1.5 text-sm w-20 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                defaultValue={365}
              />
              <span>days</span>
            </div>
          </div>
        </div>

        <StatCard
          label="Total spent"
          value={`$${total.toLocaleString()}`}
          sub="Last 365 days"
          accent="#00C853"
        />
        <StatCard
          label="Biggest category"
          value="Meals & Tips"
          sub="$1,652"
          accent="#FFB300"
        />
        <StatCard
          label="Active members"
          value="3"
          sub="You, Roommate, Partner"
          accent="#42A5F5"
        />
      </div>

      {/* middle row: line + bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2">
          <ExpensesPerDayChart data={dailyExpenses} />
        </div>
        <ExpensesByPersonBar data={expensesByPerson} />
      </div>

      {/* bottom row: donut + multi line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ExpensesByCategoryDonut data={expensesByCategory} />
        <ExpensesPerMonthLine data={expensesPerMonth} />
      </div>
    </Layout>
  );
}

export default Dashboard;
