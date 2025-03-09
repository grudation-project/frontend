import Tickets from "../../Components/Tickets/Tickets";
import Record from "../../Components/Record/Record";
import Manager from "../../Components/Manager/Manager";
import AdminDash from "../../Components/Dashboard/AdminDashBoard";
export const dashboardContent = {
    admin: { dashboard: <AdminDash />, tickets: <Tickets />, manager: <Manager />, service: <Record /> },
    user: { dashboard: <AdminDash />, tickets: <Tickets />, chat: <Record /> },
    manager: { dashboard: <AdminDash />, tickets: <Tickets />, technician: <Record />, chat: <Record /> },
    technician: { dashboard: <AdminDash />, tickets: <Tickets />, chat: <Record /> },
};