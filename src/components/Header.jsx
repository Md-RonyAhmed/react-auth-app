import { NavLink } from "react-router-dom";

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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/products">PRODUCTS</NavLink>
              </li>
              <li>
                <NavLink to="/user">USER</NavLink>
                <ul className="p-2">
                  <li>
                    <NavLink to="/profile">PROFILE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">LOGIN</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-xl font-bold cursor-pointer hover:text-blue-600 transition-all duration-500"
          >
            ProductiFy
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex space-x-24">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/products">PRODUCTS</NavLink>
            </li>
            <li>
              <details>
                <summary>
                  <NavLink to="/user">USER</NavLink>
                </summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/profile">PROFILE</NavLink>
                  </li>
                  <li>
                  <NavLink to="/login">LOGIN</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
