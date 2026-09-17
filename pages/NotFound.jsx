import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="m flex min-h-screen flex-col items-center justify-center gap-6 bg-base-200 text-center">
      {/* 404 text */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-9xl font-bold text-info">404</h1>
        <div className="h-1 w-24 rounded-full bg-info"></div>
      </div>

      {/* Message */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl font-bold">This page is still being built</h2>
        <p className="max-w-md text-gray-500">
          Looks like this page doesn't exist yet -- kind of like a project that hasn't been started.
          Head back and keep building.
        </p>
      </div>

      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-base-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400"
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
      <span className="badge gap-2 badge-error">
        <span className="badge animate-pulse badge-sm badge-error">Page not found</span>
      </span>

      {/* Actions */}
      <div className="flex gap-3">
        <Link to="/" className="btn btn-info">
          Back to Projects
        </Link>
        <Link to="/create-project" className="btn btn-outline btn-info">
          Start a New Project
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
