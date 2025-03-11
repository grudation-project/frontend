import { useState } from "react";
import TicketsTable from "./components/TicketsTable";
import TicketActions from "./components/TicketActions";

const initialTickets = [
    { key: "#302561", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
    { key: "#702651", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
    { key: "#264325", subject: "Lorem ipsum dolor sit amet", status: "Processing", date: "Mon, Dec 12" },
    { key: "#827562", subject: "Lorem ipsum dolor sit amet", status: "Pending", date: "Mon, Dec 12" },
];



export default function AdminTickets() {
    const [search, setSearch] = useState("");
    const [tickets, setTickets] = useState(initialTickets);
    const [newTicketSubject, setNewTicketSubject] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const addTicket = () => {
        if (!newTicketSubject.trim()) return;
        const newTicket = {
            key: `#${Math.floor(Math.random() * 1000000)}`,
            subject: newTicketSubject,
            status: "Pending",
            date: "Just now",
        };
        setTickets([...tickets, newTicket]);
        setNewTicketSubject("");
    };

    return (
        <div className="p-6 mx-auto">
            <h1 className="text-4xl  font-bold text-gray-800 ">All Tickets</h1>
            <TicketActions search={search} setSearch={setSearch} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} addTicket={addTicket} tickets={tickets} />
            <TicketsTable />
        </div>
    );
}
