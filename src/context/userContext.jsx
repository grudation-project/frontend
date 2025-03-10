import { createContext, useContext, useState } from "react";
import getUserRole from "./userType";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(getUserRole(1)); 
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ userType, setUserType , user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
