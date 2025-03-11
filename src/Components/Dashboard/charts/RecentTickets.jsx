import { FaTrash, FaEdit, FaPaperPlane } from "react-icons/fa";
import { useUser } from "../../../context/userContext";

const tickets = [
    {
        id: 1,
        subject: "Lorem ipsum dolor sit amet",
        user: "Hazem Sharaf",
        status: "Completed",
        date: "Mon, Dec 12",
        avatar: "https://i.pravatar.cc/40?img=1",
        statusColor: "bg-green-100 text-green-600",
    },
    {
        id: 2,
        subject: "Lorem ipsum dolor sit amet",
        user: "Hazem Sharaf",
        status: "Processing",
        date: "Mon, Dec 12",
        avatar: "https://i.pravatar.cc/40?img=2",
        statusColor: "bg-orange-100 text-orange-600",
    },
    {
        id: 3,
        subject: "Lorem ipsum dolor sit amet",
        user: "Hazem Sharaf",
        status: "Processing",
        date: "Mon, Dec 12",
        avatar: "https://i.pravatar.cc/40?img=3",
        statusColor: "bg-orange-100 text-orange-600",
    },
    {
        id: 4,
        subject: "Lorem ipsum dolor sit amet",
        user: "Hazem Sharaf",
        status: "Pending",
        date: "Mon, Dec 12",
        avatar: "https://i.pravatar.cc/40?img=4",
        statusColor: "bg-gray-200 text-gray-600",
    },
];

const RecentTicketsTable = () => {
    const { user } = useUser();
    return (
        <div
            className="bg-white p-4 md:p-6 rounded-xl shadow-lg"
            style={{
                borderRadius: "16px",
                border: "1px solid #D1D5DB",
                boxShadow: "0px 4px 10px rgba(13, 27, 68, 0.2)",
            }}
        >
            {/* Table Header */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-left text-sm md:text-md font-semibold border-b border-gray-300">
                            <th className="py-3 px-4">SUBJECT</th>
                            <th className="py-3 px-4">STATUS</th>
                            <th className="py-3 px-4">DATE</th>
                            <th className="py-3 px-4">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                                {/* Subject & User */}
                                <td className="py-3 px-4 flex items-center space-x-3">
                                    <img src={ticket.avatar} alt="User" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="text-gray-800 text-sm font-medium">{ticket.subject}</p>
                                        <p className="text-gray-500 text-xs">{ticket.user} 👤</p>
                                    </div>
                                </td>

                                {/* Status */}
                                <td className="py-3 px-4">
                                    <span className={`px-3 py-1 text-xs font-medium rounded-lg ${ticket.statusColor}`}>
                                        {ticket.status}
                                    </span>
                                </td>

                                {/* Date */}
                                <td className="py-3 px-4 text-gray-500 text-sm">{ticket.date}</td>

                                {/* Actions */}
                                <td className="py-3 px-4 flex items-center space-x-3">
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrash />
                                    </button>
                                    <button className="text-gray-600 hover:text-black">
                                        <FaEdit />
                                    </button>
                                    {
                                        user.type == 2 && (
                                            <button className="text-gray-600 hover:text-black">
                                                <FaPaperPlane />
                                            </button>
                                        )
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentTicketsTable;
