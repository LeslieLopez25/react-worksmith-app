import logo from "../../assets/logo.png";
import { useAuth } from "../hooks/useAuth";
import useToast from "../hooks/useToast";
import ThemeController from "./ThemeController";
import { Link, useNavigate } from "react-router-dom";
import Toast from "./Toast";

const Header = () => {
  const { user, logout } = useAuth();
  const { toast, showToast, hideToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      showToast("Logged out successfully", "success");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      showToast("Failed to log out. Please try again.", "error");
      console.log(error);
    }
  };

  return (
    <>
      <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md">
        <div className="flex flex-none items-center">
          <img src={logo} alt="Worksmith Logo" className="flex h-13" />
        </div>
        <div className="flex flex-1 justify-center">
          <Link to="/home" className="btn text-xl btn-ghost">
            Worksmith
          </Link>
        </div>
        {/* Desktop menu */}
        <div className="hidden flex-none items-center gap-2 px-4 sm:flex">
          <ul className="menu menu-horizontal">
            <li>
              <Link to="/create-project" className="rounded-lg">
                Create
              </Link>
            </li>
            <li>
              <details>
                <summary className="rounded-lg">{user?.name || "Account"}</summary>
                <ul className="rounded-t-none bg-base-100 p-0">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="w-full text-left">
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <ThemeController />
        </div>

        {/* Mobile menu */}
        <div className="flex flex-none items-center gap-1 px-2 sm:hidden">
          <ThemeController iconSize={20} compact={true} />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu z-50 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link to="/create-project">Create</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
