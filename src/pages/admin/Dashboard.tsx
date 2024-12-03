import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, Code, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  if (!user || user.role !== 'admin') {
    navigate('/login');
    return null;
  }

  const adminActions = [
    {
      title: 'Manage Courses',
      description: 'Upload and manage course content',
      icon: Upload,
      action: () => navigate('/admin/courses'),
    },
    {
      title: 'Review Notes',
      description: 'Approve or reject user-submitted notes',
      icon: FileText,
      action: () => navigate('/admin/notes'),
    },
    {
      title: 'Code Snippets',
      description: 'Manage programming examples',
      icon: Code,
      action: () => navigate('/admin/code'),
    },
    {
      title: 'Site Settings',
      description: 'Configure platform settings',
      icon: Settings,
      action: () => navigate('/admin/settings'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="text-gray-600">Welcome, {user.name}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.action}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Icon size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="text-gray-600">{action.description}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-semibold">New Course Uploaded</p>
                <p className="text-sm text-gray-600">Web Development Basics</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-semibold">Note Approval Pending</p>
                <p className="text-sm text-gray-600">Data Structures Notes</p>
              </div>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}