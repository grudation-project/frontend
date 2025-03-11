import AdminDash from "../../Components/Dashboard/AdminDashBoard";
import TechniDash from "../../Components/Dashboard/TechniDash";
import MangerDash from "../../Components/Dashboard/MangerDash";
import UserDash from "../../Components/Dashboard/UserDash";
import UserTickets from "../../Components/Tickets/UserTickets";
import AdminTickets from "../../Components/Tickets/AdminTickets";
import ManagTickets from "../../Components/Tickets/ManagTickets";
import TechniTickets from "../../Components/Tickets/TecniTickets";
import AdminManager from "../../Components/Manager/Manager";
import Service from "../../Components/service/Service";


export const dashboardContent = {
    admin: { dashboard: <AdminDash />, tickets: <AdminTickets />, manager: <AdminManager />, service: <Service /> },
    user: { dashboard: <UserDash />, tickets: <UserTickets />, chat: <Service /> },
    manager: { dashboard: <MangerDash />, tickets: <ManagTickets />, technician: <Service />, chat: <Service /> },
    technician: { dashboard: <TechniDash />, tickets: <TechniTickets />, chat: <Service /> },
};