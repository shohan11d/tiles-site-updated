import Link from "next/link";

async function getTiles() {
  try {
    const res = await fetch("http://localhost:4000/tiles", {
      next: { revalidate: 0 }, // Disable cache for live demo purposes
    });
    if (!res.ok) throw new Error("Failed to fetch tiles");
    return res.json();
  } catch (error) {
    console.error("Error fetching tiles:", error);
    return [];
  }
}

export default async function FeaturedTiles() {
  const tiles = await getTiles();

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Collections</h2>
            <p className="mt-4 text-gray-500">Handpicked tiles from our latest arrivals.</p>
          </div>
          <Link href="/all-tiles" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            View all tiles <span aria-hidden="true">→</span>
          </Link>
        </div>

        {tiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiles.slice(0, 3).map((tile) => (
              <div key={tile.id} className="group relative flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100 mb-6">
                  {/* Fallback color if image is not found */}
                  <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200" />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                    {tile.title}
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{tile.title}</h3>
                    <span className="text-sm font-medium text-indigo-600">${tile.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{tile.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-medium text-gray-400">
                    <span className="uppercase">{tile.material}</span>
                    <span>•</span>
                    <span>{tile.dimensions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl border-2 border-dashed border-gray-100">
            <p className="text-gray-400">No tiles found. Make sure the JSON server is running on port 4000.</p>
            <code className="mt-2 inline-block rounded bg-gray-50 px-2 py-1 text-xs text-gray-500">npm run server</code>
          </div>
        )}
      </div>
    </section>
  );
}
