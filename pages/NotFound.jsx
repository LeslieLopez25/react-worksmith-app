import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-base-100 px-4 text-center">
      {/* 404 text */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-5xl font-bold text-info sm:text-6xl">404</h1>
        <div className="h-1 w-12 rounded-full bg-info sm:w-16"></div>
      </div>

      {/* Message */}
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-lg font-bold sm:text-xl">This page is still being built</h2>
        <p className="max-w-xs text-xs text-gray-500 sm:max-w-md sm:text-sm">
          Looks like this page doesn't exist yet — kind of like a project that hasn't been started.
          Head back and keep building.
        </p>
      </div>

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-base-300 sm:h-20 sm:w-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 16l4-4m0 4l-4-4"
          />
        </svg>
      </div>

      {/* Animated badge */}
      <div className="flex items-center gap-2 rounded-full bg-error px-3 py-1">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-200"></span>
        <span className="text-sm text-white">Page not found</span>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
        <Link to="/" className="btn w-full btn-xs btn-info sm:w-auto sm:btn-sm">
          Back to Projects
        </Link>
        <Link
          to="/create-project"
          className="btn w-full btn-outline btn-xs btn-info sm:w-auto sm:btn-sm"
        >
          Start a New Project
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
