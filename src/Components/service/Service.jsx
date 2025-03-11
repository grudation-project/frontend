import { useState } from "react";
import ServiceActions from "./ServiceAction";
import ServiceTable from "./ServiceTable";

const Service = () => {
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="p-6 mx-auto">
      <h1 className="text-4xl  font-bold text-gray-800 ">Add Services</h1>
      <ServiceActions
        search={search}
        setSearch={setSearch}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        addService={() => console.log("Adding new service...")}
      />
      <ServiceTable />
    </div>
  );
};

export default Service;
