"use client";

import { useState } from "react";
import PodcastCard from "./components/PodcastCard";

const Home = () => {
  const [query, setQuery] = useState("");
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/search?q=${query}`);
      if (!response.ok) throw new Error("Search failed");

      const data = await response.json();
      setPodcasts(data);
    } catch (err) {
      setError("Failed to search podcasts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Podcast Search
        </h1>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for podcasts..."
              autoFocus
              disabled={loading}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.trackId} podcast={podcast} />
        ))}
      </div>
    </main>
  );
};

export default Home;
