import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../src/api/projectAPI.js";
import useToast from "../src/hooks/useToast.js";
import Toast from "../src/components/Toast.jsx";

const statusOptions = ["idea", "in-progress", "on-hold", "completed", "archived"];
const projectTypeOptions = [
  "frontend",
  "backend",
  "fullstack",
  "design",
  "research",
  "documentation",
];

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "idea",
    projectType: "",
  });
  const { toast, showToast, hideToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (draft = false) => {
    if (!formData.title) {
      showToast("Project title is required.", "error");
      return;
    }
    try {
      const response = await createProject({
        ...formData,
        isDraft: draft,
      });
      showToast(draft ? "Project saved as draft!" : "Project created successfully!", "success");
      setTimeout(() => navigate(`/project/${response.data._id}`), 1500);
    } catch (err) {
      showToast(err.response?.data?.message || "Failed to create project.", "error");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-6 p-4 pt-20 pb-20 sm:flex-row sm:p-8 sm:pt-18">
      <Toast message={toast.message} type={toast.type} onClose={hideToast} />

      {/* Left column */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
            <div className="divider mx-0 divider-horizontal"></div>
            <button className="btn btn-ghost btn-xs hover:bg-base-300 hover:text-base-content">
              ≡
            </button>
            <button className="btn btn-ghost btn-xs hover:bg-base-300 hover:text-base-content">
              •≡
            </button>
          </div>
          <textarea
            placeholder="Describe your project..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                <span className="font-semibold">Status: </span>
                <span className="capitalize">{formData.status}</span>
              </p>
              <p>
                <span className="font-semibold">Visibility:</span> Private
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <button onClick={() => handleSubmit(true)} className="btn btn-outline btn-sm">
                Save as Draft
              </button>
              <button onClick={() => handleSubmit(false)} className="btn btn-sm btn-info">
                Create Project
              </button>
            </div>
          </div>
        </div>

        {/* Status card */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body gap-3">
            <h2 className="card-title text-lg">Status</h2>
            <div className="flex flex-col gap-2">
              {statusOptions.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3"
                >
                  <input
                    type="radio"
                    name="status"
                    className="radio radio-sm radio-accent"
                    checked={formData.status === option}
                    onChange={() => setFormData({ ...formData, status: option })}
                  />
                  <span className="text-sm capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Project Type card */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body gap-3">
            <h2 className="card-title text-lg">Project Type</h2>
            <div className="flex flex-col gap-2">
              {projectTypeOptions.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-base-300 p-3"
                >
                  <input
                    type="radio"
                    name="projectType"
                    className="radio radio-sm radio-accent"
                    checked={formData.projectType === option}
                    onChange={() => setFormData({ ...formData, projectType: option })}
                  />
                  <span className="text-sm capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
