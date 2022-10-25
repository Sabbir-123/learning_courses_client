import React from "react";
import { Link } from "react-router-dom";

const CoursesCom = ({ category }) => {
  const { name, image_url } = category;

  return (
    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
     
      <img src={image_url} className="h-60" alt="" />

      <h2 className="mb-2 font-semibold leading-5">{name}</h2>

      <div className="text-center bg-gray-900">
          <Link
            to='/blockchain/:id'
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Deatils
          </Link>
        </div>
    </div>
  );
};

export default CoursesCom;
