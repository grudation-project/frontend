/* eslint-disable react/prop-types */
const statusMap = {
    0: { label: "Open", color: "bg-yellow-100 text-yellow-800" },
    1: { label: "In Progress", color: "bg-blue-100 text-blue-800" },
    2: { label: "Closed", color: "bg-green-100 text-green-800" },
};

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    });
};

const RecentTicketsTable = ({ recent_tickets = [] }) => {
    const sortedTickets = [...recent_tickets].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    return (
        <div
            className="bg-white p-4 md:p-6 rounded-xl shadow-lg"
            style={{
                borderRadius: "16px",
                border: "1px solid #D1D5DB",
                boxShadow: "0px 4px 10px rgba(13, 27, 68, 0.2)",
            }}
        >
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-left text-sm md:text-md font-semibold border-b border-gray-300">
                            <th className="py-3 px-4">ID</th>
                            <th className="py-3 px-4">MANAGER</th>
                            <th className="py-3 px-4">USER</th>
                            <th className="py-3 px-4">STATUS</th>
                            <th className="py-3 px-4">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTickets?.map((ticket) => {
                            const statusInfo = statusMap[ticket.status] || {
                                label: "Unknown",
                                color: "bg-gray-200 text-gray-800",
                            };

                            return (
                                <tr
                                    key={ticket.id}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition"
                                >
                                    <td className="py-3 px-4 text-gray-500 text-sm">{ticket.id}</td>
                                    <td className="py-3 px-4">{ticket.manager ?? "—"}</td>
                                    <td className="py-3 px-4">{ticket.user ?? "—"}</td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-4 py-2 text-xs font-medium rounded-lg ${statusInfo.color}`}
                                        >
                                            {statusInfo.label}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-500 text-sm">
                                        {formatDate(ticket.created_at)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentTicketsTable;
