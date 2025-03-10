import { useState } from "react";
import { useUser } from "../../context/userContext"; // Import user role context
import Sidebar from "../../Components/SideBar/SideBar"; // Import Sidebar Component
import Navbar from "../../Components/Navbar/NavbarDash";
import { useLocation } from "react-router-dom";
import { dashboardContent } from "./DashContent";

export default function Home() {
  const { userType } = useUser(); // Get user type from context
  const [activePage, setActivePage] = useState("dashboard");
  const {state} = useLocation();
  console.log(state.data.user);


  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar activePage={ activePage} setActivePage={setActivePage}  />
      {/* Main Content */}
      <main className="sm:ml-64 w-full">
        <Navbar UserName={state.data.user.name} Image={state.data.user.avatar} />
        <div className="p-8 mt-14">
          {dashboardContent[userType]?.[activePage] || <p>Unauthorized</p>}
        </div>
      </main>
    </div>
  );
}
