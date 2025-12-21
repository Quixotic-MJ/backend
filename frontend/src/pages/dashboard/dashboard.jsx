import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieDetailsModal from "./components/movieDetailsModal";
import { fetchAllMovies, fetchMovieById , fetchWatchlist, addItemToWatchlist } from "../../services/api";


const Dashboard = () => {
  const navigate = useNavigate();
  const [viewDetails, setViewDetails] = React.useState("");

  const [watchlist, setWatchlist] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetchAllMovies();
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    loadMovies();
  }, [navigate]);

  const handleAddToWatchlist = async (movie) => {
    try {
      await addItemToWatchlist(movie.id);
      alert(`${movie.title} added to your watchlist!`);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(`${movie.title} is already in your watchlist.`);
      } else {
        console.error("Failed to add to watchlist", error);
      }
    }
  };

  const handleLogout = () => {
    // 1. Clear any fake tokens (if you set them)
    localStorage.removeItem("token");
    // 2. Send user back to Login
    navigate("/login");
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

     {/* MOVIE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 4. Check if movies exist */}
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:-translate-y-1 transition duration-300">
              
              {/* POSTER IMAGE */}
              <div className="h-48 bg-gray-900 flex items-center justify-center relative group overflow-hidden">
                {/* 5. Use DB Column Name: poster_url */}
                {movie.poster_url ? (
                  <img 
                    src={movie.poster_url} 
                    alt={movie.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                ) : (
                  <span className="text-4xl">🎬</span>
                )}
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm transform scale-90 group-hover:scale-100 transition"
                    onClick={() => setViewDetails(movie.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* MOVIE INFO */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 truncate">{movie.title}</h3>
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  {/* 6. Use DB Column: release_year */}
                  <span>{movie.release_year}</span>
                  {/* 7. Use DB Column: runtime (append 'min') */}
                  <span>{movie.runtime} min</span>
                </div>
                
                <button 
                  onClick={() => handleAddToWatchlist(movie)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <span>+</span> Add to Watchlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center py-10">
            No movies found. (Make sure your backend is running and seeded!)
          </p>
        )}
      </div>

      {viewDetails && (
        <MovieDetailsModal
          movie={movies.find((m) => m.id === viewDetails)}
          onClose={() => setViewDetails("")}
        />
      )}

      {/* --- EMPTY STATE EXAMPLE (Optional) --- */}
      {/* <div className="text-center py-20">
        <div className="text-6xl mb-4">🍿</div>
        <h3 className="text-xl font-bold text-gray-300">Your watchlist is empty</h3>
        <p className="text-gray-500 mt-2">Start adding movies to track them here.</p>
      </div>  */}
    </div>
  );
};

export default Dashboard;
