import { useState } from "react";
// import TicketsTable from "./components/TicketsTable";
import TicketActions from "./components/TicketActions";
// import {useUser} from "../../context/userContext"

const initialTickets = [
    { key: "#302561", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
    { key: "#702651", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
    { key: "#264325", subject: "Lorem ipsum dolor sit amet", status: "Processing", date: "Mon, Dec 12" },
    { key: "#827562", subject: "Lorem ipsum dolor sit amet", status: "Pending", date: "Mon, Dec 12" },
];
// const ticketsData = [
//     { id: 2, subject: "problem 1", user: `${JSON.parse(localStorage.getItem("user")).name}`, status: "Completed", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=2", statusColor: "bg-green-100 text-green-600" },
//     { id: 2, subject: "problem 2", user: `${JSON.parse(localStorage.getItem("user")).name}`, status: "Completed", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=2", statusColor: "bg-green-100 text-green-600" },
//     { id: 2, subject: "problem 3", user: `${JSON.parse(localStorage.getItem("user")).name}`, status: "Completed", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=2", statusColor: "bg-green-100 text-green-600" },
//     { id: 2, subject: "problem 4", user: `${JSON.parse(localStorage.getItem("user")).name}`, status: "Completed", date: "Mon, Dec 12", avatar: "https://i.pravatar.cc/40?img=2", statusColor: "bg-green-100 text-green-600" },

// ];



export default function UserTickets() {
    const [search, setSearch] = useState("");
    const [tickets, setTickets] = useState(initialTickets);
    const [newTicketSubject, setNewTicketSubject] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    // const { user } = useUser();

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
            {/* <TicketsTable ticketsData={ticketsData} /> */}
        </div>
    );
}
