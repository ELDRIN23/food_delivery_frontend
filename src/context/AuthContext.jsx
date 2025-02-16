import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("auth")) || false;
  });

  const [role, setRole] = useState(() => {
    return JSON.parse(localStorage.getItem("role")) || "guest";
  });

  const [name, setName] = useState(() => {
    return JSON.parse(localStorage.getItem("name")) || "Guest";
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isLoggedIn)); // ✅ Use "auth" instead of "token"
    localStorage.setItem("role", JSON.stringify(role));
    localStorage.setItem("name", JSON.stringify(name));
  }, [isLoggedIn, role, name]); // ✅ Add `name` to dependencies

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, role, setRole, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
