import React, { useState } from "react";
import Layout from "../../components/Layout/Layouts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiConfig from "../../config"
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiConfig.backendUrl}/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      },{timeout:20000});
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - MMA">
      <div className="flex items-center justify-center min-h-[70vh] bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        >
          <h4 className="text-2xl font-bold text-center mb-6">REGISTER FORM</h4>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
          <div className="mb-4">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="What is Your Father Name..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
