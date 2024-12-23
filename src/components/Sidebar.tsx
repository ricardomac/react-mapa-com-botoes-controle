import React from 'react';
import { Menu, Map, Settings, HelpCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-16 bg-gray-800 text-white flex flex-col items-center py-4 space-y-6">
      <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
        <Menu size={24} />
      </div>
      <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
        <Map size={24} />
      </div>
      <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
        <Settings size={24} />
      </div>
      <div className="mt-auto p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
        <HelpCircle size={24} />
      </div>
    </div>
  );
};

export default Sidebar;