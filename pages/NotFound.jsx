import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-base-200 text-center">
      {/* 404 text */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-7xl font-bold text-info">404</h1>
        <div className="h-1 w-16 rounded-full bg-info"></div>
      </div>

      {/* Message */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold">This page is still being built</h2>
        <p className="max-w-md text-sm text-gray-500">
          Looks like this page doesn't exist yet — kind of like a project that hasn't been started.
          Head back and keep building.
        </p>
      </div>

      {/* Icon */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-base-300">
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
      <div className="flex items-center gap-2 rounded-full bg-error px-4 py-1">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-200"></span>
        <span className="text-sm text-white">Page not found</span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link to="/" className="btn btn-sm btn-info">
          Back to Projects
        </Link>
        <Link to="/create-project" className="btn btn-outline btn-sm btn-info">
          Start a New Project
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
