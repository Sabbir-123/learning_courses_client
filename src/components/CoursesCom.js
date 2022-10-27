import React from "react";
import { Link } from "react-router-dom";

const CoursesCom = ({ category }) => {
  const { _id, title, image_url } = category;

  return (
    <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
     
      <img src={image_url} className="h-60" alt="" />

      <h2 className="mb-2 font-semibold leading-5">Learn {title}</h2>

      <div className="text-center ">
          <Link
            to={`/blockchain/${_id}`}
            className="inline-flex bg-gradient-to-r from-green-400 to-blue-500 hover:from-black hover:to-gray-700 hover:text-white items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Details
          </Link>
        </div>
    </div>
  );
};

export default CoursesCom;
