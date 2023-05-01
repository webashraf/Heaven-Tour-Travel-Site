import React from "react";

const HeaderMenu = () => {
  return (
    <>
      <div className="navbar bg-base-100 justify-between sticky top-0 z-10 bg-transparent">
        <div className="navbar-start justify-between lg:justify-normal w-full lg:w-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto"
            >
              <li>News</li>
              <li>Destination</li>
              <li>Blog</li>
              <li>Contact</li>
              <li className="btn btn-warning">Login</li>
              <li>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Searchhhhhhhhh"
                    className="input input-bordered"
                  />
                </div>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Heaven Tour</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-9">
            <li>News</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className="btn btn-warning">Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
