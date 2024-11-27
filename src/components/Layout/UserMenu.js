import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
        User Dashboard
      </h3>
      <nav className="space-y-4">
        <NavLink
          to="/dashboard/user/movies"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg border-2 text-gray-700 hover:bg-gray-100 transition-all ${
              isActive
                ? "bg-blue-100 border-blue-500 text-blue-700 font-bold"
                : "bg-white border-gray-300"
            }`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/dashboard/user/favorites"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg border-2 text-gray-700 hover:bg-gray-100 transition-all ${
              isActive
                ? "bg-blue-100 border-blue-500 text-blue-700 font-bold"
                : "bg-white border-gray-300"
            }`
          }
        >
          Favorite Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default UserMenu;
