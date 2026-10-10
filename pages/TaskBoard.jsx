const TaskBoard = () => {
  return (
    <>
      <dialog id="taskboard_modal" className="modal">
        <div className="modal-box h-5/6 w-11/12 max-w-7xl rounded-lg p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h2 className="text-lg font-bold sm:text-2xl">Task Board</h2>
            <div className="flex items-center gap-3 sm:gap-8">
              <button
                className="btn btn-xs btn-info sm:btn-sm"
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
          <div
            className="flex gap-3 overflow-x-auto pb-4 sm:gap-4 sm:pb-6"
            style={{ height: "calc(100% - 80px)" }}
          >
            {/* To Do */}
            <div className="flex min-w-36 flex-1 flex-col gap-2 sm:min-w-48 sm:gap-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm">
                To Do
              </h3>
              <div className="flex max-h-96 min-h-48 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-2 sm:min-h-64 sm:p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-4 border-blue-400 bg-base-100 p-2 shadow-sm sm:border-l-10 sm:p-3"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-xs font-medium sm:text-sm">Task title</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
            {/* In Progress */}
            <div className="flex min-w-36 flex-1 flex-col gap-2 sm:min-w-48 sm:gap-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm">
                In Progress
              </h3>
              <div className="flex max-h-96 min-h-48 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-2 sm:min-h-64 sm:p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-4 border-amber-500 bg-base-100 p-2 shadow-sm sm:border-l-10 sm:p-3"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-xs font-medium sm:text-sm">Task title</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="badge rounded-full bg-red-500 p-1 badge-xs sm:p-2">High</span>
                    <span className="badge rounded-full bg-violet-500 p-1 badge-xs sm:p-2">
                      Frontend
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Blocked */}
            <div className="flex min-w-36 flex-1 flex-col gap-2 sm:min-w-48 sm:gap-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm">
                Blocked
              </h3>
              <div className="flex max-h-96 min-h-48 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-2 sm:min-h-64 sm:p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-4 border-red-500 bg-base-100 p-2 shadow-sm sm:border-l-10 sm:p-3"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-xs font-medium sm:text-sm">Task tile</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
            {/* Completed */}
            <div className="flex min-w-36 flex-1 flex-col gap-2 sm:min-w-48 sm:gap-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm">
                Completed
              </h3>
              <div className="flex max-h-96 min-h-48 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-2 sm:min-h-64 sm:p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-4 border-green-500 bg-base-100 p-2 shadow-sm sm:border-l-10 sm:p-3"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-xs font-medium sm:text-sm">Task tile</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
            {/* Revised */}
            <div className="flex min-w-36 flex-1 flex-col gap-2 sm:min-w-48 sm:gap-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm">
                Revised
              </h3>
              <div className="flex max-h-96 min-h-48 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-2 sm:min-h-64 sm:p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-4 border-violet-500 bg-base-100 p-2 shadow-sm sm:border-l-10 sm:p-3"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-xs font-medium sm:text-sm">Task tile</p>
                  <p className="mt-1 text-xs text-gray-500">Task description</p>
                </div>
              </div>
            </div>
            {/* Strategizing */}
            <div className="flex min-w-36 flex-1 flex-col gap-2 sm:min-w-48 sm:gap-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm">
                Strategizing
              </h3>
              <div className="flex max-h-96 min-h-48 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-2 sm:min-h-64 sm:p-3">
                <div
                  className="cursor-pointer rounded-lg border-l-4 border-orange-500 bg-base-100 p-2 shadow-sm sm:border-l-10 sm:p-3"
                  onClick={() => document.getElementById("task_modal").showModal()}
                >
                  <p className="text-xs font-medium sm:text-sm">Task tile</p>
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
        <div className="modal-box w-11/12 max-w-2xl rounded-lg">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h2 className="text-lg font-bold sm:text-xl">Create Task</h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Task Title</label>
              <input
                type="text"
                placeholder="e.g. Build login page"
                className="input-bordered input w-full rounded-lg border border-base-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Description</label>
              <textarea
                placeholder="Describe what needs to be done..."
                className="textarea-bordered textarea min-h-20 w-full rounded-lg border border-base-300 sm:min-h-28"
              ></textarea>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label className="text-sm font-semibold">Urgency</label>
                <select className="select-bordered select w-full rounded-lg border border-base-300">
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
                <select className="select-bordered select w-full rounded-lg border border-base-300">
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
              <select className="select-bordered select w-full rounded-lg border border-base-300">
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
            <button className="btn btn-outline btn-xs btn-error sm:btn-sm">Delete Task</button>
            <div className="flex gap-2">
              <form method="dialog">
                <button className="btn btn-ghost btn-xs sm:btn-sm">Cancel</button>
              </form>
              <button className="btn btn-xs btn-info sm:btn-sm">Create Task</button>
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
