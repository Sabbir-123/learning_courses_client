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
    <div className="h-full p-3 space-y-2 w-60  ">
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
                  <button type="button" className="px-8 py-3 w-32 font-semibold border block rounded dark:border-gray-100 " key={category.id}>
                    <Link to={`/blockchain/${category._id}`}>{category.title}</Link>
                  </button>
                ))}
              </span>
        </ul>
       
      </div>
    </div>
  );
};

export default Sidebar;
