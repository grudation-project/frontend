/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext"; // Import user role context
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger Icon
import CloseIcon from "@mui/icons-material/Close"; // Close Icon
import Logo from "../../images/logo bg-black.png";
import { menuConfig } from "./menuConfig";
import getUserRole from "../../context/userType";

export default function Sidebar({ activePage, setActivePage }) {
    const { user } = useUser(); // Get user role from context
    const [isOpen, setIsOpen] = useState(false); // Sidebar state for mobile
    const navigate = useNavigate(); // Navigation hook

    const handleSignOut = () => {
        localStorage.clear(); // Clear localStorage
        navigate("/auth/login"); // Navigate to login page
    };

    return (
        <>
            {/* Hamburger Button for Mobile */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-5 bg-[#03091E] text-[#B3B3B3] border-r border-gray-700 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
            >
                <div className="h-full px-3 pb-4 overflow-y-auto flex flex-col justify-between">
                    <div>
                        {/* Logo */}
                        <div className="flex justify-between items-center px-2">
                            <img src={Logo} className="w-50 mb-6" alt="Logo" />
                        </div>

                        {/* Sidebar Menu */}
                        <ul className="space-y-2 font-medium mt-8">
                            {menuConfig[getUserRole(user.type)]?.map((item) => (
                                <li key={item.id} className="mt-5">
                                    <button
                                        onClick={() => {
                                            setActivePage(item.id);
                                            setIsOpen(false); // Close sidebar after selecting
                                        }}
                                        className={`flex w-full items-center p-3.5 rounded-lg transition 
                    ${activePage === item.id ? "bg-[#051754] text-white" : "hover:bg-[#051754]"}`}
                                    >
                                        {item.icon}
                                        <span className="ms-3">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logout Button */}
                    <div className="mb-4">
                        <button
                            onClick={handleSignOut}
                            className="flex items-center p-2 rounded-lg text-red-600 transition hover:bg-[#051754] hover:text-white"
                        >
                            <ExitToAppIcon />
                            <span className="ms-3">Sign out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay for Mobile (when sidebar is open) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
}
