import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow-sm">
      <img src={logo} alt="Worksmith Logo" className="flex h-13" />
      <a className="btn text-xl btn-ghost">Worksmith</a>
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-4">
          <li>
            <a>Write</a>
          </li>
          <li>
            <details>
              <summary>Name</summary>
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
      </div>
    </div>
  );
};

export default Header;
