import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const managersData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", department: "IT", avatar: "https://i.pravatar.cc/40?img=11" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210", department: "HR", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "555-123-4567", department: "Finance", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "Bob Brown", email: "bob.brown@example.com", phone: "444-987-6543", department: "Marketing", avatar: "https://i.pravatar.cc/40?img=4" },
    { id: 5, name: "Sarah White", email: "sarah.white@example.com", phone: "321-654-0987", department: "Sales", avatar: "https://i.pravatar.cc/40?img=12" },
    { id: 6, name: "Tom Green", email: "tom.green@example.com", phone: "777-888-9999", department: "Support", avatar: "https://i.pravatar.cc/40?img=6" },
    { id: 7, name: "Emma Black", email: "emma.black@example.com", phone: "111-222-3333", department: "IT", avatar: "https://i.pravatar.cc/40?img=7" },
    { id: 8, name: "Michael Scott", email: "michael.scott@example.com", phone: "999-555-1212", department: "HR", avatar: "https://i.pravatar.cc/40?img=8" },
    { id: 9, name: "Dwight Schrute", email: "dwight.schrute@example.com", phone: "888-777-6666", department: "Sales", avatar: "https://i.pravatar.cc/40?img=15" },
    { id: 10, name: "Pam Beesly", email: "pam.beesly@example.com", phone: "444-333-2222", department: "Marketing", avatar: "https://i.pravatar.cc/40?img=22" },
];

const itemsPerPage = 7;

const ManagerTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(managersData.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const displayedManagers = managersData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-left text-lg md:text-md font-semibold border-b border-gray-300">
                            <th className="py-3 px-4">NAME</th>
                            <th className="py-3 px-4">EMAIL</th>
                            <th className="py-3 px-4">PHONE</th>
                            <th className="py-3 px-4">DEPARTMENT</th>
                            <th className="py-3 px-4">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedManagers.map((manager) => (
                            <tr key={manager.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-3 px-4 flex items-center space-x-3">
                                    <img src={manager.avatar} alt="User" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="text-gray-800 text-md font-medium">{manager.name}</p>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-gray-500 text-md">{manager.email}</td>
                                <td className="py-3 px-4 text-gray-500 text-md">{manager.phone}</td>
                                <td className="py-3 px-4 text-gray-500 text-md">{manager.department}</td>
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
                <p>Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, managersData.length)} of {managersData.length} entries</p>
                <div className="flex space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-500 text-white hover:bg-gray-700"}`}
                    >
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
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`px-3 py-1 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-500 text-white hover:bg-gray-700"}`}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManagerTable;
