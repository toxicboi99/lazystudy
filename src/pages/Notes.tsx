import React, { useState } from 'react';
import { FileText, Upload, Check, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useNoteStore } from '../store/noteStore';

export default function Notes() {
  const { user } = useAuthStore();
  const { notes, addNote, approveNote, rejectNote, getNotes } = useNoteStore();
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    pdfUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      addNote({
        ...newNote,
        userId: user.id,
      });
      setShowUploadForm(false);
      setNewNote({ title: '', pdfUrl: '' });
    }
  };

  const approvedNotes = getNotes(true);
  const pendingNotes = getNotes(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold dark:text-white">Study Notes</h1>
        <button
          onClick={() => setShowUploadForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Upload size={20} />
          Upload Notes
        </button>
      </div>

      {showUploadForm && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Upload New Notes</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
              <input
                type="text"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">PDF URL</label>
              <input
                type="url"
                value={newNote.pdfUrl}
                onChange={(e) => setNewNote({ ...newNote, pdfUrl: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowUploadForm(false)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Upload Notes
              </button>
            </div>
          </form>
        </div>
      )}

      {user?.role === 'admin' && pendingNotes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Pending Approval</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingNotes.map((note) => (
              <div key={note.id} className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{note.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Status: Pending</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => approveNote(note.id)}
                      className="p-2 text-green-600 hover:bg-green-100 rounded-full"
                    >
                      <Check size={20} />
                    </button>
                    <button
                      onClick={() => rejectNote(note.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-full"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {approvedNotes.map((note) => (
          <div key={note.id} className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{note.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">Status: Approved</p>
              </div>
              <FileText size={24} className="text-blue-600" />
            </div>
            <a
              href={note.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}