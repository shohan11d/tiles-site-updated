import Link from "next/link";

async function getTiles() {
  try {
    const res = await fetch(
      "https://json-server-data-0n0i.onrender.com/tiles",
      {
        next: { revalidate: 0 },
      },
    );
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
            <h2 className="animate__animated animate__fadeInLeft text-3xl font-bold tracking-tight text-gray-900">
              Featured Collections
            </h2>
            <p className="animate__animated animate__fadeInLeft animate__delay-1s mt-4 text-gray-500">
              Handpicked tiles from our latest arrivals.
            </p>
          </div>
          <Link
            href="/all-tiles"
            className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            View all tiles <span aria-hidden="true">→</span>
          </Link>
        </div>

        {tiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiles.slice(0, 3).map((tile) => (
              <Link
                key={tile.id}
                href={`/all-tiles/${tile.id}`}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100 mb-6">
                  <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200" />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                    {tile.title}
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {tile.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {tile.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                    <span className="uppercase">{tile.material}</span>
                    <span>•</span>
                    <span>{tile.dimensions}</span>
                  </div>
                  <div className="block w-full text-center rounded-lg bg-white border border-gray-200 py-2.5 text-sm font-semibold text-gray-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl border-2 border-dashed border-gray-100">
            <p className="text-gray-400">
              No tiles found. Make sure the JSON server is running on port 4000.
            </p>
            <code className="mt-2 inline-block rounded bg-gray-50 px-2 py-1 text-xs text-gray-500">
              npm run server
            </code>
          </div>
        )}
      </div>
    </section>
  );
}
