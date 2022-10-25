import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const language = useLoaderData();
  const { _id, title, image_url, details } = language;
  return (
    <div className="grid justify-center dark:bg-gray-700">
      <div className="max-w-xl p-10 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <div className="mt-6 mb-2">
          <ReactToPdf></ReactToPdf>
        </div>
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        </div>
        <img
          src={image_url}
          alt=""
          className="object-cover object-center w-full object-fill  rounded-md  dark:bg-gray-500"
        />

        <p className="dark:text-gray-100 mt-5">{details}</p>

        <div className="mt-6 mb-2">
		<Link to={'/premium'}>
        <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-900 hover:bg-black focus:shadow-outline focus:outline-none">Get Premium Access</button>

        </Link>
        	</div>
      </div>
    </div>
  );
};

export default CourseDetails;
