const CreateProject = () => {
  return (
    <div className="flex min-h-screen flex-col gap-6 p-4 pt-20 sm:flex-row sm:p-8 sm:pt-18">
      {/* Left column */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          placeholder="Project Title"
          className="input-bordered input w-full rounded-t-lg border border-base-300 text-xl font-bold"
        />
        <div className="flex flex-col gap-0">
          <div className="flex gap-2 rounded-t-lg border border-base-300 bg-base-200 p-2">
            <button className="btn font-bold btn-ghost btn-xs hover:bg-base-300 hover:text-base-content">
              B
            </button>
            <button className="btn italic btn-ghost btn-xs hover:bg-base-300 hover:text-base-content">
              I
            </button>
            <button className="btn underline btn-ghost btn-xs hover:bg-base-300 hover:text-base-content">
              U
            </button>
            <div className="divider mx-0 divider-horizontal hover:bg-base-300 hover:text-base-content"></div>
            <button className="btn btn-ghost btn-xs hover:bg-base-300 hover:text-base-content">
              ≡
            </button>
            <button className="btn btn-ghost btn-xs hover:bg-base-300 hover:text-base-content">
              •≡
            </button>
          </div>
          <textarea
            placeholder="Describe your project..."
            className="textarea-bordered textarea min-h-48 w-full rounded-lg rounded-t-none border border-base-300 text-base sm:min-h-96"
          ></textarea>
        </div>
      </div>

      {/* Right column */}
      <div className="flex w-full flex-col gap-4 pb-8 sm:w-72 sm:overflow-y-auto">
        {/* Publish card */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Publish</h2>
            <div className="flex flex-col gap-2 text-sm">
              <p>
                <span className="font-semibold">Status:</span> Idea
              </p>
              <p>
                <span className="font-semibold">Visibility:</span> Private
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <button className="btn btn-outline btn-sm">Save as Draft</button>
              <button className="btn btn-sm btn-info">Create Project</button>
            </div>
          </div>
        </div>

        {/* Status card */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body gap-3">
            <h2 className="card-title text-lg">Status</h2>
            <div className="flex flex-col gap-2">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="status" className="radio radio-sm radio-accent" />
                <span className="text-sm">Idea</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="status" className="radio radio-sm radio-accent" />
                <span className="text-sm">In Progress</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="status" className="radio radio-sm radio-accent" />
                <span className="text-sm">On Hold</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="status" className="radio radio-sm radio-accent" />
                <span className="text-sm">Completed</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="status" className="radio radio-sm radio-accent" />
                <span className="text-sm">Archived</span>
              </label>
            </div>
          </div>
        </div>

        {/* Project Type card */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body gap-3">
            <h2 className="card-title text-lg">Project Type</h2>
            <div className="flex flex-col gap-2">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="projectType" className="radio radio-sm radio-accent" />
                <span className="text-sm">Frontend</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="projectType" className="radio radio-sm radio-accent" />
                <span className="text-sm">Backend</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="projectType" className="radio radio-sm radio-accent" />
                <span className="text-sm">Fullstack</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="projectType" className="radio radio-sm radio-accent" />
                <span className="text-sm">Design</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="projectType" className="radio radio-sm radio-accent" />
                <span className="text-sm">Research</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3">
                <input type="radio" name="projectType" className="radio radio-sm radio-accent" />
                <span className="text-sm">Documentation</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
