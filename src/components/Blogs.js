import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <Link
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Nori grape silver beet broccoli kombu beet"
            >
              What is Cors?
            </Link>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Cross-origin resource sharing (CORS) is a browser mechanism which which permits managed get admission to to assets positioned outdoor of a given area. It extends and provides flexibility to the same-starting place coverage (SOP). However, it additionally presents ability for cross-area assaults, if a website's CORS coverage is poorly configured and implemented. CORS isn't a safety in opposition to cross-starting place assaults inclusive of   cross-site request forgery (CSRF).
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <Link
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Well, the way they make shows is, they make one"
            >
              Well, the way they make shows is, they make one
            </Link>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
            It permits real-time database connection, because of this that a couple of users can see the modifications withinside the records whilst the records receives created or edited. Data transmission is treated with net sockets so that we do not must ship requests to get new records, we most effective want to subscribe once. Also Firebase helps us to develop high-quality apps, grow our user base, and earn more money. Each feature works independently, and they work even better together.
            </p>
           
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <Link
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Pommy ipsum smeg head whizz morris himer due"
            >
              Pommy ipsum smeg head whizz morris himer due
            </Link>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              Taking the mick middle className bog roll bow ties are cool posh
              nosh off t'shop, stew and dumps.
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default Blogs;

