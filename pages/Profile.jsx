const Profile = () => {
  return (
    <div className="flex min-h-screen justify-center p-8 pt-18 pb-18">
      <div className="flex w-full max-w-3xl flex-col gap-6">
        {/* Profile header */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body flex flex-row items-center gap-6">
            <div className="placeholder avatar">
              <div className="w-24 rounded-full bg-neutral text-neutral-content">
                <span className="absolute inset-0 flex items-center justify-center text-3xl">
                  RF
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">Roxanne Farron</h1>
              <p className="text-sm text-gray-500">roxannefarron@worksmith.com</p>
              <span className="mt-1 badge badge-sm badge-info">User</span>
            </div>
          </div>
        </div>

        {/* Account info */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Account Information</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Roxanne Farron"
                  className="input-bordered input w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="roxannefarron@worksmith.com"
                  className="input-bordered input w-full"
                />
              </div>
              <div className="flex justify-end">
                <button className="btn btn-sm btn-info">Save Changes</button>
              </div>
            </div>
          </div>
        </div>

        {/* Change password */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Change Password</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="input-bordered input w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="input-bordered input w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="input-bordered input w-full"
                />
              </div>
              <div className="flex justify-end">
                <button className="btn btn-sm btn-info">Update Password</button>
              </div>
            </div>
          </div>
        </div>

        {/* Danger zone */}
        <div className="card border border-error bg-base-100 shadow-sm">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg text-error">Danger Zone</h2>
            <p className="text-sm text-gray-500">
              Once you delete your account all of your projects, tasks, and images will be
              permanently deleted and cannot be recovered.
            </p>
            <div className="flex justify-end">
              <button className="btn btn-sm btn-error">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
