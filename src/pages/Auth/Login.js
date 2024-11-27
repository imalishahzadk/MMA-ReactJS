import React, { useState } from "react";
import Layout from "../../components/Layout/Layouts";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/Auth";
import apiConfig from "../../config";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the backend
      const res = await axios.post(`${apiConfig.backendUrl}/api/v1/auth/login`, {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);

        // Store authentication data in context (if using context)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        // Store the complete auth data in localStorage
        localStorage.setItem("auth", JSON.stringify(res.data)); // Store user data and token in localStorage

        // Store token separately in localStorage (for future requests)
        localStorage.setItem("token", res.data.token); // Store token for making authenticated API requests

        // Redirect to the page the user came from (or home page if not redirected)
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - MMA">
      <div className="flex items-center justify-center min-h-[70vh] bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        >
          <h4 className="text-2xl font-bold text-center mb-6">LOGIN FORM</h4>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-4 text-right">
            <button
              type="button"
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-700 to-black-500 text-white font-bold py-2 px-4 rounded hover:bg-black-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
