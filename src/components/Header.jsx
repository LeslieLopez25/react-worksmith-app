import logo from "../../assets/logo.png";
import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md">
      <img src={logo} alt="Worksmith Logo" className="flex h-13" />
      <a className="btn text-xl btn-ghost">Worksmith</a>
      <div className="flex-1"></div>
      <div className="flex flex-none items-center gap-2 px-4">
        <ul className="menu menu-horizontal px-4">
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
    </div>
  );
};

export default Header;
