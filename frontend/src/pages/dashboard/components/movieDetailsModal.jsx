import React from 'react';

// Renamed to PascalCase 'MovieDetailsModal' (standard React naming)
const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    // 1. Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* 2. Modal Content */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-gray-800 rounded-full text-white transition"
        >
          ✕
        </button>

        {/* POSTER SIDE (Updated to use 'poster_url') */}
        <div className="w-full md:w-1/3 bg-gray-800 flex items-center justify-center relative overflow-hidden group">
          {movie.poster_url ? (
             <img 
               src={movie.poster_url} 
               alt={movie.title} 
               className="w-full h-full object-cover absolute inset-0" 
             />
          ) : (
             <span className="text-6xl">🎬</span>
          )}
        </div>

        {/* INFO SIDE */}
        <div className="p-8 md:w-2/3 flex flex-col">
          <h2 className="text-3xl font-bold text-white mb-2 leading-tight">{movie.title}</h2>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
            {/* Year */}
            {movie.release_year && (
              <span className="border border-gray-600 px-2 py-0.5 rounded text-gray-300">
                {movie.release_year}
              </span>
            )}
            
            {/* Runtime */}
            {movie.runtime && (
              <span>{movie.runtime} min</span>
            )}

            {/* Rating (Note: Your 'movies' table doesn't have rating, so we hide it or show N/A) */}
            {movie.rating && (
              <span className="text-yellow-400">★ {movie.rating}</span>
            )}
          </div>

          {/* Genres (New Feature!) */}
          {movie.genres && (
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre, index) => (
                <span key={index} className="text-xs font-medium bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full">
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Overview (Updated from description) */}
          <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-sm md:text-base">
            {movie.overview || "No overview available for this movie."}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition shadow-lg shadow-blue-900/20">
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

export default MovieDetailsModal;