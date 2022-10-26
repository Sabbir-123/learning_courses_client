import React from "react";

const Loader = () => {
  return (
    <div className="dark:bg-gray-900 grid justify-center">
        <div className="flex flex-col dark:bg-gray-900 m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
      <div className="h-48 rounded-t dark:bg-gray-700"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
      </div>
    </div>
    </div>
  );
};

export default Loader;
