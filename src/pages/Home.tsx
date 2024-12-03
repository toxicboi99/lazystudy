import React from 'react';
import HomeSlider from '../components/HomeSlider';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HomeSlider />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Featured Courses</h3>
          <p>Explore our premium courses taught by industry experts.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Study Materials</h3>
          <p>Access high-quality notes and study resources.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Coding Tools</h3>
          <p>Utilize our collection of development tools and resources.</p>
        </div>
      </div>
    </div>
  );
}