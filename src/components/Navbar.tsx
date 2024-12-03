import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import UserProfile from './UserProfile';
import { useAuthStore } from '../store/authStore';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Paid Courses', protected: true },
    { path: '/notes', label: 'Notes', protected: true },
    { path: '/uni-code', label: 'UNI Code', protected: true },
    { path: '/tools', label: 'Tools', protected: true },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-xl font-bold">
              EduPlatform
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                (!item.protected || isAuthenticated) && (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              {isAuthenticated ? (
                <UserProfile />
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {isAuthenticated && <UserProfile />}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              (!item.protected || isAuthenticated) && (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            {!isAuthenticated && (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}