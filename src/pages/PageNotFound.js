import React from "react";
import Layout from "../components/Layout/Layouts";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Go Back - Page Not Found"}>
      <div className="flex flex-col justify-center items-center h-[70vh] text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl text-gray-700 mt-4">Oops! Page Not Found</h2>
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
