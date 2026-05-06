import Link from "next/link";
import { notFound } from "next/navigation";

async function getTile(id) {
  try {
    const res = await fetch(`http://localhost:5000/tiles/${id}`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Failed to fetch tile");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function TileDetailsPage({ params }) {
  // Access params.id correctly for Next.js 16+ where params is a Promise
  const resolvedParams = await params;
  const tile = await getTile(resolvedParams.id);

  if (!tile) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <Link 
          href="/all-tiles"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Large Visual Preview */}
          <div className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
            <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <span className="text-gray-400 font-medium text-xl text-center">{tile.title}</span>
              <span className="text-gray-300 text-sm mt-2">High-Res Preview Placeholder</span>
            </div>
          </div>

          {/* Right: Tile Details */}
          <div className="flex flex-col pt-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 uppercase tracking-wider">
                {tile.category}
              </span>
              {tile.inStock && (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  In Stock
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-2">
              {tile.title}
            </h1>
            
            {tile.creator && (
              <p className="text-lg text-gray-500 mb-6">
                Created by <span className="font-semibold text-gray-900">{tile.creator}</span>
              </p>
            )}

            <div className="text-3xl font-bold text-indigo-600 mb-8">
              ${tile.price} <span className="text-sm font-normal text-gray-500">/ sq ft</span>
            </div>

            <div className="prose prose-lg text-gray-600 mb-10">
              <p>{tile.description}</p>
            </div>

            {/* Specifications */}
            <div className="border-y border-gray-100 py-6 mb-8">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Specifications</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
                <div className="flex justify-between sm:block">
                  <dt className="text-gray-500">Material</dt>
                  <dd className="font-medium text-gray-900">{tile.material}</dd>
                </div>
                <div className="flex justify-between sm:block">
                  <dt className="text-gray-500">Dimensions</dt>
                  <dd className="font-medium text-gray-900">{tile.dimensions}</dd>
                </div>
              </dl>
            </div>

            {/* Tags */}
            {tile.tags && tile.tags.length > 0 && (
              <div className="mb-10">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tile.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-50 text-gray-600 border border-gray-200 hover:bg-white hover:border-gray-300 transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <button className="flex-1 rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:scale-105 active:scale-95">
                Request Sample
              </button>
              <button className="flex-none rounded-full bg-white border-2 border-gray-200 px-8 py-4 text-sm font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
