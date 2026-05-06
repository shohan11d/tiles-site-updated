"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // As requested, using a state for login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Website Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/20" />
            <span className="text-xl font-bold tracking-tight text-foreground sm:block hidden">
              Tiles<span className="text-indigo-500">Gallery</span>
            </span>
          </Link>
        </div>

        {/* Centre: Navigation Links */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/all-tiles"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            All Tiles
          </Link>
          <Link
            href="/my-profile"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            My Profile
          </Link>
        </div>

        {/* Right: Login Button (Conditional) */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 text-sm font-medium text-foreground focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:focus:ring-indigo-800"
            >
              <span className="relative rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                <span className="relative text-white">Login</span>
              </span>
            </Link>
          ) : (
            <div className="h-8 w-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-bold text-foreground">
              JD
            </div>
          )}
          
          {/* Mobile Menu Button (Optional, but adds to "premium" feel) */}
          <button className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg hover:bg-foreground/5">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
