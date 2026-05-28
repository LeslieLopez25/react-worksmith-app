const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <img src="/assets/logo.png" alt="Worksmith Logo" className="mr-2 h-8 w-8" />
        <a className="btn text-xl btn-ghost">Worksmith</a>
      </div>
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
