const TaskBoard = () => {
  return (
    <dialog id="taskboard_modal" className="modal">
      <div className="modal-box h-4/5 w-11/12 max-w-7xl glass">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Task Board</h2>
          <div className="flex items-center gap-8">
            <button className="btn btn-info">Create Task</button>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">✕</button>
            </form>
          </div>
        </div>
        {/* Kanban columns */}
        <div className="flex gap-4 overflow-x-auto pb-6" style={{ height: "calc(100% - 80px)" }}>
          {/* To Do */}
          <div className="flex min-w-48 flex-1 flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">To Do</h3>
            <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3">
              <div className="rounded-lg bg-base-100 p-3 shadow-sm">
                <p className="text-sm font-medium">Task title</p>
                <p className="mt-1 text-xs text-gray-500">Task description</p>
              </div>
            </div>
          </div>
          {/* In Progress */}
          <div className="flex min-w-48 flex-1 flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              In Progress
            </h3>
            <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3">
              <div className="rounded-lg bg-base-100 p-3 shadow-sm">
                <p className="text-sm font-medium">Task title</p>
                <p className="mt-1 text-xs text-gray-500">Task description</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  <span className="badge badge-xs badge-error">High</span>
                  <span className="badge badge-xs badge-info">Frontend</span>
                </div>
              </div>
            </div>
          </div>
          {/* Completed */}
          <div className="flex min-w-48 flex-1 flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Completed
            </h3>
            <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3"></div>
          </div>
          {/* Revised */}
          <div className="flex min-w-48 flex-1 flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Revised</h3>
            <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3"></div>
          </div>
          {/* Strategizing */}
          <div className="flex min-w-48 flex-1 flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Strategizing
            </h3>
            <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3"></div>
          </div>
        </div>
      </div>
      {/* Click outside to close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default TaskBoard;
