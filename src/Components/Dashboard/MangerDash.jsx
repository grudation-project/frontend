import { useGetManagerStatisticsQuery } from "../../redux/feature/statistics/stat.apiSlice";
import DashboardLayout from "./DashboardLayout";
import { calcPercent } from "./helper";

const MangerDash = () => {
  const { data } = useGetManagerStatisticsQuery();
  const statsData = data?.data || {};

  const stats = [
    { label: "All tickets", value: statsData.all_tickets, percentage: 100 },
    { label: "Open tickets", value: statsData.opened_tickets, percentage: calcPercent(statsData.opened_tickets, statsData.all_tickets) },
    { label: "Closed tickets", value: statsData.closed_tickets, percentage: calcPercent(statsData.closed_tickets, statsData.all_tickets) },
    { label: "In Progress tickets", value: statsData.in_processing_tickets, percentage: calcPercent(statsData.in_processing_tickets, statsData.all_tickets) },
    { label: "Technicians Count", value: statsData.technicians_count, percentage: 100 },
  ];

  return (
    <DashboardLayout
      stats={stats}
      annualTickets={statsData.annual_tickets_average}
      recentTickets={statsData.recent_tickets || []}
    />
  );
};

export default MangerDash;
