import Record from "../../Components/Record/Record";
import Manager from "../../Components/Manager/Manager";
import AdminDash from "../../Components/Dashboard/AdminDashBoard";
import TechniDash from "../../Components/Dashboard/TechniDash";
import MangerDash from "../../Components/Dashboard/MangerDash";
import UserDash from "../../Components/Dashboard/UserDash";
import UserTickets from "../../Components/Tickets/UserTickets";
import AdminTickets from "../../Components/Tickets/AdminTickets";
import ManagTickets from "../../Components/Tickets/ManagTickets";
import TechniTickets from "../../Components/Tickets/TecniTickets";


export const dashboardContent = {
    admin: { dashboard: <AdminDash />, tickets: <AdminTickets />, manager: <Manager />, service: <Record /> },
    user: { dashboard: <UserDash />, tickets: <UserTickets />, chat: <Record /> },
    manager: { dashboard: <MangerDash />, tickets: <ManagTickets />, technician: <Record />, chat: <Record /> },
    technician: { dashboard: <TechniDash />, tickets: <TechniTickets />, chat: <Record /> },
};