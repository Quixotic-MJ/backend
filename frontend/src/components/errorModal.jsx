import React from 'react';

const ErrorModal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    // 1. Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* 2. Modal Box */}
      <div className="bg-gray-800 border border-red-500/50 rounded-xl p-6 max-w-sm w-full shadow-2xl transform scale-100 transition-all">
        
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white">Login Failed</h3>
        </div>

        {/* Message */}
        <p className="text-gray-300 mb-6">
          {message}
        </p>

        {/* Action Button */}
        <button 
          onClick={onClose}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;