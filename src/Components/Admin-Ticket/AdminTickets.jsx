import { useState } from "react";
import TicketsTable from "./components/TicketsTable";
import TicketActions from "./components/TicketActions";
import { useGetAllTicketsApiQuery } from "../../redux/feature/admin/Tickets/admin.ticket.apislice";

export default function AdminTickets() {
    const { data } = useGetAllTicketsApiQuery();
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
        </div>
    );
}
