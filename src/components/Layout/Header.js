import React from "react";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/Auth";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: null,
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav className="bg-gray-100 shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() =>
              document
                .getElementById("navbarMenu")
                ?.classList.toggle("hidden")
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <Link to="/" className="text-2xl font-bold text-gray-800">
            MMA
          </Link>
          <ul
            id="navbarMenu"
            className="hidden md:flex md:space-x-6 items-center"
          >
            <li>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-gray-900"
                activeClassName="font-semibold"
              >
                Home
              </NavLink>
            </li>
            {!auth.user ? (
              <>
                <li>
                  <NavLink
                    to="/register"
                    className="text-gray-700 hover:text-gray-900"
                    activeClassName="font-semibold"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="text-gray-700 hover:text-gray-900"
                    activeClassName="font-semibold"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="relative">
                <button
                  className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center"
                  onClick={() =>
                    document
                      .getElementById("dropdownMenu")
                      ?.classList.toggle("hidden")
                  }
                >
                  {auth?.user?.name}
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                      className={`transform transition-transform duration-200 ${
                        document
                          .getElementById("dropdownMenu")
                          ?.classList.contains("hidden")
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </svg>
                </button>
                <ul
                  id="dropdownMenu"
                  className="hidden absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1"
                >
                  <li>
                    <NavLink
                      to="/dashboard/user"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
