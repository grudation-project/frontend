import { useState } from "react";
import { Link } from "react-router-dom";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import { Badge } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Dropdown arrow
import NotificationModal from "../Notifications/Notification"; // Import the NotificationModal component
import { useGetUnreadNotifiQuery } from "../../redux/feature/notifications/notifi.apislice";

// eslint-disable-next-line react/prop-types
export default function Navbar({ UserName, Image, setActivePage }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { data , refetch} = useGetUnreadNotifiQuery();
  const unreadCount = data?.data?.unreadNotificationsCount;

  return (
    <nav className="fixed top-0 left-64 h-20 z-50 w-[calc(100%-16rem)] bg-white border-b border-gray-200 px-6 py-3 shadow-md flex items-center justify-between">
      {/* Left Section: Greeting & Date */}
      <div>
        <p className="text-lg font-semibold text-gray-700">Hello {UserName}</p>
        <p className="text-xs text-gray-500">December 12TH 2024</p>
      </div>

      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button onClick={() => {setIsNotificationOpen((prev) => !prev)
          refetch(); // Refetch notifications when the button is clicked
        }} className="relative text-gray-500 hover:text-gray-700">
          <Badge
            badgeContent={unreadCount}
            color="error"
            overlap="circular"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <AddAlertIcon />
          </Badge>
        </button>
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-300"
              src={Image}
              alt="User"
            />
            <span className="text-gray-700 font-medium">{UserName}</span>
            <ExpandMoreIcon className="text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
              <button
                onClick={() => setActivePage("profile")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </button>
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                to="/auth/login"
                className="block px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
      {isNotificationOpen && (
        <NotificationModal />
      )}
    </nav>
  );
}
