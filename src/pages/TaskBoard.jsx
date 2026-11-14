import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { getTasksByProject, createTask, updateTask, deleteTask } from "../api/taskAPI.js";
import useToast from "../hooks/useToast";
import { columns } from "../constants/taskColumns.js";
import Toast from "../components/Toast.jsx";

const urgencyOptions = ["low", "medium", "high"];

const taskTypeOptions = [
  "frontend",
  "backend",
  "testing",
  "documentation",
  "design",
  "planning",
  "research",
  "deployment",
  "bug-fix",
  "refactor",
  "database",
  "api",
  "ui",
  "ux",
  "review",
  "security",
  "performance",
];

const urgencyColor = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-green-500",
};

const typeColor = (type) => {
  if (["frontend", "ui", "ux"].includes(type)) return "bg-violet-500";
  if (["backend", "api", "database"].includes(type)) return "bg-cyan-500";
  if (["testing", "review"].includes(type)) return "bg-orange-500";
  if (type === "design") return "bg-pink-500";
  if (["research", "documentation"].includes(type)) return "bg-teal-500";
  if (["planning", "deployment"].includes(type)) return "bg-indigo-500";
  return "bg-red-600"; //bug-fix, security, refactor, performance
};

const acronyms = ["ui", "ux", "api"];

const formatLabel = (value) =>
  value
    .split("-")
    .map((word) =>
      acronyms.includes(word) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

const emptyForm = {
  title: "",
  description: "",
  status: "todo",
  urgency: "low",
  taskType: "",
};

const TaskCardBody = ({ task }) => (
  <>
    <p className="text-xs font-medium sm:text-sm">{task.title}</p>
    {task.description && <p className="mt-1 text-xs text-gray-500">{task.description}</p>}
    <div className="mt-1 flex flex-wrap gap-1">
      <span
        className={`badge rounded-full p-1 badge-xs text-white sm:p-2 ${urgencyColor[task.urgency] || "bg-green-500"}`}
      >
        {formatLabel(task.urgency || "low")}
      </span>
      {task.taskType && (
        <span
          className={`badge rounded-full p-1 badge-xs text-white sm:p-2 ${typeColor(task.taskType)}`}
        >
          {formatLabel(task.taskType)}
        </span>
      )}
    </div>
  </>
);

const DraggableTask = ({ task, border, onOpen }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: task._id });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={() => onOpen(task)}
      className={`cursor-grab rounded-lg border-l-4 bg-base-100 p-2 shadow-sm select-none sm:border-l-10 sm:p-3 ${border} ${isDragging ? "opacity-40" : ""}`}
    >
      <TaskCardBody task={task} />
    </div>
  );
};

