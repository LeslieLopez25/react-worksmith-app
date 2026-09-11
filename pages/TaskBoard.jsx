const TaskBoard = () => {
  return (
    <>
      <dialog id="taskboard_modal" className="modal">
        <div className="modal-box h-4/5 w-11/12 max-w-7xl glass">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Task Board</h2>
            <div className="flex items-center gap-8">
              <button
                className="btn btn-info"
                onClick={() => document.getElementById("task_modal").showModal()}
              >
                Create Task
              </button>
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
                <div
                  className="cursor-pointer rounded-lg border-l-10 border-sky-500 bg-base-100 p-3 shadow-sm"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
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
                <div
                  className="cursor-pointer rounded-lg border-l-10 border-yellow-500 bg-base-100 p-3 shadow-sm"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-sm font-medium">Task title</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="badge badge-xs badge-error">High</span>
                    <span className="badge badge-xs badge-info">Frontend</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Blocked */}
            <div className="flex min-w-48 flex-1 flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Blocked
              </h3>
              <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-10 border-red-500 bg-base-100 p-3 shadow-sm"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-sm font-medium">Task tile</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
            {/* Completed */}
            <div className="flex min-w-48 flex-1 flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Completed
              </h3>
              <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-10 border-green-500 bg-base-100 p-3 shadow-sm"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-sm font-medium">Task tile</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
            {/* Revised */}
            <div className="flex min-w-48 flex-1 flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Revised
              </h3>
              <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-10 border-purple-500 bg-base-100 p-3 shadow-sm"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-sm font-medium">Task tile</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
            {/* Strategizing */}
            <div className="flex min-w-48 flex-1 flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Strategizing
              </h3>
              <div className="flex max-h-96 min-h-64 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-10 border-orange-500 bg-base-100 p-3 shadow-sm"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-sm font-medium">Task tile</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="task_modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Create Task</h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Task Title</label>
              <input
                type="text"
                placeholder="e.g. Build login page"
                className="input-bordered input w-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Description</label>
              <textarea
                placeholder="Describe what needs to be done..."
                className="textarea-bordered textarea min-h-28 w-full"
              ></textarea>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label className="select-bordered w-full text-sm">Urgency</label>
                <select className="select-bordered select w-full">
                  <option disabled selected>
                    Select Urgency
                  </option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label className="text-sm font-semibold">Status</label>
                <select className="select-bordered select w-full">
                  <option disabled selected>
                    Select Status
                  </option>
                  <option>Todo</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Revised</option>
                  <option>Strategizing</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Task Type</label>
              <select className="select-bordered select w-full">
                <option disabled selected>
                  Select Task Type
                </option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Testing</option>
                <option>Design</option>
                <option>Research</option>
                <option>Documentation</option>
                <option>Planning</option>
                <option>Deployment</option>
                <option>Bug Fix</option>
                <option>Refactor</option>
                <option>Database</option>
                <option>API</option>
                <option>UI</option>
                <option>UX</option>
                <option>Review</option>
                <option>Security</option>
                <option>Performance</option>
              </select>
            </div>
          </div>
          <div className="modal-action flex justify-between">
            <button className="btn btn-outline btn-sm btn-error">Delete Task</button>
            <div className="flex gap-2">
              <form method="dialog">
                <button className="btn btn-ghost btn-sm">Cancel</button>
              </form>
              <button className="btn btn-sm btn-info">Create Task</button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default TaskBoard;
