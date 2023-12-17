const Header = () => {
  return (
    <>
      <div className="navbar bg-sky-100 space-x-24 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>PRODUCTS</a>
              </li>
              <li>
                <a>USER</a>
                <ul className="p-2">
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>ABOUT</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold cursor-pointer hover:text-blue-600 transition-all duration-500">
            ProductiFy
          </a>
        </div>
        <div className="navbar-end hidden lg:flex space-x-24">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>PRODUCTS</a>
            </li>
            <li>
              <details>
                <summary>USER</summary>
                <ul className="p-2">
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
