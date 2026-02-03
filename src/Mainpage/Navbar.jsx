import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setActivePage }) => {
  const navigate = useNavigate();

  const isAuthenticated = true;

  const navItems = [
    { id: "health-overview", label: "Health Overview", icon: "🏥" },
    { id: "medication", label: "Medication", icon: "💊" },
    { id: "education", label: "Education", icon: "📚" },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold text-indigo-600 cursor-pointer"
              onClick={() => setActivePage("health-overview")}
            >
              MediBridge
            </h1>
          </div>

          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center space-x-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setActivePage("account")}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center space-x-2"
                >
                  <span>👤</span>
                  <span>Account</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
