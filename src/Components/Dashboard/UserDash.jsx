import StatsCards from "./charts/Stats";
// import DailyRespondChart from "./charts/DailyChart";
// import AnnualTicketsChart from "./charts/AnnalChart";
// import RecentTicketsTable from "./charts/RecentTickets";

const UserDash = () => {
  const stats = [
    { label: "All tickets", value: 10, percentage: 100 },
    { label: "Open tickets", value: 7, percentage: 70 },
    { label: "Closed tickets", value: 3, percentage: 30 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Charts Section */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <DailyRespondChart />
        <AnnualTicketsChart />
      </div> */}

      {/* Recent Tickets */}
      {/* <div className="bg-white  mt-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl  font-bold text-gray-800 ">Recent Tickets</h1>
          <a href="/tickets" className="text-blue-500 text-sm font-medium hover:underline">View All</a>
        </div>
      </div>
      <RecentTicketsTable /> */}

    </div>
  );
};

export default UserDash;
