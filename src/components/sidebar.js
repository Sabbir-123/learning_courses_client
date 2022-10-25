import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Sidebar = ({category}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-sabbir-123.vercel.app/blockchain")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
      
      <div className="flex items-center p-2 space-x-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-full dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <Link
              rel="noopener noreferrer"
              to="/profile"
              className="text-xs hover:underline dark:text-gray-400"
            >
              View profile
            </Link>
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-700">
      <h1>Category : {categories.length} </h1>
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          {/* <li className="dark:bg-gray-800 dark:text-gray-50">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
             
            </Link>
          </li> */}
           <span>
                {categories.map((category) => (
                  <button type="button" className="px-8 py-3 w-32 font-semibold border block rounded dark:border-gray-100 dark:text-gray-100" key={category.id}>
                    <Link to={`/blockchain/${category._id}`}>{category.title}</Link>
                  </button>
                ))}
              </span>
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-400"
              >
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
