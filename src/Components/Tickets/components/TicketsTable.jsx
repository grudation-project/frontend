/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTrash, FaEdit, FaPaperPlane } from "react-icons/fa";
import { useUser } from "../../../context/userContext";


const itemsPerPage = 7;

const TicketsTable = ({ ticketsData }) => {
    const { user } = useUser();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(ticketsData.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const displayedTickets = ticketsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg ">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-left text-lg md:text-md font-semibold border-b border-gray-300">
                            <th className="py-3 px-4">SUBJECT</th>
                            <th className="py-3 px-4">STATUS</th>
                            <th className="py-3 px-4">DATE</th>
                            <th className="py-3 px-4">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedTickets.map((ticket) => (
                            <tr key={ticket.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-3 px-4 flex items-center space-x-3">
                                    <img src={ticket.avatar} alt="User" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="text-gray-800 text-md font-medium">{ticket.subject}</p>
                                        <p className="text-gray-500 text-sm">{ticket.user} 👤</p>
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <span className={`px-3 py-3 text-sm font-bold rounded-lg ${ticket.statusColor}`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-gray-500 text-ms">{ticket.date}</td>
                                <td className="py-3 px-4 flex items-center space-x-3">
                                    <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                                    <button className="text-gray-600 hover:text-black"><FaEdit /></button>
                                    {user.type == 2 && <button className="text-gray-600 hover:text-black"><FaPaperPlane /></button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                <p>Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, ticketsData.length)} of {ticketsData.length} entries</p>
                <div className="flex space-x-2">
                    <button onClick={() => handlePageChange(currentPage - 1)} className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-500 text-white hover:bg-gray-700"}`}>
                        &lt;
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? "bg-blue-700 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} className={`px-3 py-1 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-500 text-white hover:bg-gray-700"}`}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketsTable;
