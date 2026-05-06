import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <div className="animate__animated animate__bounceIn">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg leading-7 text-gray-500 max-w-md">
        Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
        >
          Go back home
        </Link>
        <Link
          href="/all-tiles"
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
        >
          Browse Gallery <span aria-hidden="true">→</span>
        </Link>
        </div>
    </div>
    </div>
  );
}
