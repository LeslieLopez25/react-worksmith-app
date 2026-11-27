import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../api/projectAPI.js";
import useToast from "../hooks/useToast.js";
import Toast from "../components/Toast.jsx";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";

const statusOptions = ["idea", "in-progress", "on-hold", "completed", "archived"];
const projectTypeOptions = [
  "frontend",
  "backend",
  "fullstack",
  "design",
  "research",
  "documentation",
];

const toolbar = [
  {
    title: "Bold",
    label: "B",
    style: "font-bold",
    mark: "bold",
    run: (e) => e.chain().focus().toggleBold().run(),
  },
  {
    title: "Italic",
    label: "I",
    style: "italic",
    mark: "italic",
    run: (e) => e.chain().focus().toggleItalic().run(),
  },
  {
    title: "Underline",
    label: "U",
    style: "underline",
    mark: "underline",
    run: (e) => e.chain().focus().toggleUnderline().run(),
  },
  { divider: true },
  {
    title: "Numbered list",
    label: "≡",
    mark: "orderedList",
    run: (e) => e.chain().focus().toggleOrderedList().run(),
  },
  {
    title: "Bulleted list",
    label: "•≡",
    mark: "bulletList",
    run: (e) => e.chain().focus().toggleBulletList().run(),
  },
];

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "idea",
    projectType: "",
  });
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: "Describe your project..." })],
    content: "",
    shouldRerenderOnTransaction: true,
    editorProps: {
      attributes: {
        class: "rich-text min-h-48 p-3 text-base focus:outline-none sm:min-h-96",
      },
    },
    onUpdate: ({ editor }) => {
      setFormData((prev) => ({
        ...prev,
        description: editor.isEmpty ? "" : editor.getHTML(),
      }));
    },
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
      setTimeout(() => navigate(draft ? "/drafts" : `/project/${response.data._id}`), 1500);
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
            {toolbar.map((item, index) =>
              item.divider ? (
                <div key={index} className="divider mx-0 divider-horizontal"></div>
              ) : (
                <button
                  key={item.title}
                  type="button"
                  title={item.title}
                  aria-label={item.title}
                  disabled={!editor}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => item.run(editor)}
                  className={`btn btn-ghost btn-xs hover:bg-base-300 hover:text-base-content ${item.style || ""} ${editor?.isActive(item.mark) ? "btn-active bg-base-300" : ""}`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
          <div className="rounded-lg rounded-t-none border border-base-300 bg-base-100 focus-within:border-info">
            <EditorContent editor={editor} />
          </div>
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
              <button
                onClick={() => handleSubmit(true)}
                className="btn btn-outline btn-sm btn-info"
              >
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
