import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Hook to navigate on logout
  const { isLoggedIn, setIsLoggedIn, setRole, setName } = useContext(AuthContext);

  // Close dropdown & menu on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  // Logout Function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole("guest");
    setName("Guest");
    localStorage.removeItem("auth");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/"); // ✅ Redirect to home page after logout
  };

  return (
    <div className="navbar bg-primary text-primary-content p-4 shadow-lg">
      <div className="flex justify-between w-full items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-purple-700">
          Foodie
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg items-center">
          <Link to="/" className="hover:text-purple-700">Home</Link>
          {isLoggedIn && (
            <>
              <Link to="/about" className="hover:text-purple-700">About</Link>
              <Link to="/dishes" className="hover:text-purple-700">Dishes</Link>
              <Link to="/contact" className="hover:text-purple-700">Contact us</Link>
              <Link to="/cart" className="hover:text-purple-700">Cart</Link>
              <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Logout</button> {/* ✅ Red button for logout */}
            </>
          )}

          {/* Dropdown Menu */}
          {!isLoggedIn && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-purple-800 text-white hover:bg-purple-900 px-5 py-2 font-medium rounded-md"
              >
                Join Us
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
                  <li><Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link></li>
                  <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link></li>
                  <li><Link to="/Restaurant" className="block px-4 py-2 hover:bg-gray-200">Restaurant</Link></li>
                  <li><Link to="/admin" className="block px-4 py-2 hover:bg-gray-200">Admin</Link></li>
                </ul>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-2 p-4 bg-white text-black shadow-lg rounded-md">
          <li><Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link></li>
          {isLoggedIn && (
            <>
              <li><Link to="/about" className="block px-4 py-2 hover:bg-gray-200">About</Link></li>
              <li><Link to="/dishes" className="block px-4 py-2 hover:bg-gray-200">Dishes</Link></li>
              <li><Link to="/contact" className="block px-4 py-2 hover:bg-gray-200">Contact us</Link></li>
              <li><Link to="/cart" className="block px-4 py-2 hover:bg-gray-200">Cart</Link></li>
              <li><button onClick={handleLogout} className="block w-full text-left px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Logout</button></li> {/* ✅ Red button for logout on mobile */}
            </>
          )}
          {!isLoggedIn && (
            <li>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left px-4 py-2 hover:bg-gray-200">
                Join Us
              </button>
              {dropdownOpen && (
                <ul className="mt-1 bg-white text-black shadow-lg rounded-md">
                  <li><Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link></li>
                  <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link></li>
                  <li><Link to="/Restaurant" className="block px-4 py-2 hover:bg-gray-200">Restaurant</Link></li>
                  <li><Link to="/admin" className="block px-4 py-2 hover:bg-gray-200">Admin</Link></li>
                </ul>
              )}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};










// import React, { useState, useEffect, useContext } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// export const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate(); // ✅ Hook to navigate on logout
//   const { isLoggedIn, setIsLoggedIn, setRole, setName } = useContext(AuthContext);

//   // Close dropdown & menu on route change
//   useEffect(() => {
//     setDropdownOpen(false);
//     setMenuOpen(false);
//   }, [location.pathname]);

//   // Logout Function
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setRole("guest");
//     setName("Guest");
//     localStorage.removeItem("auth");
//     localStorage.removeItem("role");
//     localStorage.removeItem("name");
//     navigate("/"); // ✅ Redirect to home page after logout
//   };

//   return (
//     <div className="navbar bg-primary text-primary-content p-4 shadow-lg">
//       <div className="flex justify-between w-full items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold hover:text-purple-700">
//           Foodie
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-8 text-lg items-center">
//           <Link to="/" className="hover:text-purple-700">Home</Link>
//           {isLoggedIn && (
//             <>
//               <Link to="/about" className="hover:text-purple-700">About</Link>
//               <Link to="/dishes" className="hover:text-purple-700">Dishes</Link>
//               <Link to="/contact" className="hover:text-purple-700">Contact</Link>
//               <Link to="/cart" className="hover:text-purple-700">Cart</Link>
//               <button onClick={handleLogout} className="hover:text-purple-700">Logout</button> {/* ✅ Button with logout function */}
//             </>
//           )}

//           {/* Dropdown Menu */}
//           {!isLoggedIn && (
//             <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="bg-purple-800 text-white hover:bg-purple-900 px-5 py-2 font-medium rounded-md"
//               >
//                 Join Us
//               </button>
//               {dropdownOpen && (
//                 <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
//                   <li><Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link></li>
//                   <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link></li>
//                 </ul>
//               )}
//             </div>
//           )}
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <ul className="md:hidden mt-2 p-4 bg-white text-black shadow-lg rounded-md">
//           <li><Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link></li>
//           {isLoggedIn && (
//             <>
//               <li><Link to="/about" className="block px-4 py-2 hover:bg-gray-200">About</Link></li>
//               <li><Link to="/dishes" className="block px-4 py-2 hover:bg-gray-200">Dishes</Link></li>
//               <li><Link to="/contact" className="block px-4 py-2 hover:bg-gray-200">Contact</Link></li>
//               <li><Link to="/cart" className="block px-4 py-2 hover:bg-gray-200">Cart</Link></li>
//               <li><button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button></li> {/* ✅ Logout button for mobile */}
//             </>
//           )}
//           {!isLoggedIn && (
//             <li>
//               <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left px-4 py-2 hover:bg-gray-200">
//                 Join Us
//               </button>
//               {dropdownOpen && (
//                 <ul className="mt-1 bg-white text-black shadow-lg rounded-md">
//                   <li><Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link></li>
//                   <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link></li>
//                 </ul>
//               )}
//             </li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };




