import React from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 focus:outline-none">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <span className="hidden md:block">{user.name}</span>
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
        <div className="px-4 py-2 text-sm text-gray-700 border-b">
          <div className="font-medium">{user.name}</div>
          <div className="text-gray-500">{user.email}</div>
        </div>
        {user.role === 'admin' && (
          <a
            href="/admin"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin Dashboard
          </a>
        )}
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </button>
      </div>
    </div>
  );
}