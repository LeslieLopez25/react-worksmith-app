const FloatingActionButton = () => {
  return (
    <div className="fab">
      {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
      <div tabIndex={0} role="button" className="btn btn-circle bg-blue-500 btn-lg">
        <svg
          aria-label="New"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>

      {/* buttons that show up when FAB is open */}
      <button className="btn btn-circle bg-blue-700 btn-lg">
        <img src="/assets/create.png" alt="Create" className="size-6" />
      </button>
      <button className="btn btn-circle bg-blue-700 btn-lg">
        <img src="/assets/edit.png" alt="Edit" className="size-6" />
      </button>
      <button className="btn btn-circle bg-red-700 btn-lg">
        <img src="/assets/delete.png" alt="Delete" className="size-6" />
      </button>
    </div>
  );
};

export default FloatingActionButton;
