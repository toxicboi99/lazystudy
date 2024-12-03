import React from 'react';
import { Code } from 'lucide-react';

export default function UniCode() {
  const codeSnippets = [
    {
      id: '1',
      title: 'Binary Search Implementation',
      language: 'Python',
      code: 'def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1',
    },
    {
      id: '2',
      title: 'Quick Sort Algorithm',
      language: 'Java',
      code: 'public void quickSort(int[] arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">UNI Code</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <Code size={20} />
          Add Code Snippet
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {codeSnippets.map((snippet) => (
          <div key={snippet.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 border-b">
              <h3 className="text-xl font-bold">{snippet.title}</h3>
              <p className="text-gray-600">Language: {snippet.language}</p>
            </div>
            <pre className="p-4 bg-gray-900 text-white overflow-x-auto">
              <code>{snippet.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}