import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../src/api/axios";
import { useAuth } from "../src/hooks/useAuth";
import useToast from "../src/hooks/useToast";
import Toast from "../src/components/Toast";

const Profile = () => {
  const { user, logout, updateUser } = useAuth();
  const { toast, showToast, hideToast } = useToast();
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const getInitials = () => {
    if (!user?.name) return "?";
    const parts = user.name.split(" ");
    return parts
      .map((p) => p[0].toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const handleAccountChange = (e) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch("/api/users/profile", accountData);
      updateUser(response.data);
      showToast("Account updated successfully", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to update account", "error");
      console.error(error);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showToast("New passwords do not match", "error");
      return;
    }
    try {
      await api.patch("/api/users/profile/password", {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      showToast("Password update successfully", "success");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to update password.", "error");
      console.log(error);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This cannot be undone."
    );
    if (!confirmed) return;
    try {
      await api.delete("/api/users/profile");
      await logout();
      navigate("/register");
    } catch (err) {
      showToast(err.response?.data?.message || "Failed to delete account.", "error");
      console.error(err);
    }
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-lg loading-bars text-info"></span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center p-4 pt-20 pb-20 sm:p-8 sm:pt-20 sm:pb-18">
      <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      <div className="flex w-full max-w-3xl flex-col gap-6">
        {/* Profile header */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body flex flex-row items-center gap-4 sm:gap-6">
            <div className="placeholder avatar shrink-0">
              <div className="w-16 rounded-full bg-accent text-neutral-content sm:w-24">
                <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-3xl">
                  {getInitials()}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-bold sm:text-2xl">{user?.name || "Loading"}</h1>
              <p className="text-xs text-gray-500 sm:text-sm">{user?.email || ""}</p>
              <span className="mt-1 badge rounded-full p-2 badge-sm badge-info">
                {user?.role || "user"}
              </span>
            </div>
          </div>
        </div>

        {/* Account info */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Account Information</h2>
            <form onSubmit={handleUpdateAccount} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={accountData.name}
                  onChange={handleAccountChange}
                  className="input-bordered input w-full rounded-lg border border-base-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={accountData.email}
                  onChange={handleAccountChange}
                  className="input-bordered input w-full rounded-lg border border-base-300"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn w-full btn-sm btn-info sm:w-auto">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Change password */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Change Password</h2>
            <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="input-bordered input w-full rounded-lg border border-base-300"
                  placeholder="Enter current password"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="input-bordered input w-full rounded-lg border border-base-300"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="input-bordered input w-full rounded-lg border border-base-300"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn w-full btn-sm btn-info sm:w-auto">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Danger zone */}
        <div className="card rounded-lg border border-error bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg text-error">Danger Zone</h2>
            <p className="text-sm text-gray-500">
              Once you delete your account all of your projects, tasks, and images will be
              permanently deleted and cannot be recovered.
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleDeleteAccount}
                className="btn w-full btn-sm btn-error sm:w-auto"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
