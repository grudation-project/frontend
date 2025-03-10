import { useState } from "react";
import { useUser } from "../../context/userContext"; // Import user role context
import Sidebar from "../../Components/SideBar/SideBar"; // Import Sidebar Component
import Navbar from "../../Components/Navbar/NavbarDash";
import { dashboardContent } from "./DashContent";
import getUserRole from "../../context/userType";

export default function Home() {
  const { userType, user } = useUser(); // Get user type from context
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {/* Main Content */}
      <main className="sm:ml-64 w-full">
        <Navbar UserName={user.name} Image={user.avatar} />
        <div className="p-8 mt-14">
          {dashboardContent[getUserRole(userType)]?.[activePage] || <p>Unauthorized</p>}
        </div>
      </main>
    </div>
  );
}
