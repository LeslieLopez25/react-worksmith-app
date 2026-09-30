import React from "react";
import ImageCard from "../src/components/ImageCard.jsx";
import TaskBoard from "../pages/TaskBoard.jsx";

const Project = () => {
  return (
    <>
      <div className="flex h-full">
        <div className="flex flex-1 flex-col items-center gap-6 overflow-y-auto p-8 pt-18 pb-24">
          <h1 className="text-2xl font-bold">Name of Project</h1>
          <div className="flex w-full items-start gap-4">
            <div className="flex flex-col gap-4 overflow-visible">
              <ImageCard />
              <ImageCard />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <textarea
                placeholder="Notes"
                className="textarea min-h-80 w-full rounded-lg border border-base-300 text-lg textarea-xl textarea-info"
              ></textarea>
              <button className="btn btn-outline btn-sm btn-info">Save</button>
            </div>
            <div className="flex flex-col gap-4 overflow-visible">
              <ImageCard />
              <ImageCard />
            </div>
          </div>
        </div>
        <div className="sticky top-0 flex h-full w-50 flex-col justify-between border-l border-base-300 pt-17 pr-5">
          <div className="flex flex-col gap-2 pt-3 pl-10">
            <button
              onClick={() => document.getElementById("taskboard_modal").showModal()}
              className="btn pl-3 text-left text-base transition-colors btn-soft btn-sm btn-info"
            >
              Task Board →
            </button>
            <div className="rounded-lg bg-base-200 p-3">
              <p className="text-sm text-base-content">To Do (1)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-3">
              <p className="text-sm text-base-content">In Progress (2)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-3">
              <p className="text-sm text-base-content">Completed (3)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-3">
              <p className="text-sm text-base-content">Revised (4)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-3">
              <p className="text-sm text-base-content">Strategizing (5)</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-3 pl-10">
            <button className="btn w-full btn-dash btn-sm btn-info">Upload Image</button>
            <button
              className="btn w-full btn-dash btn-sm btn-success"
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
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Edit Project Content</h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>

          {/* Tabs for image card or note */}
          <div className="tabs-bordered mb-6 tabs">
            <a className="tab-active tab">Image Card</a>
            <a className="tab">Note</a>
          </div>

          {/* Image card edit form */}
          <div className="flex flex-col gap-4">
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
                className="textarea-bordered textarea min-h-28 w-full rounded-lg border border-base-300"
              ></textarea>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Replace Image</label>
              <input
                type="file"
                className="file-input-bordered file-input w-full file-input-sm"
                accept="image/*"
              />
            </div>
          </div>

          {/* Modal actions */}
          <div className="modal-action flex justify-between">
            <button className="btn btn-outline btn-sm btn-error">Delete</button>
            <div className="flex gap-2">
              <form method="dialog">
                <button className="btn btn-ghost btn-sm">Cancel</button>
              </form>
              <button className="btn btn-sm btn-info">Save Changes</button>
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