const DroppableColumn = ({ column, count, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: column.status });
  return (
    <div className="flex min-w-36 flex-1 flex-col gap-2 sm:min-w-48 sm:gap-3">
      <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm">
        {column.label} ({count})
      </h3>
      <div
        ref={setNodeRef}
        className={`flex max-h-96 min-h-48 flex-col gap-2 overflow-y-auto rounded-lg bg-base-200 p-2 sm:min-h-64 sm:p-3 ${isOver ? "ring-2 ring-info" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

const TaskBoard = ({ projectId, onTasksLoaded }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [formData, setFormData] = useState(emptyForm);
  const [editingTask, setEditingTask] = useState(null);
  const { toast, showToast, hideToast } = useToast();
  const [activeTask, setActiveTask] = useState(null);
  const [overlayHost, setOverlayHost] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })
  );

  const moveTask = async (taskId, newStatus) => {
    const previous = tasks;
    const updated = tasks.map((t) => (t._id === taskId ? { ...t, status: newStatus } : t));

    setTasks(updated);
    onTasksLoaded?.(updated);

    try {
      await updateTask(taskId, { status: newStatus });
    } catch (error) {
      setTasks(previous);
      onTasksLoaded?.(previous);
      showToast(error.response?.data?.message || "Failed to move task.", "error");
      console.error(error);
    }
  };

  const handleDragStart = (event) => {
    setActiveTask(tasks.find((t) => t._id === event.active.id) || null);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);
    if (!over) return;
    const task = tasks.find((t) => t._id === active.id);
    if (task && task.status !== over.id) moveTask(task._id, over.id);
  };

  const handleDragCancel = () => setActiveTask(null);

  const activeBorder = columns.find((c) => c.status === activeTask?.status)?.border;

  useEffect(() => {
    let ignore = false;

    const loadTasks = async () => {
      try {
        const response = await getTasksByProject(projectId);
        if (!ignore) {
          setTasks(response.data);
          onTasksLoaded?.(response.data);
        }
      } catch (error) {
        if (!ignore) {
          showToast(error.response?.data?.message || "Failed to load tasks.", "error");
        }
        console.error(error);
      }
    };

    loadTasks();

    return () => {
      ignore = true;
    };
  }, [projectId, refreshKey, showToast, onTasksLoaded]);

  const refreshTasks = () => setRefreshKey((key) => key + 1);

  const openCreateModal = () => {
    setEditingTask(null);
    setFormData(emptyForm);
    document.getElementById("task_modal").showModal();
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description || "",
      status: task.status,
      urgency: task.urgency || "low",
      taskType: task.taskType || "",
    });
    document.getElementById("task_modal").showModal();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      showToast("Task title is required.", "error");
      return;
    }
    const payload = {
      title: formData.title,
      description: formData.description,
      status: formData.status,
      urgency: formData.urgency,
      ...(formData.taskType && { taskType: formData.taskType }),
    };
    try {
      if (editingTask) {
        await updateTask(editingTask._id, payload);
        showToast("Task updated", "success");
      } else {
        await createTask(projectId, payload);
        showToast("Task created", "success");
      }
      document.getElementById("task_modal").close();
      refreshTasks();
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to save task.", "error");
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Delete this task? This cannot be undone.");
    if (!confirmed) return;
    try {
      await deleteTask(editingTask._id);
      showToast("Task deleted", "success");
      document.getElementById("task_modal").close();
      refreshTasks();
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to delete task.", "error");
      console.error(error);
    }
  };

  return (
    <>
      <dialog id="taskboard_modal" className="modal">
        <div ref={setOverlayHost} className="fixed" />
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
        <div className="modal-box h-5/6 w-11/12 max-w-7xl rounded-lg p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h2 className="text-lg font-bold sm:text-2xl">Task Board</h2>
            <div className="flex items-center gap-3 sm:gap-8">
              <button className="btn btn-xs btn-info sm:btn-sm" onClick={openCreateModal}>
                Create Task
              </button>
              <form method="dialog">
                <button className="btn btn-circle btn-ghost btn-sm">✕</button>
              </form>
            </div>
          </div>

          {/* Kanban columns */}
          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <div
              className="flex gap-3 overflow-x-auto pb-4 sm:gap-4 sm:pb-6"
              style={{ height: "calc(100% - 80px)" }}
            >
              {columns.map((column) => {
                const columnTasks = tasks.filter((t) => t.status === column.status);
                return (
                  <DroppableColumn key={column.status} column={column} count={columnTasks.length}>
                    {columnTasks.map((task) => (
                      <DraggableTask
                        key={task._id}
                        task={task}
                        border={column.border}
                        onOpen={openEditModal}
                      />
                    ))}
                  </DroppableColumn>
                );
              })}
            </div>

            {overlayHost &&
              createPortal(
                <DragOverlay>
                  {activeTask ? (
                    <div
                      className={`cursor-grabbing rounded-lg border-l-4 bg-base-100 p-2 shadow-xl sm:border-l-10 sm:p-3 ${activeBorder}`}
                    >
                      <TaskCardBody task={activeTask} />
                    </div>
                  ) : null}
                </DragOverlay>,
                overlayHost
              )}
          </DndContext>
        </div>

        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Create / edit task modal */}
      <dialog id="task_modal" className="modal">
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
        <div className="modal-box w-11/12 max-w-2xl rounded-lg">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h2 className="text-lg font-bold sm:text-xl">
              {editingTask ? "Edit Task" : "Create Task"}
            </h2>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm">X</button>
            </form>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Task Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Build login page"
                className="input-bordered input w-full rounded-lg border border-base-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe what needs to be done..."
                className="textarea-bordered textarea min-h-20 w-full rounded-lg border border-base-300 sm:min-h-28"
              ></textarea>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label className="text-sm font-semibold">Urgency</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="select-bordered select w-full rounded-lg border border-base-300"
                >
                  {urgencyOptions.map((u) => (
                    <option key={u} value={u}>
                      {formatLabel(u)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label className="text-sm font-semibold">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="select-bordered select w-full rounded-lg border border-base-300"
                >
                  {columns.map((c) => (
                    <option key={c.status} value={c.status}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Task Type</label>
              <select
                name="taskType"
                value={formData.taskType}
                onChange={handleChange}
                className="select-bordered select w-full rounded-lg border border-base-300"
              >
                <option value="">Select Task Type</option>
                {taskTypeOptions.map((t) => (
                  <option key={t} value={t}>
                    {formatLabel(t)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="modal-action flex justify-between">
            {editingTask ? (
              <button onClick={handleDelete} className="btn btn-outline btn-xs btn-error sm:btn-sm">
                Delete Task
              </button>
            ) : (
              <span></span>
            )}
            <div className="flex items-center gap-2">
              <form method="dialog">
                <button className="btn btn-ghost btn-xs sm:btn-sm">Cancel</button>
              </form>
              <button onClick={handleSave} className="btn btn-xs btn-info sm:btn-sm">
                {editingTask ? "Save Changes" : "Create Task"}
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default TaskBoard;
