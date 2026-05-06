"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const profileImage = user?.image?.trim() ? user.photo : "/avatar.png";

  const handleLogout = async function () {
    await authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-black transition-colors hover:text-purple-400"
          >
            Home
          </Link>
          <Link
            href="/all-tiles"
            className="text-sm font-medium text-black transition-colors hover:text-purple-400"
          >
            All Tiles
          </Link>
          <Link
            href="/my-profile"
            className="text-sm font-medium text-black transition-colors hover:text-purple-400"
          >
            My Profile
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {!user ? (
            <Link
              href="/login"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 text-sm font-medium text-foreground focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:focus:ring-indigo-800"
            >
              <span className="relative rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                <span className="relative text-white">Login</span>
              </span>
            </Link>
          ) : (
            <div className="flex gap-4 items-center">
              <Link
                href="/my-profile"
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-blue-500 px-2 py-2 transition hover:bg-gray-50"
              >
             
                <span className="text-xs font-bold text-white py1 ">
                  {user.name}
                </span>
              </Link>
              <button
                className="text-white bg-red-600 rounded-full px-3 py-1 hover:bg-red-300 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}

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
