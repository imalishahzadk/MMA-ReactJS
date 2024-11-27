import React from "react";
import Layout from "../components/Layout/Layouts";

const About = () => {
  return (
    <Layout title={"About us - MMA"}>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="flex flex-col md:flex-row w-[80%]">
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src="/images/about.jpeg"
              alt="about us"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="flex justify-center items-center md:w-1/2 px-4">
            <p className="text-justify text-gray-700">
              Welcome to our Movies Management App (MMA)! Our mission is to
              provide an intuitive and dynamic platform for managing and
              exploring your favorite movies. From detailed movie previews to
              personalized favorites, we aim to make your movie experience
              seamless and enjoyable.
              <br /><br />
              Built with modern technologies like React, Node.js, and MongoDB,
              MMA is designed to deliver a responsive and efficient user
              experience. Whether you're browsing the latest hits or revisiting
              classics, we have something for every movie lover. Thank you for
              being a part of our journey!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
