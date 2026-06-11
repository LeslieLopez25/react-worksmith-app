const Toast = () => {
  return (
    <div className="toast toast-end toast-top">
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
      <div className="alert alert-error">
        <span>Failed to send message.</span>
      </div>
    </div>
  );
};

export default Toast;
