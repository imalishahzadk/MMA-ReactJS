import React from "react";
import Layout from "../../components/Layout/Layouts";
import { useAuth } from "../../context/Auth";
import UserMenu from "../../components/Layout/UserMenu";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - MMA"}>
      <div className="bg-gray-100 min-h-screen py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <UserMenu />
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome, {auth?.user?.name}!
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-medium text-gray-600 w-24">Name:</span>
                  <span className="text-gray-800">{auth?.user?.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-600 w-24">Email:</span>
                  <span className="text-gray-800">{auth?.user?.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-600 w-24">Address:</span>
                  <span className="text-gray-800">{auth?.user?.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Dashboard;
