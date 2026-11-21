import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDraftProjects, updateProject, deleteProject } from "../api/projectAPI.js";
import useToast from "../hooks/useToast.js";
import Toast from "../components/Toast.jsx";
import { toPlainText } from "../utils/richText.js";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const response = await getDraftProjects();
        setDrafts(response.data);
      } catch (error) {
        showToast(error.response?.data?.message || "Failed to load drafts.", "error");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDrafts();
  }, [showToast]);

  const handlePublish = async (id) => {
    try {
      await updateProject(id, { isDraft: false });
      setDrafts((prev) => prev.filter((draft) => draft._id !== id));
      showToast("Project published", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to publish project.", "error");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this draft? This cannot be undone.")) return;
    try {
      await deleteProject(id);
      setDrafts((prev) => prev.filter((draft) => draft._id !== id));
      showToast("Draft deleted", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to delete draft.", "error");
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

  return (
    <div className="flex min-h-screen justify-center bg-base-100 p-4 pt-20 pb-24 sm:p-8 sm:pt-20 sm:pb-24">
      <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      <div className="flex w-full max-w-3xl flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-bold sm:text-3xl">Drafts</h1>
          <Link to="/home" className="btn btn-outline btn-sm btn-info">
            Back to Projects
          </Link>
        </div>

        {drafts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {drafts.map((draft) => (
              <div
                key={draft._id}
                className="card rounded-lg border border-base-300 bg-base-100 shadow-md"
              >
                <div className="card-body gap-3 p-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="card-title text-base sm:text-lg">{draft.title}</h2>
                    {toPlainText(draft.description) && (
                      <p className="line-clamp-2 text-sm text-gray-500">
                        {toPlainText(draft.description)}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge rounded-full p-2 badge-sm capitalize badge-info">
                      {draft.projectType || "General"}
                    </span>
                    <span className="badge rounded-full badge-ghost p-2 badge-sm capitalize">
                      {draft.status}
                    </span>
                    <span className="text-xs text-gray-500">
                      Last edited {formatDate(draft.updatedAt)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                    <Link
                      to={`/project/${draft._id}`}
                      className="btn btn-outline btn-xs btn-info sm:btn-sm"
                    >
                      Open
                    </Link>
                    <button
                      onClick={() => handlePublish(draft._id)}
                      className="btn btn-xs btn-info sm:btn-sm"
                    >
                      Publish
                    </button>
                    <button
                      onClick={() => handleDelete(draft._id)}
                      className="btn btn-outline btn-xs btn-error sm:btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-xl font-bold">No drafts</h2>
            <p className="max-w-sm text-sm text-gray-500">
              Projects you save with Save as Draft will show up here until you publish them.
            </p>
            <Link to="/create-project" className="btn btn-sm btn-info">
              Create a project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drafts;
