import { NavLink } from "react-router-dom";
import logo from "/carlogo2.png";
const Navbar = () => {
  const navLinkDropDown = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-primary  border-2 border-white"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-primary  border-2 border-white"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-primary  border-2 border-white"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-primary py-2 border-b-2 border-white"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-primary py-2 border-b-2 border-white"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-primary py-2 border-b-2 border-white"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-primary-default">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* <div className="flex items-center">
          <img className="w-16" src={logo} alt="" />
          <h3 className="text-white font-bold text-lg">DRIVY</h3>
        </div> */}
        <div>
          <ul className="flex text-white gap-4 "></ul>
        </div>
        <div className="navbar text-white">
          <div className="navbar-start">
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
                className="bg-primary-default menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {navLinkDropDown}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Drivy</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" gap-4 menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-primary py-2 border-b-2 border-white"
                  : ""
              }
            >
              login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
