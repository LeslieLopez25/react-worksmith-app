import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageCard from "../src/components/ImageCard.jsx";
import TaskBoard from "../pages/TaskBoard.jsx";
import { getProjectById, updateProject, deleteProject } from "../src/api/projectAPI.js";
import useToast from "../src/hooks/useToast.js";
import Toast from "../src/components/Toast.jsx";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast, showToast, hideToast } = useToast();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editImageData, setEditImageData] = useState({
    title: "",
    description: "",
  });
  const [activeTab, setActiveTab] = useState("image");
  const [editNoteContent, setEditNoteContent] = useState("");
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjectById(id);
        setProject(response.data);
      } catch (error) {
        showToast(error.response?.data?.message || "Failed to load project.", "error");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const handleAddNote = async () => {
    if (!newNote.trim()) {
      showToast("Note cannot be empty.", "error");
      return;
    }
    try {
      const response = await updateProject(id, {
        notes: [...project.notes, { content: newNote, createAt: new Date() }],
      });
      setProject(response.data);
      setNewNote("");
      showToast("Note added successfully", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to add note.", "error");
      console.error(error);
    }
  };

  const handleDeleteNote = async (noteIndex) => {
    try {
      const updatedNotes = project.notes.filter((_, i) => i !== noteIndex);
      const response = await updateProject(id, { notes: updatedNotes });
      setProject(response.data);
      showToast("Note deleted", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to delete note.", "error");
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleDeleteProject = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project? This cannot be undone."
    );
    if (!confirmed) return;
    try {
      await deleteProject(id);
      showToast("Project deleted successfully", "success");
      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to delete project.", "error");
      console.error(error);
    }
  };

  const handleSaveImageEdit = async () => {
    try {
      const response = await updateProject(id, {
        images: [
          {
            url: project.images?.[0]?.url || "",
            filename: editImageData.title,
            description: editImageData.description,
          },
        ],
      });
      setProject(response.data);
      showToast("Image card updated successfully", "success");
      document.getElementById("edit_modal").close();
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to update image card.", "error");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-100">
        <span className="loading loading-lg loading-bars text-info"></span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-100">
        <p className="text-gray-500">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Toast message={toast.message} type={toast.type} onClose={hideToast} />

      <div className="flex h-full flex-col lg:flex-row">
        {/* Left column */}
        <div className="flex flex-1 flex-col items-center gap-6 overflow-y-auto p-4 pt-20 pb-4 sm:p-8 sm:pt-20 sm:pb-24">
          <div className="flex w-full max-w-5xl items-center justify-between">
            <h1 className="text-xl font-bold sm:text-2xl">{project.title}</h1>
            <button onClick={handleDeleteProject} className="btn btn-xs btn-error sm:btn-sm">
              Delete Project
            </button>
          </div>

          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:gap-4">
            <div className="hidden flex-col gap-4 overflow-visible lg:flex">
              {project.images?.slice(0, 2).map((image, index) => (
                <ImageCard
                  key={index}
                  imageUrl={Image.url}
                  title={image.filename}
                  description={image.description}
                />
              ))}
            </div>

            <div className="flex flex-1 flex-col gap-4">
              {/* Notes list */}
              <div className="flex flex-col gap-2">
                {project.notes?.length > 0 ? (
                  <ul className="flex flex-col gap-2">
                    {project.notes.map((note, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg border border-base-300 bg-base-100 p-3"
                      >
                        {/* Bullet */}
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-info"></span>

                        <div className="flex flex-1 flex-col gap-1">
                          <p className="text-sm">{note.content}</p>
                          <p className="text-xs text-gray-500">{formatDate(note.createdAt)}</p>
                        </div>

                        {/* Delete note button */}
                        <button
                          onClick={() => handleDeleteNote(index)}
                          className="btn text-error btn-ghost btn-xs"
                        >
                          X
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No notes yet. Add your first note below</p>
                )}
              </div>

              {/* Add new note */}
              <textarea
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="textarea min-h-24 w-full rounded-lg border border-base-300 text-base textarea-info sm:min-h-32"
              ></textarea>
              <button
                onClick={handleAddNote}
                className="btn w-full btn-outline btn-sm btn-info sm:w-auto"
              >
                Add Note
              </button>
            </div>

            <div className="hidden flex-col gap-4 overflow-visible lg:flex">
              {project.images?.slice(2, 4).map((image, index) => (
                <ImageCard
                  key={index}
                  imageUrl={image.url}
                  title={image.filename}
                  description={image.description}
                />
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 lg:hidden">
            {project.images?.map((image, index) => (
              <ImageCard
                key={index}
                imageUrl={image.url}
                title={image.filename}
                description={image.description}
              />
            ))}
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
            <a
              className={`tab text-sm sm:text-base ${activeTab === "image" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("image")}
            >
              Image Card
            </a>
            <a
              className={`tab text-sm sm:text-base ${activeTab === "note" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("note")}
            >
              Note
            </a>
          </div>

          {/* Image card edit form */}
          {activeTab === "image" && (
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Image Title</label>
                <input
                  type="text"
                  placeholder="e.g. Stage 1 — Initial wireframe"
                  value={editImageData.title}
                  onChange={(e) => setEditImageData({ ...editImageData, title: e.target.value })}
                  className="input-bordered input w-full rounded-lg border border-base-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  placeholder="Brief summary of what this image shows..."
                  value={editImageData.description}
                  onChange={(e) =>
                    setEditImageData({
                      ...editImageData,
                      description: e.target.value,
                    })
                  }
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
          )}

          {/* Note edit form */}
          {activeTab === "note" && (
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Note Content</label>
                <textarea
                  placeholder="Edit your note..."
                  value={editNoteContent}
                  onChange={(e) => setEditNoteContent(e.target.value)}
                  className="textarea-bordered textarea min-h-28 w-full rounded-lg border border-base-300"
                ></textarea>
              </div>
            </div>
          )}

          {/* Modal actions */}
          <div className="modal-action flex justify-between">
            <button className="btn btn-outline btn-xs btn-error sm:btn-sm">Delete</button>
            <div className="flex items-center gap-2">
              <form method="dialog" className="flex items-center">
                <button className="btn btn-ghost btn-xs sm:btn-sm">Cancel</button>
              </form>
              <button className="btn btn-xs btn-info sm:btn-sm" onClick={handleSaveImageEdit}>
                Save Changes
              </button>
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
