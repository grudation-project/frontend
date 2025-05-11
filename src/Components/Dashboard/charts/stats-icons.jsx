import { FaTicketAlt, FaTasks, FaCheckCircle, FaSpinner, FaUsers, FaTools } from "react-icons/fa";

const getIconByLabel = (label) => {
  switch (label) {
    case "All tickets":
      return <FaTicketAlt size={20} className="text-blue-900" />;
    case "Open tickets":
      return <FaTasks size={20} className="text-blue-900" />;
    case "Closed tickets":
      return <FaCheckCircle size={20} className="text-blue-900" />;
    case "In Progress tickets":
      return <FaSpinner size={20} className="text-blue-900 animate-spin" />;
    case "Managers Count" :
    case "Technicians Count":
      return <FaUsers size={20} className="text-blue-900" />;
    case "Services Count":
      return <FaTools size={20} className="text-blue-900" />;
    default:
      return <FaTicketAlt size={20} className="text-blue-900" />;
  }
};

export default getIconByLabel;