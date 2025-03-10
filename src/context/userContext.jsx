import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const type = Number(localStorage.getItem("user"));
  let role = "";
  switch (type) {
    case 0:
      role = "admin";
      break;
    case 1:
      role = "user";
      break;
    case 2:
      role = "manager";
      break;
    case 3:
      role = "technician";
      break;
  }
  const [userType, setUserType] = useState(role) // Change based on login

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
