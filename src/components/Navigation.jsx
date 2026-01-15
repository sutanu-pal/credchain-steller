import React from 'react';
import { Shield } from 'lucide-react';

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setCurrentPage('landing')}
        >
          <Shield className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold text-white">CredChain</span>
        </div>
        <button 
          onClick={() => setCurrentPage('landing')}
          className="text-slate-300 hover:text-white transition-colors"
        >
          Back to Home
        </button>
      </div>
    </nav>
  );
};

export default Navigation;