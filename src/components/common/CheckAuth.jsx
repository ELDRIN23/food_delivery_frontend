import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  console.log(location.pathname);

  if (
    !isAuthenticated &&
    location.pathname !== "/login" &&  
    location.pathname !== "/signup" &&  
    location.pathname !== "/"
  ) {
    return <Navigate to={user === "admin" ? "/admin-login" : "/login"} />;
  }

  if (
    isAuthenticated &&
    (location.pathname === "/admin-login" || location.pathname === "/signup")
  ) {
    return <Navigate to={user === "admin" ? "/admin" : "/"} />;
  }

  if (
    isAuthenticated &&
    user !== "admin" &&
    location.pathname.startsWith("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user === "admin" &&
    location.pathname.startsWith("/shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
};

export default CheckAuth;






