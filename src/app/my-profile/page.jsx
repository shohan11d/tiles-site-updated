"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function page() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-900">My Profile</h1>
        <Image
          src={user?.image ?? user?.photo ?? "/avatar.png"}
          alt="Profile image"
          width={100}
          height={100}
          className="rounded-full"
        />
        <p className="mt-3 text-sm text-gray-600">
          This is your profile page. Use the link below to update your name and
          profile image.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
            <p className="text-sm text-gray-600">Name</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {user?.name ?? "Not available"}
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
            <p className="text-sm text-gray-600">Email</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {user?.email ?? "Not available"}
            </p>
          </div>

          <div>
            <Link
              href="/update-user"
              className="inline-flex rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Update profile info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
