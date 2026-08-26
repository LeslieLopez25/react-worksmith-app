const CreateProject = () => {
  return (
    <div className="flex min-h-screen gap-6 p-8 pt-18">
      {/* Left column */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          placeholder="Project Title"
          className="input-bordered input w-full text-xl font-bold"
        />
        <div className="flex flex-col gap-0">
          <div className="flex gap-2 rounded-t-lg border border-base-300 bg-base-200 p-2">
            <button className="btn font-bold btn-ghost btn-xs">B</button>
            <button className="btn italic btn-ghost btn-xs">I</button>
            <button className="btn underline btn-ghost btn-xs">U</button>
            <div className="divider mx-0 divider-horizontal"></div>
            <button className="btn btn-ghost btn-xs">≡</button>
            <button className="btn btn-ghost btn-xs">•≡</button>
          </div>
          <textarea
            placeholder="Describe your project..."
            className="textarea-bordered textarea min-h-96 w-full rounded-t-none text-base"
          ></textarea>
        </div>
      </div>

      {/* Right column */}
      <div className="flex w-72 flex-col gap-4 overflow-y-auto pb-8">
        {/* Publish card */}
        <div className="card bg-base-100 shadow-sm">
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
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body gap-3">
            <h2 className="card-title text-lg">Status</h2>
            <div className="flex flex-col gap-2">
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="status" className="radio radio-sm radio-info" />
                <span className="text-sm">Idea</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="status" className="radio radio-sm radio-info" />
                <span className="text-sm">In Progress</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="status" className="radio radio-sm radio-info" />
                <span className="text-sm">On Hold</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="status" className="radio radio-sm radio-info" />
                <span className="text-sm">Completed</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="status" className="radio radio-sm radio-info" />
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
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="projectType" className="radio radio-sm radio-info" />
                <span className="text-sm">Frontend</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="projectType" className="radio radio-sm radio-info" />
                <span className="text-sm">Backend</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="projectType" className="radio radio-sm radio-info" />
                <span className="text-sm">Fullstack</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="projectType" className="radio radio-sm radio-info" />
                <span className="text-sm">Design</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="projectType" className="radio radio-sm radio-info" />
                <span className="text-sm">Research</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="projectType" className="radio radio-sm radio-info" />
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
