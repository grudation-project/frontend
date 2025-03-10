import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import Tickets from "../Tickets/ManagTickets";

const MangerDash = () => {
  const stats = [
    { label: "All tickets", value: 10, percentage: 100 },
    { label: "Open tickets", value: 7, percentage: 70 },
    { label: "Closed tickets", value: 3, percentage: 30 },
    { label: "Users", value: 6, percentage: 30 },
  ];

  const barData = [
    { name: "Sat", value: 20 },
    { name: "Sun", value: 30 },
    { name: "Mon", value: 50 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 45 },
    { name: "Fri", value: 35 },
  ];

  const lineData = [
    { year: 2021, tickets: 1500 },
    { year: 2022, tickets: 2000 },
    { year: 2023, tickets: 2500 },
    { year: 2024, tickets: 3000 },
    { year: 2025, tickets: 4000 },
    { year: 2026, tickets: 3500 },
  ];

  const COLORS = ["#2C5282", "#3182CE"];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center relative">
            <h3 className="text-md font-semibold">{stat.label}</h3>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            <div className="absolute top-4 right-4">
              <PieChart width={60} height={60}>
                <Pie
                  data={[
                    { name: "Completed", value: stat.percentage },
                    { name: "Remaining", value: 100 - stat.percentage },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={28}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill={COLORS[0]} />
                  <Cell fill="#e0e0e0" />
                </Pie>
              </PieChart>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Daily Respond</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3182CE" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Annual Tickets Average</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="tickets" stroke="#2C5282" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Tickets */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Tickets</h3>
          <a href="/tickets" className="text-blue-500 text-sm">View All</a>
        </div>
        <Tickets />
      </div>

    </div>
  );
};

export default MangerDash;