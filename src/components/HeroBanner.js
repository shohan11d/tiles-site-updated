import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-50 to-pink-50 opacity-40" />
      <div className="absolute -top-24 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-100 blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-pink-100 blur-3xl opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Discover Your Perfect <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-600">Aesthetic</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
          Transform your space with our curated collection of premium tiles. From modern minimalist to classic elegance, find the perfect foundation for your home.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/all-tiles"
            className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:scale-105 active:scale-95"
          >
            Browse Now
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
