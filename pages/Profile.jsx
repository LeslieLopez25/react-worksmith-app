const Profile = () => {
  return (
    <div className="flex min-h-screen justify-center p-4 pt-20 pb-20 sm:p-8 sm:pt-20 sm:pb-18">
      <div className="flex w-full max-w-3xl flex-col gap-6">
        {/* Profile header */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body flex flex-row items-center gap-4 sm:gap-6">
            <div className="placeholder avatar shrink-0">
              <div className="w-16 rounded-full bg-accent text-neutral-content sm:w-24">
                <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-3xl">
                  RF
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-bold sm:text-2xl">Roxanne Farron</h1>
              <p className="text-xs text-gray-500 sm:text-sm">roxannefarron@worksmith.com</p>
              <span className="mt-1 badge rounded-full p-2 badge-sm badge-info">User</span>
            </div>
          </div>
        </div>

        {/* Account info */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Account Information</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Roxanne Farron"
                  className="input-bordered input w-full rounded-lg border border-base-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="roxannefarron@worksmith.com"
                  className="input-bordered input w-full rounded-lg border border-base-300"
                />
              </div>
              <div className="flex justify-end">
                <button className="btn w-full btn-sm btn-info sm:w-auto">Save Changes</button>
              </div>
            </div>
          </div>
        </div>

        {/* Change password */}
        <div className="card rounded-lg border border-base-300 bg-base-100 shadow-md">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Change Password</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="input-bordered input w-full rounded-lg border border-base-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="input-bordered input w-full rounded-lg border border-base-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="input-bordered input w-full rounded-lg border border-base-300"
                />
              </div>
              <div className="flex justify-end">
                <button className="btn w-full btn-sm btn-info sm:w-auto">Update Password</button>
              </div>
            </div>
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
              <button className="btn w-full btn-sm btn-error sm:w-auto">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
