import React, { useState } from 'react';
import { Book, Upload } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useCourseStore } from '../store/courseStore';

export default function Courses() {
  const { user } = useAuthStore();
  const { courses, addCourse } = useCourseStore();
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    thumbnail: '',
    theme: 'blue',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse({
      ...newCourse,
      createdBy: user?.id || '',
    });
    setShowUploadForm(false);
    setNewCourse({ title: '', description: '', thumbnail: '', theme: 'blue' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Premium Courses</h1>
        {user?.role === 'admin' && (
          <button
            onClick={() => setShowUploadForm(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Upload size={20} />
            Upload Course
          </button>
        )}
      </div>

      {showUploadForm && user?.role === 'admin' && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Upload New Course</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
              <input
                type="url"
                value={newCourse.thumbnail}
                onChange={(e) => setNewCourse({ ...newCourse, thumbnail: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Theme</label>
              <select
                value={newCourse.theme}
                onChange={(e) => setNewCourse({ ...newCourse, theme: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowUploadForm(false)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Upload Course
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{course.title}</h3>
              <p className="text-gray-600 mb-4 dark:text-gray-300">{course.description}</p>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                <Book size={20} />
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}