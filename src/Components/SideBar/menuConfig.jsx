import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { ChatBubble } from "@mui/icons-material";
// Sidebar Menu Configuration
export const menuConfig = {
  admin: [
    { id: "dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { id: "tickets", icon: <ConfirmationNumberIcon />, label: "All Tickets" },
    { id: "manager", icon: <ManageAccountsIcon />, label: "Add Manager" },
    { id: "service", icon: <RadioButtonCheckedIcon />, label: "Add Service" },
  ],
  user: [
    { id: "dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { id: "tickets", icon: <ConfirmationNumberIcon />, label: "My Tickets" },
    { id: "chat", icon: <ChatBubble />, label: "Chat" },
  ],
  manager: [
    { id: "dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { id: "tickets", icon: <ConfirmationNumberIcon />, label: "Manage Tickets" },
    { id: "technician", icon: <ManageAccountsIcon />, label: "Add Technician" },
    { id: "chat", icon: <ChatBubble/>, label: "Chat" },

  ],
  technician: [
    { id: "dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { id: "tickets", icon: <ConfirmationNumberIcon />, label: "Assigned Tickets" },
    { id: "chat", icon: <ChatBubble />, label: "Chat" },
  ],
};

