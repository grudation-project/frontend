import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const servicesData = [
    { id: 1, name: "Hardware Support" },
    { id: 2, name: "software Installation" },
    { id: 3, name: "IT Consultancy" },
    { id: 4, name: "Cyber Security" },
    { id: 5, name: "Technical Support" },
    { id: 6, name: "VPN Access" },
    { id: 7, name: "Database Management" },
    { id: 8, name: "API Services" },
    { id: 9, name: "AI Integration" },
    { id: 10, name: "Backup & Recovery" },
];

const itemsPerPage = 5;

const ServicesTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(servicesData.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const displayedServices = servicesData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-left text-lg md:text-md font-semibold border-b border-gray-300">
                            <th className="py-3 px-4">ID</th>
                            <th className="py-3 px-4">NAME</th>
                            <th className="py-3 px-4">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedServices.map((service) => (
                            <tr key={service.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-3 px-4 text-gray-800 text-md font-medium">#{service.id}</td>
                                <td className="py-3 px-4 text-gray-800 text-md font-medium">{service.name}</td>
                                <td className="py-3 px-4 flex items-center space-x-3">
                                    <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                                    <button className="text-gray-600 hover:text-black"><FaEdit /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                <p>Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, servicesData.length)} of {servicesData.length} entries</p>
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

export default ServicesTable;
