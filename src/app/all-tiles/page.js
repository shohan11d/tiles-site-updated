"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTiles() {
      try {
        const res = await fetch(
          "https://json-server-data-0n0i.onrender.com/tiles",
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTiles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTiles();
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="bg-indigo-50/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="animate__animated animate__fadeInDown text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            The Gallery
          </h1>
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-200 rounded-full bg-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all"
              placeholder="Search for tiles by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : filteredTiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTiles.map((tile) => (
              <Link
                key={tile.id}
                href={`/all-tiles/${tile.id}`}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                  <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200" />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-center px-4">
                    {tile.title} Preview
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {tile.title}
                  </h3>
                  <span className="text-sm font-medium text-indigo-600 mb-4">
                    ${tile.price}
                  </span>
                  <div className="mt-auto block w-full text-center rounded-lg bg-white border border-gray-200 py-2.5 text-sm font-semibold text-gray-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No tiles found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-indigo-600 font-medium hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
