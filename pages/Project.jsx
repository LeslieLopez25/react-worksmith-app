import React from "react";
import ImageCard from "../src/components/ImageCard.jsx";
import TaskBoard from "../pages/TaskBoard.jsx";

const Project = () => {
  return (
    <>
      <div className="flex h-full flex-col lg:flex-row">
        <div className="flex flex-1 flex-col items-center gap-6 overflow-y-auto p-4 pt-20 pb-4 sm:p-8 sm:pt-20 sm:pb-24">
          <h1 className="text-xl font-bold sm:text-2xl">Name of Project</h1>
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:gap-4">
            <div className="hidden flex-col gap-4 overflow-visible lg:flex">
              <ImageCard />
              <ImageCard />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <textarea
                placeholder="Notes"
                className="textarea min-h-48 w-full rounded-lg border border-base-300 text-base textarea-info sm:min-h-80 sm:text-lg sm:textarea-xl"
              ></textarea>
              <button className="btn w-full btn-outline btn-sm btn-info sm:w-auto">Save</button>
            </div>
            <div className="hidden flex-col gap-4 overflow-visible lg:flex">
              <ImageCard />
              <ImageCard />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 lg:hidden">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-base-300 p-4 pb-20 sm:pb-0 lg:sticky lg:top-0 lg:h-full lg:w-50 lg:flex-col lg:justify-between lg:border-t-0 lg:border-l lg:pt-17 lg:pr-5">
          <div className="flex flex-col gap-2 lg:pt-3">
            <button
              onClick={() => document.getElementById("taskboard_modal").showModal()}
              className="btn pl-3 text-left text-base transition-colors btn-soft btn-sm btn-info"
            >
              Task Board →
            </button>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              <div className="rounded-lg bg-base-200 p-2 sm:p-3">
                <p className="text-xs text-base-content sm:text-sm">To Do (1)</p>
              </div>
              <div className="rounded-lg bg-base-200 p-2 sm:p-3">
                <p className="text-xs text-base-content sm:text-sm">In Progress (2)</p>
              </div>
              <div className="rounded-lg bg-base-200 p-2 sm:p-3">
                <p className="text-xs text-base-content sm:text-sm">Completed (3)</p>
              </div>
              <div className="rounded-lg bg-base-200 p-2 sm:p-3">
                <p className="text-xs text-base-content sm:text-sm">Revised (4)</p>
              </div>
              <div className="rounded-lg bg-base-200 p-2 sm:p-3">
                <p className="text-xs text-base-content sm:text-sm">Strategizing (5)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 lg:flex-col">
            <button className="btn flex-1 btn-dash btn-sm btn-info lg:w-full lg:flex-none">
              Upload Image
            </button>
            <button
              className="btn flex-1 btn-dash btn-sm btn-success lg:w-full lg:flex-none"
              onClick={() => document.getElementById("edit_modal").showModal()}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Edit/Delete modal */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl rounded-lg">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h2 className="text-lg font-bold sm:text-xl">Edit Project Content</h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>

          {/* Tabs for image card or note */}
          <div className="tabs-bordered mb-4 tabs sm:mb-6">
            <a className="tab-active tab text-sm sm:text-base">Image Card</a>
            <a className="tab text-sm sm:text-base">Note</a>
          </div>

          {/* Image card edit form */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Image Title</label>
              <input
                type="text"
                placeholder="e.g. Stage 1 — Initial wireframe"
                className="input-bordered input w-full rounded-lg border border-base-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Description</label>
              <textarea
                placeholder="Brief summary of what this image shows..."
                className="textarea-bordered textarea min-h-20 w-full rounded-lg border border-base-300 sm:min-h-28"
              ></textarea>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Replace Image</label>
              <input
                type="file"
                className="file-input-bordered file-input w-full file-input-xs sm:file-input-sm"
                accept="image/*"
              />
            </div>
          </div>

          {/* Modal actions */}
          <div className="modal-action flex justify-between">
            <button className="btn btn-outline btn-xs btn-error sm:btn-sm">Delete</button>
            <div className="flex items-center gap-2">
              <form method="dialog" className="flex items-center">
                <button className="btn btn-ghost btn-xs sm:btn-sm">Cancel</button>
              </form>
              <button className="btn btn-xs btn-info sm:btn-sm">Save Changes</button>
            </div>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>

      <TaskBoard />
    </>
  );
};

export default Project;
