import React, {useState} from 'react';
import {Link , useNavigate} from 'react-router-dom';

import DemoModal from './modals/demoModal';

const LandingPage = () => {

    const navigate = useNavigate();
    const [isDemoOpen, setIsDemoOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Simple Movie Icon SVG */}
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-xl">🍿</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">CineTrack</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition" onClick={() => navigate('./pricing')}>Pricing</a>
          <button className="text-white font-medium hover:text-blue-400 transition" onClick={() => navigate('/login')}>Log In</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-blue-500/30" onClick={() => navigate('/register')}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="container mx-auto px-6 py-20 md:py-32 text-center md:text-left flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-1 text-sm text-blue-400 font-medium mb-2 border border-gray-700">
            ✨ The Ultimate Movie Tracker
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Track what you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              want to watch.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Never forget a movie recommendation again. Organize your watchlist, 
            discover new favorites, and track your viewing habits in one beautiful app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl" onClick={() => navigate('/register')}>
              Get Started Free
            </button>
            <button className="flex items-center justify-center gap-2 text-gray-300 px-8 py-3.5 rounded-full font-medium border border-gray-700 hover:bg-gray-800 transition" onClick={() => setIsDemoOpen(true)}>
              <span>▶</span> Watch Demo
            </button>
          </div>
          
          <p className="text-sm text-gray-500 pt-2">
            No credit card required · Free forever plan available
          </p>
        </div>

        {/* Hero Image / Placeholder UI */}
        <div className="md:w-1/2 mt-16 md:mt-0 relative">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
          
          {/* App Screenshot Mockup */}
          <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-4 shadow-2xl rotate-3 hover:rotate-0 transition duration-500">
            <div className="bg-gray-900 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center group">
               {/* Simulating a Grid of Movie Posters */}
               <div className="grid grid-cols-3 gap-2 p-4 w-full opacity-60">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-700 rounded h-32 w-full animate-pulse"></div>
                  ))}
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <h3 className="text-2xl font-bold bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
                   Your Watchlist 🍿
                 </h3>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FEATURES GRID --- */}
      <section className="bg-gray-900 py-20 border-t border-gray-800" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stop using notes apps and spreadsheets. We built the perfect tool for movie lovers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="📋"
              title="Organize Lists"
              desc="Create custom lists for 'Weekly Movie Night', 'Oscars 2024', or 'Horror Marathon'."
            />
            <FeatureCard 
              icon="🔍"
              title="Smart Discovery"
              desc="Get personalized recommendations based on the movies you've rated highly."
            />
            <FeatureCard 
              icon="👥"
              title="Share with Friends"
              desc="Compare watchlists and see what your friends are watching in real-time."
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-gray-800 py-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CineTrack. All rights reserved.</p>
      </footer>

      {/* Demo Modal */}
      {isDemoOpen && <DemoModal onClose={() => setIsDemoOpen(false)} />}
    </div>
  );
};

// Helper Component for Features
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition hover:-translate-y-1 duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default LandingPage;