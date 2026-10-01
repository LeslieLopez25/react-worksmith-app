import logo from "../../assets/logo.png";
import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md">
      <div className="flex flex-none items-center">
        <img src={logo} alt="Worksmith Logo" className="flex h-13" />
      </div>
      <div className="flex-2 justify-center">
        <a className="btn text-xl btn-ghost">Worksmith</a>
      </div>
      {/* Desktop menu */}
      <div className="hidden flex-none items-center gap-2 px-4 sm:flex">
        <ul className="menu menu-horizontal">
          <li>
            <a className="rounded-lg">Create</a>
          </li>
          <li>
            <details>
              <summary className="rounded-lg">Name</summary>
              <ul className="rounded-t-none bg-base-100 p-0">
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>Logout</a>
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
              <a>Create</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
