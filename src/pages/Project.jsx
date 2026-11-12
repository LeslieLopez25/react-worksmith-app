import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageCard from "../components/ImageCard.jsx";
import TaskBoard from "../pages/TaskBoard.jsx";
import {
  getProjectById,
  updateProject,
  deleteProject,
  updateProjectImage,
  deleteProjectImage,
  updateProjectNote,
  deleteProjectNote,
} from "../api/projectAPI.js";
import useToast from "../hooks/useToast.js";
import { columns } from "../constants/taskColumns.js";
import Toast from "../components/Toast.jsx";
import { Link } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast, showToast, hideToast } = useToast();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState("");
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("image");
  const [selectedImageId, setSelectedImageId] = useState("");
  const [editImageData, setEditImageData] = useState({ title: "", description: "" });
  const [replaceFile, setReplaceFile] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [selectedNoteId, setSelectedNoteId] = useState("");
  const [editNoteContent, setEditNoteContent] = useState("");
  const [saving, setSaving] = useState(false);

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
  }, [id, showToast]);

  const handleAddNote = async () => {
    if (!newNote.trim()) {
      showToast("Note cannot be empty.", "error");
      return;
    }
    try {
      const response = await updateProject(id, {
        notes: [...project.notes, { content: newNote, createdAt: new Date() }],
      });
      setProject(response.data);
      setNewNote("");
      showToast("Note added successfully", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to add note.", "error");
      console.error(error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      const response = await deleteProjectNote(id, noteId);
      setProject(response.data);
      showToast("Note deleted", "success");
      return true;
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to delete note.", "error");
      console.error(error);
      return false;
    }
  };

  const closeEditModal = () => document.getElementById("edit_modal").close();

  const openEditModal = () => {
    const firstImage = project.images?.[0];
    const firstNote = project.notes?.[0];
    setSelectedImageId(firstImage?._id || "");
    setEditImageData({
      title: firstImage?.filename || "",
      description: firstImage?.description || "",
    });
    setReplaceFile(null);
    setFileInputKey((key) => key + 1);
    setSelectedNoteId(firstNote?._id || "");
    setEditNoteContent(firstNote?.content || "");
    setActiveTab("image");
    document.getElementById("edit_modal").showModal();
  };

  const handleSelectImage = (imageId) => {
    const image = project.images.find((img) => img._id === imageId);
    setSelectedImageId(imageId);
    setEditImageData({
      title: image?.filename || "",
      description: image?.description || "",
    });
    setReplaceFile(null);
    setFileInputKey((key) => key + 1);
  };

  const handleSelectNote = (noteId) => {
    const note = project.notes.find((n) => n._id === noteId);
    setSelectedNoteId(noteId);
    setEditNoteContent(note?.content || "");
  };

  const handleSaveImageEdit = async () => {
    if (!selectedImageId) return;
    if (!editImageData.title.trim()) {
      showToast("Image title is required.", "error");
      return;
    }
    const formData = new FormData();
    formData.append("title", editImageData.title);
    formData.append("description", editImageData.description);
    if (replaceFile) formData.append("image", replaceFile);

    setSaving(true);
    try {
      const response = await updateProjectImage(id, selectedImageId, formData);
      setProject(response.data);
      closeEditModal();
      showToast("Image card updated", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to update image card.", "error");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteImage = async () => {
    if (!selectedImageId) return;
    if (!window.confirm("Delete this image card? This can not be undone.")) return;
    setSaving(true);
    try {
      const response = await deleteProjectImage(id, selectedImageId);
      setProject(response.data);
      closeEditModal();
      showToast("Image card deleted", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to delete image card.", "error");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveNoteEdit = async () => {
    if (!selectedNoteId) return;
    if (!editNoteContent.trim()) {
      showToast("Note cannot be empty.", "error");
      return;
    }
    setSaving(true);
    try {
      const response = await updateProjectNote(id, selectedNoteId, editNoteContent);
      setProject(response.data);
      closeEditModal();
      showToast("Note updated", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to update note.", "error");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteNoteFromModal = async () => {
    if (!selectedNoteId) return;
    if (!window.confirm("Delete this note? This cannot be undone.")) return;
    setSaving(true);
    if (await handleDeleteNote(selectedNoteId)) closeEditModal();
    setSaving(false);
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

  const hasSelection = activeTab === "image" ? selectedImageId : selectedNoteId;

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
                  imageUrl={image.url}
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
                    {project.notes.map((note) => (
                      <li
                        key={note._id}
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
                          onClick={() => handleDeleteNote(note._id)}
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

        <div className="flex flex-col gap-4 border-t border-base-300 p-4 pb-20 lg:sticky lg:top-0 lg:h-screen lg:w-50 lg:flex-col lg:justify-between lg:overflow-y-auto lg:border-t-0 lg:border-l lg:pt-17 lg:pr-5">
          <div className="flex flex-col gap-2 lg:pt-3">
            <button
              onClick={() => document.getElementById("taskboard_modal").showModal()}
              className="btn pl-3 text-left text-base transition-colors btn-soft btn-sm btn-info"
            >
              Task Board →
            </button>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-1.5 lg:short:gap-1">
              {columns.map((column) => (
                <div key={column.status} className="rounded-lg bg-base-200 p-2 lg:short:p-1">
                  <p className="text-xs text-base-content sm:text-sm">
                    {column.label} ({tasks.filter((t) => t.status === column.status).length})
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 lg:flex-col">
            <Link
              to={`/add-image/${id}`}
              className="btn flex-1 btn-dash btn-sm btn-info lg:w-full lg:flex-none lg:short:btn-xs"
            >
              Upload Image
            </Link>
            <button
              className="btn flex-1 btn-dash btn-sm btn-success lg:w-full lg:flex-none lg:short:btn-xs"
              onClick={openEditModal}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Edit/Delete modal */}
      <dialog id="edit_modal" className="modal">
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
        <div className="modal-box w-11/12 max-w-2xl rounded-lg">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h2 className="text-lg font-bold sm:text-xl">Edit Project Content</h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>

          {/* Tabs */}
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

          {/* Image card tab */}
          {activeTab === "image" &&
            (project.images?.length > 0 ? (
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold">Choose Image Card</label>
                  <select
                    value={selectedImageId}
                    onChange={(e) => handleSelectImage(e.target.value)}
                    className="select-bordered select w-full rounded-lg border border-base-300"
                  >
                    {project.images.map((image, index) => (
                      <option key={image._id} value={image._id}>
                        {`${index + 1}. ${image.filename || "Untitled"}`}
                      </option>
                    ))}
                  </select>
                </div>
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
                      setEditImageData({ ...editImageData, description: e.target.value })
                    }
                    className="textarea-bordered textarea min-h-20 w-full rounded-lg border border-base-300 sm:min-h-28"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold">Replace Image (optional)</label>
                  <input
                    key={fileInputKey}
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={(e) => setReplaceFile(e.target.files[0] || null)}
                    className="file-input-bordered file-input w-full file-input-xs sm:file-input-sm"
                  />
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No image cards yet. Use Upload Image to add one.
              </p>
            ))}

          {/* Note tab */}
          {activeTab === "note" &&
            (project.notes?.length > 0 ? (
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold">Choose Note</label>
                  <select
                    value={selectedNoteId}
                    onChange={(e) => handleSelectNote(e.target.value)}
                    className="select-bordered select w-full rounded-lg border border-base-300"
                  >
                    {project.notes.map((note, index) => (
                      <option key={note._id} value={note._id}>
                        {`${index + 1}. ${note.content.slice(0, 40)}${note.content.length > 40 ? "…" : ""}`}
                      </option>
                    ))}
                  </select>
                </div>
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
            ) : (
              <p className="text-sm text-gray-500">No notes yet. Add one from the notes box.</p>
            ))}

          {/* Modal actions */}
          <div className="modal-action flex justify-between">
            <button
              onClick={activeTab === "image" ? handleDeleteImage : handleDeleteNoteFromModal}
              disabled={saving || !hasSelection}
              className="btn btn-outline btn-xs btn-error sm:btn-sm"
            >
              Delete
            </button>
            <div className="flex items-center gap-2">
              <form method="dialog" className="flex items-center">
                <button className="btn btn-ghost btn-xs sm:btn-sm">Cancel</button>
              </form>
              <button
                onClick={activeTab === "image" ? handleSaveImageEdit : handleSaveNoteEdit}
                disabled={saving || !hasSelection}
                className="btn btn-xs btn-info sm:btn-sm"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>

      <TaskBoard projectId={id} onTasksLoaded={setTasks} />
    </>
  );
};

export default Project;
