import { useState } from "react";
import { useUser } from "../../context/userContext"; // Import user role context
import Sidebar from "../../Components/SideBar/SideBar"; // Import Sidebar Component
import Navbar from "../../Components/Navbar/NavbarDash";
import { dashboardContent } from "./DashContent";
import getUserRole from "../../context/userType";
import { useGetProfileQuery } from "../../redux/feature/auth/authApiSlice";

export default function Home() {
  const { user } = useUser(); // Get user type from context
  const { data: response } = useGetProfileQuery(); // Fetch user profile
  const profile = response?.data; // Extract profile data from response

  const [activePage, setActivePage] = useState("dashboard");


  if (!user) return <p>Loading...</p>;

  return (

    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {/* Main Content */}
      <main className="sm:ml-64 w-full">
        <Navbar UserName={profile?.name} Image={profile?.avatar} setActivePage={setActivePage} />
        <div className="p-8 mt-14">
          {dashboardContent[getUserRole(user.type)]?.[activePage] || <p>Unauthorized</p>}
        </div>
      </main>
    </div>
  );
}
