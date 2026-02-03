
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = true; 

  const navItems = [
    { path: '/health-overview', label: 'Health Overview', icon: '🏥' },
    { path: '/medication', label: 'Medication', icon: '💊' },
    { path: '/education', label: 'Education', icon: '📚' },
  ];

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>
                MediBridge
              </h1>
            </div>
          </div>
          
        
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          )}
          
       
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <span>👤</span>
                  <span>Account</span>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
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