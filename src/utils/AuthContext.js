import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin: admin[0] });
  }, []);

  const updateUserData = (updatedEmployees) => {
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }));
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };
  
  return (
    <AuthContext.Provider value={{ userData, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
