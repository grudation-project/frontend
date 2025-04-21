import { useState } from "react";
import TicketsTable from "./components/TicketsTable";
import TicketActions from "./components/TicketActions";
import { useShowAllTicketsApiQuery } from "../../../redux/feature/Manager/Tickets/manager.ticket.apislice";
import { ToastContainer } from "react-toastify";

export default function MangerTickets() {
    const { data } = useShowAllTicketsApiQuery();
    console.log(data, "data from manager tickets");
    const ticketsData = data?.data || [];

    const [search, setSearch] = useState("");
    const [searchColumn, setSearchColumn] = useState("title"); // default column

    return (
        <div className="p-6 mx-auto">
            <h1 className="text-4xl font-bold text-gray-800">All Tickets</h1>

            <TicketActions
                search={search}
                setSearch={setSearch}
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
            />

            <TicketsTable
                ticketsData={ticketsData}
                search={search}
                searchColumn={searchColumn}
            />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                theme="light"
            />
        </div>
    );
}
