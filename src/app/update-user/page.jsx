"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

export default function UpdateUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();



  const onSubmit = async (data) => {
    await authClient.updateUser({
    name: data.name,
    image: data.image,
})
  };

  return (
    <div className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl shadow-gray-200">
        <h1 className="text-3xl font-semibold text-gray-900">Update User</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your new name and profile image link, then submit to update.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-2 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              id="image"
              type="url"
              {...register("image", {
                required: "Image URL is required",
              })}
              className="mt-2 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              placeholder="https://example.com/image.jpg"
            />
            {errors.image && (
              <p className="mt-2 text-sm text-red-600">
                {errors.image.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Updating..." : "Update profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
