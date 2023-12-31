import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
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
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
                className="bg-primary menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-none w-52"
              >
                {navLinkDropDown}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Drivy</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" gap-4 menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            {user?.photoURL && (
              <img
                className="rounded-full w-[30px]"
                src={user?.photoURL}
                alt="user avatar"
              />
            )}
            {user?.displayName && (
              <p className="py-1 px-2">{user?.displayName}</p>
            )}
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
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
            )}
          </div>
          <div className="navbar-end mr-2 lg:hidden">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    {user?.photoURL ? (
                      <img
                        className="cursor-pointer h-10 w-10 mx-2 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    ) : (
                      <FaRegUser></FaRegUser>
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-primary rounded-none w-52"
                  >
                    {user && (
                      <li className="pl-3 pb-2 ">{user?.displayName}</li>
                    )}
                    {user && (
                      <>
                        <li className="pl-3 pb-2 ">{user?.email}</li>
                        <button
                          onClick={handleLogout}
                          className=" font-bold px-3 py-2 rounded-none border-b-white border-2"
                        >
                          SignOut
                        </button>
                      </>
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <button>
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
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
