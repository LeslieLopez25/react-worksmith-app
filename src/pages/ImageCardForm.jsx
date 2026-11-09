import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { uploadProjectImage } from "../api/projectAPI";
import useToast from "../hooks/useToast.js";
import Toast from "../components/Toast";

const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
const maxSize = 5 * 1024 * 1024; // 5MB

const ImageCardForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast, showToast, hideToast } = useToast();

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);

  // Free the temporary preview URL when it changes or the page closes
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const selectFile = (selected) => {
    if (!selected) return;
    if (!allowedTypes.includes(selected.type)) {
      showToast("Only JPG and PNG images are allowed.", "error");
      return;
    }
    if (selected.size > maxSize) {
      showToast("Image must be 5MB or smaller.", "error");
      return;
    }
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    selectFile(e.dataTransfer.files[0]);
  };

  const handleSave = async () => {
    document.getElementById("preview_modal")?.close();

    if (!file) {
      showToast("Please choose an image first.", "error");
      return;
    }
    if (!title.trim()) {
      showToast("Please add a title.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);

    setSaving(true);
    try {
      await uploadProjectImage(id, formData);
      showToast("Image added successfully", "success");
      setTimeout(() => navigate(`/project/${id}`), 1500);
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to upload image.", "error");
      console.error(error);
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center p-4 pt-20 pb-20 sm:p-8 sm:pt-20 sm:pb-20">
      <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      <div className="flex w-full max-w-2xl flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-xl font-bold sm:text-2xl">Add Image</h1>
          <div className="flex gap-2">
            <button
              className="btn btn-outline btn-xs sm:btn-sm"
              onClick={() => document.getElementById("preview_modal").showModal()}
            >
              Preview
            </button>
          </div>
          <button onClick={handleSave} disabled={saving} className="btn btn-xs btn-info sm:btn-sm">
            {saving ? "Saving..." : "Save Image"}
          </button>
        </div>
        {/* Image upload */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Upload Image</h2>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-sky-600 p-6 sm:p-12"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Selected preview"
                  className="max-h-48 rounded-lg object-contain"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400 sm:h-12 sm:w-12"
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
              )}
              <p className="text-xs text-gray-500 sm:text-sm">
                {file ? file.name : "Drag and drop your image here or"}
              </p>
              <input
                type="file"
                onChange={(e) => selectFile(e.target.files[0])}
                className="file-input-bordered file-input w-full file-input-xs sm:max-w-xs sm:file-input-sm"
                accept="image/jpeg, image/png"
              />
            </div>
          </div>
        </div>

        {/* Image details */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Image Details</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Stage 1 — Initial wireframe"
                  className="input-bordered input w-full rounded-lg border border-base-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief summary of what this image shows..."
                  className="textarea-bordered textarea min-h-24 w-full rounded-lg border border-base-300 sm:min-h-32"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview modal */}
      <dialog id="preview_modal" className="modal">
        <div className="modal-box w-11/12 max-w-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold sm:text-xl">Image Preview</h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>
          <div className="card w-full rounded-lg bg-base-200 shadow-sm">
            <figure>
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="h-36 w-full object-cover sm:h-48" />
              ) : (
                <div className="flex h-36 w-full items-center justify-center bg-base-300 sm:h-48">
                  <p className="text-xs text-gray-500 sm:text-sm">Image preview will appear here</p>
                </div>
              )}
            </figure>
            <div className="card-body p-3 sm:p-4">
              <h2 className="card-title text-base sm:text-lg">{title || "Image Title"}</h2>
              <p className="text-xs text-gray-500 sm:text-sm">
                {description || "Image description will appear here"}
              </p>
            </div>
          </div>
          <div className="modal-action">
            <div className="flex w-full items-center justify-end gap-2">
              <form method="dialog" className="flex items-center">
                <button className="btn btn-outline btn-xs sm:btn-sm">Go Back</button>
              </form>
              <button
                onClick={handleSave}
                disabled={saving}
                className="btn btn-xs btn-info sm:btn-sm"
              >
                {saving ? "Saving..." : "Save Image"}
              </button>
            </div>
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
