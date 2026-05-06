export default function Loading() {
  return (
    <div className="flex flex-col min-h-[60vh] items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-600" />
        </div>
        <p className="text-sm font-medium text-gray-500 tracking-widest uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
