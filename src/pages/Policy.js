import React from "react";
import Layout from "../components/Layout/Layouts";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="flex flex-col md:flex-row w-[80%]">
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src="/images/contactus.jpeg"
              alt="privacy policy"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center items-start md:w-1/2 px-4 h-[70vh] overflow-y-auto">
            <h1 className="bg-gray-800 text-white text-center py-2 px-4 rounded-md w-full">
              Privacy Policy
            </h1>
            <p className="text-justify text-gray-700 mt-4">
              Your privacy is important to us. This privacy policy explains how
              we collect, use, and protect your personal information when you
              interact with our platform. We are committed to ensuring the
              security and confidentiality of your personal data.
            </p>
            <p className="text-justify text-gray-700 mt-2">
              <strong>1. Information Collection</strong><br />
              We collect information when you register, log in, or make a purchase.
              The types of data we collect include personal details such as your
              name, email address, and payment information.
            </p>
            <p className="text-justify text-gray-700 mt-2">
              <strong>2. Data Usage</strong><br />
              The information we collect is used to provide you with personalized
              services, process transactions, and improve the overall user
              experience on our platform.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
