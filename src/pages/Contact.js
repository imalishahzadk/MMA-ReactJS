import React from "react";
import Layout from "../components/Layout/Layouts";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="flex flex-col md:flex-row w-[80%]">
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src="/images/contactus.jpeg"
              alt="contact us"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center items-start md:w-1/2 px-4">
            <h1 className="bg-gray-800 text-white text-center py-2 px-4 rounded-md w-full">
              CONTACT US
            </h1>
            <p className="text-justify text-gray-700 mt-4">
              Have questions or need information about our platform? Feel free
              to reach out—we're available 24/7!
            </p>
            <p className="flex items-center text-gray-600 mt-4">
              <BiMailSend className="mr-2 text-lg text-blue-500" />
              <span>Email: support@moviesapp.com</span>
            </p>
            <p className="flex items-center text-gray-600 mt-4">
              <BiPhoneCall className="mr-2 text-lg text-green-500" />
              <span>Phone: +1-800-123-4567</span>
            </p>
            <p className="flex items-center text-gray-600 mt-4">
              <BiSupport className="mr-2 text-lg text-purple-500" />
              <span>Toll-free: +1-888-987-6543</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
