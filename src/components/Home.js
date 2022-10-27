import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Bluea from "../asstes/Bluea.gif";
import { AuthContext } from "../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <section>
      <div>
        <div className="container hover:bg-gray-900 hover:text-white flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
          <h1 className="text-xl font-bold leading-none sm:text-6xl xl:max-w-3xl hover:animate-ping ">
            Blockchain
          </h1>
          <p className="mt-6 mb-8  text-lg sm:mb-12 xl:max-w-3xl ">
            A blockchain is a digitally distributed, decentralized, public
            ledger that exists across a network. It is most noteworthy in its
            use with cryptocurrencies .
          </p>
          <div className="flex flex-wrap justify-center">
            {user && user.email ? (
              <Link to="/courses">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded hover:animate-bounce hover:text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-black hover:to-gray-700 "
                >
                  Explore
                </button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded hover:animate-bounce hover:text-white bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-black hover:to-gray-700 "
                  >
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg border rounded hover:animate-bounce bg-gradient-to-r hover:text-white from-green-400 to-blue-500 hover:from-black hover:to-gray-700 "
                  >
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <img
        src={Bluea}
        alt=""
        className="w-3/6 mx-auto hover:animate-bounce  mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default Home;
