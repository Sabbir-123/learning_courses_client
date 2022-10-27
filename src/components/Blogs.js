import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Nori grape silver beet broccoli kombu beet"
          >
            1. What is Cors?
          </Link>
          <p className="max-w-xs mx-auto mb-2">
            Cross-origin resource sharing (CORS) is a browser mechanism which
            which permits managed get admission to to assets positioned outdoor
            of a given area. It extends and provides flexibility to the
            same-starting place coverage (SOP). However, it additionally
            presents ability for cross-area assaults, if a website's CORS
            coverage is poorly configured and implemented. CORS isn't a safety
            in opposition to cross-starting place assaults inclusive of
            cross-site request forgery (CSRF).
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Well, the way they make shows is, they make one"
          >
            2(a). Why are you using firebase? What other options do you have to
            implement authentication? What other options do you have to implement authentication?
          </Link>
          <p className="max-w-xs mx-auto mb-2 ">
            It permits real-time database connection, because of this that a
            couple of users can see the modifications withinside the records
            whilst the records receives created or edited. Data transmission is
            treated with net sockets so that we do not must ship requests to get
            new records, we most effective want to subscribe once. Also Firebase
            helps us to develop high-quality apps, grow our user base, and earn
            more money. Each feature works independently, and they work even
            better together.{" "} 
            <br />
            The other options are: <ol>
              <li>1. Auth0</li>
              <li>2. MongoDB</li>
              <li>3. Passport</li>
              <li>4. Okta</li>
            </ol>
          </p>
         
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            How does the private route work?
          </Link>
          <p className="max-w-xs mx-auto mb-2 ">
            Private Routes vary based on the Apps, For example, Dashboard, User
            Profile, App Settings, Home etc. In simple words, These routes can
            be accessed only after login. The private route component is similar
            to the public route, the only change is that redirect URL and
            authenticate condition. If the user is not authenticated he will be
            redirected to the login page and the user can only access the
            authenticated routes If he is authenticated (Logged in).
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            (4) What is Node? How does Node work?
          </Link>
          <p className="max-w-xs mx-auto mb-2 ">
            A Node is a data structure that shops a cost that may be of any
            information kind and has a pointer to every other node. The
            implementation of a Node magnificence in a programming language
            which includes Python, ought to have strategies to get the cost this
            is saved withinside the Node, to get the following node, and to set
            a hyperlink to the following node. <br /> <br />
            <span className="font-bold">Working procedure of Node:</span>  Node
            accepts the request from the customers and sends the response, even
            as operating with the request node handles them with a unmarried
            thread. To function I/O operations or requests node use the idea of
            threads. Thread is a chain of commands that the server wishes to
            perform. It runs parallel at the server to offer the statistics to
            more than one customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
