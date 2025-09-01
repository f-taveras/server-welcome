import React, { useState } from 'react';
import { Menu, X, ExternalLink, Github, User, BookOpen } from 'lucide-react';
import { SiN8N } from "react-icons/si";

interface NavigationDropdownProps {
  className?: string;
}

export const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const navigationItems = [
    {
      label: 'Portfolio',
      href: 'http://prtflio.info',
      icon: User,
      description: 'My personal portfolio'
    },
    {
      label: 'n8n Instance',
      href: 'http://n8n.milkyway.fit',
      icon: SiN8N,
      description: 'Coming soon...'
    },
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: Github,
      description: 'My repositories'
    }
  ];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleDropdown}
        className="group flex items-center justify-center w-12 h-12 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-black/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Navigation menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <Menu className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute top-16 left-0 w-72 bg-slate-900/95 backdrop-blur-lg border border-purple-500/30 rounded-xl shadow-2xl transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Services
          </h3>
          <div className="space-y-2">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <IconComponent className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white text-sm">{item.label}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-gray-400 truncate">{item.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};