import React from "react";

const FAQ = () => {
  return (
    <div>
      <section>
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Which language ar you using for this project?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Javascript. Mainly using framework or you can say library of JS
                and that is React Js{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Why are you learnig Blockchain Technology?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                <ol>
                  <li>1. The Blockchain Is Diverse</li>
                  <li>2. Web 3.0 Is Based on the Blockchain Technology</li>
                  <li>3. The Skill Is in High Demand</li>
                  <li>4. Boost Your Income</li>
                </ol>
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is the Applications of Blockchain?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                In Finance: <br />
                Blockchain technology provides hands-down efficiency when it
                comes to tracking financial properties. It provides a
                transparent ledger system, making it even easier to track and
                tackle the inflow and outflow of cash.
                <br /> <br />
                In Cloud Storage: <br />
                With the successful implementation of blockchain technology,
                cloud storage can become extra secure against the attacks of
                hackers. It reduces unauthorized data tampering while encrypting
                the data using cryptography.
                <br /> <br />
                In Cyber Security: <br />
                As discussed earlier, blockchain uses principles of ledger
                technology and decentralization, making it a perfect fit to
                fortify cyber security. It helps secure private messaging by
                forming an integrating API framework that eventually enables
                cross-messenger communication proficiency.
                <br />{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
