import React from 'react';
import { Link } from 'react-router-dom';
import Bluea from '../asstes/Bluea.gif'

const Home = () => {
  return (
    <section>
	<div className="dark:bg-gray-800 text-white">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-100">Provident blanditiis cum exercitationem</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-100">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
			<div className="flex flex-wrap justify-center">
				<Link to='/register'>
                <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-black dark:text-gray-50">Register</button>
                </Link>
				<Link to='/login'>
                <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-400 dark:text-gray-100">Log In</button>
                </Link>
                	</div>
		</div>
	</div>
	<img src={Bluea} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
</section>
  );
};

export default Home;
