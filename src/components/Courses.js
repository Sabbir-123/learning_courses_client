import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursesCom from './CoursesCom';
import Sidebar from './sidebar';

const Courses = () => {
    const categories = useLoaderData()
    return (
        <div class="grid grid-cols-3 gap-4">
        
        <div><Sidebar></Sidebar></div>
        <div class="col-span-2">

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
            
            </span>{' '}
            Languages for Blockchain
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          
         
        {categories.map(category =><CoursesCom key={category.id} category={category}></CoursesCom>)}
        </div>
        <div className="text-center bg-gray-900">
          <Link
            to='/home'
            className="inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Home
          </Link>
        </div>
      </div>

        </div>
      </div>
    );
};

export default Courses;