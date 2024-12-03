import React from 'react';
import { FileText, Video, Edit3 } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      id: 'pdf-editor',
      title: 'PDF Editor',
      description: 'Edit, merge, and split PDF files online',
      icon: FileText,
    },
    {
      id: 'video-downloader',
      title: 'Video Downloader',
      description: 'Download videos from various platforms',
      icon: Video,
    },
    {
      id: 'word-editor',
      title: 'Word Editor',
      description: 'Create and edit documents online',
      icon: Edit3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tools</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div key={tool.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon size={32} className="text-blue-600" />
                <h3 className="text-xl font-bold">{tool.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Open Tool
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}