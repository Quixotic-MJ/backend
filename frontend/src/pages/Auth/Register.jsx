import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/api';
import ErrorModal from '../../components/errorModal';

const Register = () => {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">Join CineTrack today</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-400 mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-lg shadow-blue-500/30"
          >
            Register
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;