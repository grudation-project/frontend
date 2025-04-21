import AdminDash from "../../Components/Dashboard/AdminDashBoard";
import TechniDash from "../../Components/Dashboard/TechniDash";
import MangerDash from "../../Components/Dashboard/MangerDash";
import UserDash from "../../Components/Dashboard/UserDash";
import UserTickets from "../../Components/Tickets/UserTickets";
import AdminTickets from "../../Components/Admin-Ticket/AdminTickets";
import ManagerTickets from "../../Components/Manager/Tickets/ManagerTickets";
import TechniTickets from "../../Components/Technician/Tickets/TechnicianTickets";
import Manager from "../../Components/Admin-Manager/Manager";
import Service from "../../Components/Admin-Service/Service";
import ChatUI from "../../Components/Chat/ChatUi";
import Profile from "../../Components/Profile/Profile";
import Technician from "../../Components/Manager/Technician/Technician";

export const dashboardContent = {
    admin: { dashboard: <AdminDash />, tickets: <AdminTickets />, manager: <Manager />, service: <Service />, profile: <Profile /> },
    user: { dashboard: <UserDash />, tickets: <UserTickets />, chat: <ChatUI />, profile: <Profile /> },
    manager: { dashboard: <MangerDash />, tickets: <ManagerTickets />, technician: <Technician />, chat: <ChatUI />, profile: <Profile /> },
    technician: { dashboard: <TechniDash />, tickets: <TechniTickets />, chat: <ChatUI />, profile: <Profile /> },
};