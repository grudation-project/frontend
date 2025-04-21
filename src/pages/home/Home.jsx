import { useState, useEffect } from "react";
import { useUser } from "../../context/userContext";
import Sidebar from "../../Components/SideBar/SideBar";
import Navbar from "../../Components/Navbar/NavbarDash";
import { dashboardContent } from "./DashContent";
import getUserRole from "../../context/userType";
import { useGetProfileQuery } from "../../redux/feature/auth/authApiSlice";
import LoadingSpinner from "../../common/Loadingspinner";

export default function Home() {
  const { user } = useUser();
  const { data: response, refetch, isFetching } = useGetProfileQuery();
  const profile = response?.data;

  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || "dashboard";
  });

  // Save active page in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  // Refetch profile when user changes (e.g., after login)
  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  if (!user || isFetching) return <LoadingSpinner />;

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="sm:ml-64 w-full">
        <Navbar UserName={profile?.name} Image={profile?.avatar} setActivePage={setActivePage} />
        <div className="p-8 mt-14">
          {dashboardContent[getUserRole(user.type)]?.[activePage] || <p>Unauthorized</p>}
        </div>
      </main>
    </div>
  );
}
