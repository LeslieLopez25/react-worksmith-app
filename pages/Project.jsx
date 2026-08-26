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
                className="textarea min-h-80 w-full text-lg textarea-xl textarea-info"
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
          <div className="flex flex-col gap-2 pt-1 pl-10">
            <button
              onClick={() => document.getElementById("taskboard_modal").showModal()}
              className="btn pl-3 text-left text-lg transition-colors btn-soft btn-sm btn-info"
            >
              Task Board →
            </button>
            <div className="rounded-lg bg-base-200 p-4">
              <p className="text-sm text-gray-500">To Do (1)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-4">
              <p className="text-sm text-gray-500">In Progress (2)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-4">
              <p className="text-sm text-gray-500">Completed (3)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-4">
              <p className="text-sm text-gray-500">Revised (4)</p>
            </div>
            <div className="rounded-lg bg-base-200 p-4">
              <p className="text-sm text-gray-500">Strategizing (5)</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-3 pl-10">
            <button className="btn w-full btn-dash btn-xs btn-info">Upload Image</button>
            <button className="btn w-full btn-dash btn-xs btn-success">Edit</button>
          </div>
        </div>
      </div>
      <TaskBoard />
    </>
  );
};

export default Project;
