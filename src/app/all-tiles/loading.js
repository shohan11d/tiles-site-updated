export default function Loading() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="bg-indigo-50/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="h-10 w-48 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-12 w-full max-w-xl rounded-full bg-gray-200 animate-pulse" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-4"
            >
              <div className="h-48 w-full rounded-xl bg-gray-200 animate-pulse mb-4" />
              <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse mb-2" />
              <div className="h-4 w-1/4 rounded bg-gray-200 animate-pulse mb-4" />
              <div className="h-10 w-full rounded-lg bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
