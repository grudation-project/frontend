import StatsCards from "./charts/Stats";
import DailyRespondChart from "./charts/DailyChart";
import AnnualTicketsChart from "./charts/AnnalChart";
import RecentTicketsTable from "./charts/RecentTickets";
import { useGetTechnicianStatisticsQuery } from "../../redux/feature/statistics/stat.apiSlice";
import { calcPercent } from "./helper";


const TechniDash = () => {
  const { data } = useGetTechnicianStatisticsQuery();
  const statistics = data?.data || [];
  console.log(statistics);
  const ticketsCount = statistics.all_tickets;
  // const openTicketsCount = statistics.opened_tickets;
  const closedTicketsCount = statistics.closed_tickets;
  const inProgressTicketsCount = statistics.in_processing_tickets;
  const Annual_tickets = statistics.annual_tickets_average;
  const stats = [
    { label: "All tickets", value: ticketsCount, percentage: 100 },
    // { label: "Open tickets", value: openTicketsCount, percentage: calcPercent(openTicketsCount, ticketsCount) },
    { label: "Closed tickets", value: closedTicketsCount, percentage: calcPercent(closedTicketsCount, ticketsCount) },
    { label: "In Progress tickets", value: inProgressTicketsCount, percentage: calcPercent(inProgressTicketsCount, ticketsCount) },
    // { label: "Technicians Count", value: statistics.technicians_count, percentage: 100 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <DailyRespondChart />
        <AnnualTicketsChart data={Annual_tickets} />
      </div>

      {/* Recent Tickets */}
      <div className="bg-white  mt-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl  font-bold text-gray-800 ">Recent Tickets</h1>
          <button className="text-blue-500 text-sm font-medium hover:underline">View All</button>
        </div>
      </div>
      <RecentTicketsTable recent_tickets={statistics.recent_tickets} />

    </div>
  );
};

export default TechniDash;
