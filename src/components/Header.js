import React from 'react';
import { FiSearch, FiCalendar, FiMessageCircle, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex-shrink-0 bg-neutral-white border-b border-neutral-border p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="relative w-1/3">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search for anything..." 
          className="bg-neutral-bg w-full pl-10 pr-4 py-2 rounded-md focus:outline-none"
        />
      </div>

      {/* Right side icons and user profile */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-text-gray-light">
          <button><FiCalendar className="w-6 h-6" /></button>
          <button><FiMessageCircle className="w-6 h-6" /></button>
          <button><FiBell className="w-6 h-6" /></button>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-right text-text-dark">Palak Jain</p>
            <p className="text-sm text-right text-text-gray-light">Rajasthan, India</p>
          </div>
          <img src="https://i.pravatar.cc/150?img=5" alt="User Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;