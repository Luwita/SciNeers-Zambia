import React, { useState } from 'react';
import { Menu, X, Code, Users, Briefcase, Lightbulb, Info } from 'lucide-react';
import JoinCommunityModal from './JoinCommunityModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Projects', href: '#projects', icon: Lightbulb },
    { label: 'Jobs', href: '#jobs', icon: Briefcase },
    { label: 'Community', href: '#community', icon: Users },
    { label: 'About', href: '#about', icon: Info },
  ];

  const handleJoinCommunity = () => {
    setIsJoinModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SciNeers Zambia</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
              <button 
                onClick={handleJoinCommunity}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Join Community
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                ))}
                <button 
                  onClick={handleJoinCommunity}
                  className="w-full bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium mt-4"
                >
                  Join Community
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Join Community Modal */}
      <JoinCommunityModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </>
  );
};

export default Navigation;