import { useState } from "react";
import ManagerActions from "./components/MangerAction";
import ManagerTable from "./components/MangerTable";

const initialManagers = [
  { key: "#302561", name: "hazem", email: "john.doe@example.com", phone: "123-456-7890", department: "IT" },
  { key: "#702651", name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210", department: "HR" },
  { key: "#264325", name: "Alice Johnson", email: "alice.johnson@example.com", phone: "555-123-4567", department: "Finance" },
  { key: "#827562", name: "Bob Brown", email: "bob.brown@example.com", phone: "444-987-6543", department: "Marketing" },
];

export default function Manager() {
  const [search, setSearch] = useState("");
  const [managers, setManagers] = useState(initialManagers);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredManagers = managers.filter(manager =>
    manager.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteManager = (key) => {
    setManagers(managers.filter(manager => manager.key !== key));
  };

  return (
    <div className="p-6 mx-auto">
      <h1 className="text-4xl  font-bold text-gray-800 ">Add Managers</h1>
      <ManagerActions
        search={search}
        setSearch={setSearch}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />

      {/* Manager Table */}
      <ManagerTable
        managers={filteredManagers}
        deleteManager={deleteManager}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}
