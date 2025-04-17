import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
    useShowAllServicesApiQuery,
    useDeleteServiceApiMutation,
    useUpdateServiceApiMutation,
} from "../../redux/feature/admin/Services/admin.service.apislice";
import { toast } from "react-toastify";
import EditServiceModal from "./EditService";

const itemsPerPage = 9;

const ServicesTable = () => {
    const { data, refetch } = useShowAllServicesApiQuery();
    const [deleteService] = useDeleteServiceApiMutation();
    const [updateService] = useUpdateServiceApiMutation();

    const servicesData = data?.data || [];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(servicesData.length / itemsPerPage);

    const [editingService, setEditingService] = useState(null);
    const [editName, setEditName] = useState("");

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this service?")) {
            try {
                await deleteService(id).unwrap();
                toast.success("Service deleted successfully");
                refetch();
            } catch (err) {
                toast.error("Failed to delete service");
                console.error(err);
            }
        }
    };

    const handleEdit = (service) => {
        setEditingService(service);
        setEditName(service.name);
    };

    const handleEditSubmit = async () => {
        if (!editName.trim()) return;
        try {
            await updateService({
                id: editingService.id,
                body: { name: editName },
            }).unwrap();
            toast.success("Service updated successfully");
            setEditingService(null);
            refetch();
        } catch (err) {
            toast.error("Failed to update service");
            console.error(err);
        }
    };

    const displayedServices = servicesData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
                            <tr
                                key={service.id}
                                className="border-b border-gray-200 hover:bg-gray-100 transition"
                            >
                                <td className="py-3 px-4 text-gray-800 text-md font-medium">
                                    #{service.id}
                                </td>
                                <td className="py-3 px-4 text-gray-800 text-md font-medium">
                                    {service.name}
                                </td>
                                <td className="py-3 px-4 flex items-center space-x-3">
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FaTrash />
                                    </button>
                                    <button
                                        onClick={() => handleEdit(service)}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        <FaEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                <p>
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, servicesData.length)} of{" "}
                    {servicesData.length} entries
                </p>
                <div className="flex space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`px-3 py-1 rounded-md ${currentPage === 1
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-gray-500 text-white hover:bg-gray-700"
                            }`}
                    >
                        &lt;
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 rounded-md ${currentPage === i + 1
                                ? "bg-blue-700 text-white"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`px-3 py-1 rounded-md ${currentPage === totalPages
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-gray-500 text-white hover:bg-gray-700"
                            }`}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <EditServiceModal
                show={editingService !== null}
                onClose={() => setEditingService(null)}
                editName={editName}
                setEditName={setEditName}
                onSave={handleEditSubmit}
            />
        </div>
    );
};

export default ServicesTable;
