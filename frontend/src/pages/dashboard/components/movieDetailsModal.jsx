import React from 'react';

const movieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    // 1. Backdrop (Clicking here closes the modal)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* 2. Modal Content */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl flex flex-col md:flex-row">
        
        {/* Close Button (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-gray-800 rounded-full text-white transition"
        >
          ✕
        </button>

        {/* Fake Poster Side */}
        <div className="w-full md:w-1/3 bg-gray-800 flex items-center justify-center p-8 md:p-0">
          <span className="text-6xl">🎬</span>
        </div>

        {/* Info Side */}
        <div className="p-8 md:w-2/3 flex flex-col">
          <h2 className="text-3xl font-bold text-white mb-2">{movie.title}</h2>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="border border-gray-600 px-2 py-0.5 rounded">{movie.year}</span>
            <span>{movie.runtime}</span>
            <span className="text-yellow-400">★ {movie.rating || 'N/A'}</span>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
            {movie.description || "No description available for this movie yet. Imagine a really cool plot summary here!"}
          </p>

          <div className="flex gap-3 mt-auto">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
              Play Movie
            </button>
            <button className="px-4 border border-gray-600 hover:bg-gray-800 text-gray-300 rounded-lg transition">
              + Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default movieDetailsModal;