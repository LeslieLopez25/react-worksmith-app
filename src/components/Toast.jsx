import { useEffect } from "react";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast toast-end toast-top z-50">
      <div className={`alert rounded-lg ${type === "success" ? "alert-success" : "alert-error"}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
