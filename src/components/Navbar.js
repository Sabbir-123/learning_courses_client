import { Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import blockchain from "../asstes/blockchain.png";
import { AuthContext } from "../contexts/AuthProvider";
import ReactSwitch from "react-switch";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout, theme, toggleTheme } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(swal("User Logged Out"))
      .catch((error) => swal(error.message));
  };
  console.log(user);

  return (
    <div className="px-4 navbar dark:text-gray-100 py-3 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="BlockChain"
          title="Flashy Quiz"
          className="inline-flex items-center"
        >
          <img className="h-14" src={blockchain} alt="" />
          <span className="ml-2 text-xl font-bold tracking-wide uppercase">
            Blockchain
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/home"
              aria-label="Home"
              title="Home"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              aria-label="courses"
              title="courses"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              <div className="relative py-3">
                <p>Courses</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              aria-label="Blogs"
              title="Blogs"
              className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              aria-label="Faq"
              title="Faq"
              className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              FAQ
            </Link>
          </li>

          {user?.email ? (
            <>
              <li>
                <Link
                  onClick={handleLogout}
                  aria-label="logout"
                  title="Logout"
                  className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Log Out
                </Link>
              </li>
              <li>
                <Tooltip
                  className=" hover:cursor-pointer"
                  title={user?.displayName}
                >
                  <img
                    src={user?.photoURL}
                    className="rounded h-12 image"
                    alt=""
                  />
                </Tooltip>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/register"
                  aria-label="register"
                  title="Regoster"
                  className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Log In
                </Link>
              </li>
            </>
          )}

          <li className="flex">
           <label className="mr-2">{theme === "light" ? "Light" : "Dark"}</label>
           <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:dark:bg-gray-900 focus:dark:bg-gray-900"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-black-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 dark:bg-gray-900 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img className="h-10" src={blockchain} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-black-800 uppercase">
                        Blockchain
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-black-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/courses"
                        aria-label="courses"
                        title="courses"
                        className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <div className="relative py-3">
                          <p>Courses</p>
                          <p className="absolute bottom-5 left-9"></p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="Blogs"
                        title="Blogs"
                        className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        aria-label="Faq"
                        title="Faq"
                        className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        aria-label="register"
                        title="Regoster"
                        className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        aria-label="login"
                        title="Login"
                        className="font-medium tracking-wide text-black-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Log In
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
