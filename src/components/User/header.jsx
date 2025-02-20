import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, setRole, setName } = useContext(AuthContext);

  // Close menu & dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole("guest");
    setName("Guest");
    localStorage.removeItem("auth");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <header className="bg-gray-950 sticky top-0 left-0 z-50 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-500">
          Foodie
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
              <Link to="/dishes" className="hover:text-yellow-400 transition">Dishes</Link>
              <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
              <Link to="/cart" className="hover:text-yellow-400 transition">Cart</Link>
              <Link to="/account" className="hover:text-yellow-400 transition">Account</Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-5 py-2 rounded-md transition"
              >
                Join Us
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40 transition-all duration-300">
                  <li><Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link></li>
                  <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link></li>
                  {/* <li><Link to="/Restaurant" className="block px-4 py-2 hover:bg-gray-200">Restaurant</Link></li> */}
                  <li><Link to="/admin-login" className="block px-4 py-2 hover:bg-gray-200">Admin</Link></li>
                </ul>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-6">
          <ul className="space-y-3">
            <li><Link to="/" className="block text-white hover:text-yellow-400">Home</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/about" className="block text-white hover:text-yellow-400">About</Link></li>
                <li><Link to="/dishes" className="block text-white hover:text-yellow-400">Dishes</Link></li>
                <li><Link to="/contact" className="block text-white hover:text-yellow-400">Contact</Link></li>
                <li><Link to="/cart" className="block text-white hover:text-yellow-400">Cart</Link></li>
                <li><Link to="/account" className="block text-white hover:text-yellow-400">Account</Link></li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block w-full text-left text-white hover:text-yellow-400"
                >
                  Join Us
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 bg-white text-black shadow-lg rounded-md">
                    <li><Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link></li>
                    <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link></li>
                    <li><Link to="/Restaurant" className="block px-4 py-2 hover:bg-gray-200">Restaurant</Link></li>
                    <li><Link to="/admin-login" className="block px-4 py-2 hover:bg-gray-200">Admin</Link></li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};
