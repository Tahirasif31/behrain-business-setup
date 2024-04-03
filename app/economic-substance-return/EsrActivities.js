import React from "react";

function EsrActivities() {
  return (
    <div className="bg-black text-white py-8 px-4 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Economic Substance Requirements
      </h2>
      <p className="text-gray-300 mb-4">
        Commercial organizations involved in the following activities are
        required to submit an Economic Substance Return annually:
      </p>
      <ul className="list-disc space-y-2 pl-4">
        <li className="hover:text-blue-500 transition duration-300 ease-in-out">
          Distribution and service center activities
        </li>
        <li className="hover:text-blue-500 transition duration-300 ease-in-out">
          Headquarters activities
        </li>
        <li className="hover:text-blue-500 transition duration-300 ease-in-out">
          Holding company activities
        </li>
        <li className="hover:text-blue-500 transition duration-300 ease-in-out">
          Leasing activities (other than those undertaken by licensees of the
          Central Bank of Bahrain)
        </li>
        <li className="hover:text-blue-500 transition duration-300 ease-in-out">
          Shipping activities
        </li>
        <li className="hover:text-blue-500 transition duration-300 ease-in-out">
          Intellectual property activities in Bahrain
        </li>
      </ul>
    </div>
  );
}

export default EsrActivities;
