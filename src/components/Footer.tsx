import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">EduPlatform</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering education through technology and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Courses</Link></li>
              <li><Link to="/notes" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Notes</Link></li>
              <li><Link to="/tools" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by EduPlatform © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}