const ImageCardForm = () => {
  return (
    <div className="flex min-h-screen justify-center p-8 pt-18 pb-16">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Add Image</h1>
          <div className="flex gap-2">
            <button
              className="btn btn-outline btn-sm"
              onClick={() => document.getElementById("preview_modal").showModal()}
            >
              Preview
            </button>
          </div>
          <button className="bt-info btn btn-sm">Save Image</button>
        </div>
        {/* Image upload */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Upload Image</h2>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-sky-600 p-12">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-500">Drag and drop your image here or</p>
              <input
                type="file"
                className="file-input-bordered file-input w-full max-w-xs file-input-sm"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        {/* Image details */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Image Details</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Title</label>
                <input
                  type="text"
                  placeholder="e.g. Stage 1 — Initial wireframe"
                  className="input-bordered input w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  placeholder="Brief summary of what this image shows..."
                  className="textarea-bordered textarea min-h-32 w-full"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Preview modal */}
      <dialog id="preview_modal" className="modal">
        <div className="modal-box">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Image Preview</h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>
          <div className="card w-full bg-base-200 shadow-sm">
            <figure>
              <div className="flex h-48 w-full items-center justify-center bg-base-300">
                <p className="text-sm text-gray-500">Image preview will appear here</p>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Image Title</h2>
              <p className="text-sm text-gray-500">Image description will appear here</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline btn-sm">Go Back</button>
            </form>
            <button className="btn btn-sm btn-info">Save Image</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ImageCardForm;
