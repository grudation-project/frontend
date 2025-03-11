import { useState } from "react";
import TicketsTable from "./components/TicketsTable";
import TicketActions from "./components/TicketActions";

const initialTickets = [
    { key: "#302561", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
    { key: "#702651", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
    { key: "#264325", subject: "Lorem ipsum dolor sit amet", status: "Processing", date: "Mon, Dec 12" },
    { key: "#827562", subject: "Lorem ipsum dolor sit amet", status: "Pending", date: "Mon, Dec 12" },
];
const ticketsData = [
    { id: 1, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Completed", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=11", statusColor: "bg-green-100 text-green-600" },
    { id: 2, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Completed", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=2", statusColor: "bg-green-100 text-green-600" },
    { id: 3, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Completed", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=3", statusColor: "bg-green-100 text-green-600" },
    { id: 4, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Processing", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=4", statusColor: "bg-orange-100 text-orange-600" },
    { id: 5, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Pending", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=12", statusColor: "bg-gray-200 text-gray-600" },
    { id: 6, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Pending", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=6", statusColor: "bg-gray-200 text-gray-600" },
    { id: 7, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Pending", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=7", statusColor: "bg-gray-200 text-gray-600" },
    { id: 8, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Processing", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=8", statusColor: "bg-orange-100 text-orange-600" },
    { id: 9, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Processing", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=15", statusColor: "bg-orange-100 text-orange-600" },
    { id: 10, subject: "Lorem ipsum dolor sit amet", user: "Hazem Sharaf", status: "Pending", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=22", statusColor: "bg-gray-200 text-gray-600" },
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
            <TicketsTable ticketsData={ticketsData} />
        </div>
    );
}
