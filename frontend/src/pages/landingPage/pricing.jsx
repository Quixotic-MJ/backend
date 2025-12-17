import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
return (
    <div className="min-h-screen bg-gray-900 text-white font-sans py-20 px-4">
      {/* --- HEADER --- */}
    <div className="text-center max-w-3xl mx-auto mb-16">
        <Link
        to="/"
        className="text-blue-500 hover:text-blue-400 font-semibold mb-4 inline-block"
        >
        ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Simple, transparent pricing
        </h1>
        <p className="text-gray-400 text-lg">
        Choose the plan that suits your movie watching habits. Cancel at any
        time.
        </p>
    </div>

      {/* --- PRICING CARDS --- */}
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* CARD 1: FREE */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex flex-col">
        <div className="mb-4">
            <span className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
            Basic
            </span>
        </div>
        <div className="mb-6">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-500">/month</span>
        </div>
        <p className="text-gray-400 mb-8">
            Perfect for casual viewers just getting started.
        </p>
        <ul className="space-y-4 mb-8 flex-1">
            <FeatureItem text="Track up to 50 movies" />
            <FeatureItem text="Basic Search & Filters" />
            <FeatureItem text="1 Watchlist" />
            <FeatureItem text="Community Support" />
        </ul>
        <Link
            to="/register"
            className="block w-full py-3 px-6 text-center rounded-lg border border-gray-600 hover:border-gray-500 text-white font-medium transition"
        >
            Get Started Free
        </Link>
        </div>

        {/* CARD 2: PRO (Highlight) */}
        <div className="bg-gray-800 rounded-2xl p-8 border-2 border-blue-500 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            MOST POPULAR
        </div>
        <div className="mb-4">
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
            Cinephile Pro
            </span>
        </div>
        <div className="mb-6">
            <span className="text-4xl font-bold">$4.99</span>
            <span className="text-gray-500">/month</span>
        </div>
        <p className="text-gray-400 mb-8">
            For the serious movie buff who needs more power.
        </p>
        <ul className="space-y-4 mb-8 flex-1">
            <FeatureItem text="Unlimited Movies" active />
            <FeatureItem text="Unlimited Watchlists" active />
            <FeatureItem text="Advanced Stats & Analytics" active />
            <FeatureItem text="No Ads" active />
            <FeatureItem text="Priority Support" active />
        </ul>
        <Link
            to="/register"
            className="block w-full py-3 px-6 text-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-lg shadow-blue-500/25"
        >
            Start Pro Trial
        </Link>
        </div>

        {/* CARD 3: FAMILY */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex flex-col">
        <div className="mb-4">
            <span className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
            Family
            </span>
        </div>
        <div className="mb-6">
            <span className="text-4xl font-bold">$12.99</span>
            <span className="text-gray-500">/month</span>
        </div>
        <p className="text-gray-400 mb-8">
            Share the love of movies with your whole household.
        </p>
        <ul className="space-y-4 mb-8 flex-1">
            <FeatureItem text="Everything in Pro" />
            <FeatureItem text="Up to 5 Profiles" />
            <FeatureItem text="Shared Watchlists" />
            <FeatureItem text="Parental Controls" />
        </ul>
        <Link
            to="/register"
            className="block w-full py-3 px-6 text-center rounded-lg border border-gray-600 hover:border-gray-500 text-white font-medium transition"
        >
            Choose Family
        </Link>
        </div>
    </div>
    </div>
);
};

// Helper component for the list items
const FeatureItem = ({ text, active = false }) => (
<li className="flex items-center text-gray-300">
    <svg
    className={`w-5 h-5 mr-3 ${active ? "text-blue-400" : "text-gray-500"}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    >
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
    />
    </svg>
    {text}
</li>
);

export default Pricing;
