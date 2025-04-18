import AdminDash from "../../Components/Dashboard/AdminDashBoard";
import TechniDash from "../../Components/Dashboard/TechniDash";
import MangerDash from "../../Components/Dashboard/MangerDash";
import UserDash from "../../Components/Dashboard/UserDash";
import UserTickets from "../../Components/Tickets/UserTickets";
import AdminTickets from "../../Components/Tickets/AdminTickets";
import ManagTickets from "../../Components/Tickets/ManagTickets";
import TechniTickets from "../../Components/Tickets/TecniTickets";
import Manager from "../../Components/Manager/Manager";
import Service from "../../Components/service/Service";
import ChatUI from "../../Components/Chat/ChatUi";
import Profile from "../../Components/Profile/Profile";

export const dashboardContent = {
    admin: { dashboard: <AdminDash />, tickets: <AdminTickets />, manager: <Manager />, service: <Service />, profile: <Profile /> },
    user: { dashboard: <UserDash />, tickets: <UserTickets />, chat: <ChatUI />, profile: <Profile /> },
    manager: { dashboard: <MangerDash />, tickets: <ManagTickets />, technician: <Service />, chat: <ChatUI />, profile: <Profile /> },
    technician: { dashboard: <TechniDash />, tickets: <TechniTickets />, chat: <ChatUI />, profile: <Profile /> },
};