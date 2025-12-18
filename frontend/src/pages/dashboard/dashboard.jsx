import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // --- HARDCODED DATA (Static) ---
  const movies = [
    { id: 1, title: "Inception", year: 2010, runtime: "148m" },
    { id: 2, title: "Interstellar", year: 2014, runtime: "169m" },
    { id: 3, title: "The Dark Knight", year: 2008, runtime: "152m" },
    { id: 4, title: "Dune: Part Two", year: 2024, runtime: "166m" },
    { id: 5, title: "Oppenheimer", year: 2023, runtime: "180m" },
    { id: 6, title: "Parasite", year: 2019, runtime: "132m" },
  ];

  const handleLogout = () => {
    // 1. Clear any fake tokens (if you set them)
    localStorage.removeItem('token');
    // 2. Send user back to Login
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, User!</p>
        </div>
        
        <button 
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition shadow-lg shadow-red-900/20"
        >
          Logout
        </button>
      </div>

      {/* --- MOVIE GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:-translate-y-1 transition duration-300">
            
            {/* Fake Poster Image */}
            <div className="h-48 bg-gradient-to-t from-gray-900 to-gray-700 flex items-center justify-center relative group">
              <span className="text-4xl">🎬</span>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm transform scale-90 group-hover:scale-100 transition">
                  View Details
                </button>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>{movie.year}</span>
                <span>{movie.runtime}</span>
              </div>
              
              <button 
                onClick={() => alert(`Added ${movie.title} to watchlist!`)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
              >
                <span>+</span> Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- EMPTY STATE EXAMPLE (Optional) --- */}
      {/* <div className="text-center py-20">
        <div className="text-6xl mb-4">🍿</div>
        <h3 className="text-xl font-bold text-gray-300">Your watchlist is empty</h3>
        <p className="text-gray-500 mt-2">Start adding movies to track them here.</p>
      </div> 
      */}

    </div>
  );
};

export default Dashboard;