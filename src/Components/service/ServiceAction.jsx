/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";

const ServiceActions = ({ search, setSearch, itemsPerPage, setItemsPerPage, addService }) => {
    return (
        <div className="p-0 mb-6 mt-6 flex flex-wrap items-center justify-between gap-4">

            {/* Search Box with Icon */}
            <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search Services"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border pl-10 pr-3 py-2.5 rounded-[15px] w-full"
                />
            </div>

            <div className="flex items-center gap-6">
                {/* Items Per Page Dropdown */}
                <div className="flex items-center gap-2">
                    <select
                        className="border p-2.5 rounded-[15px]"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                        {[10, 25, 50, 100].map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>

                {/* "New Service" Button */}
                <Link
                    to='/AddService'
                    className="bg-black text-white px-4 py-2 md:py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
                    onClick={addService}
                >
                    <FaPlus className="w-4 h-4" /> New Service
                </Link>
            </div>

        </div>
    );
};

export default ServiceActions;
