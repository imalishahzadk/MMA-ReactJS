import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layouts";
import { useAuth } from "../context/Auth";

const HomePage = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!auth?.user) {
      navigate("/register"); 
    } else {
      navigate("/dashboard/user"); 
    }
  };

  return (
    <Layout title="Home | MMA">
      <div className="bg-gray-50 min-h-screen">
        <div className="relative bg-gradient-to-r from-gray-700 to-black text-white">
          <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Manage Your Movies Effortlessly
            </h1>
            <p className="text-lg mb-6">
              Discover, organize, and favorite movies all in one place.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold text-xl mb-2">Organize Your Movies</h3>
              <p className="text-gray-600">
                Toggle between grid or list views to browse your collection with
                ease.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold text-xl mb-2">Favorites</h3>
              <p className="text-gray-600">
                Mark your favorite movies and access them anytime.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold text-xl mb-2">Detailed Information</h3>
              <p className="text-gray-600">
                View trailers, descriptions, release dates, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
