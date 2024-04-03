import React from "react";

function WhyUs() {
  return (
    <div className="bg-black text-white py-8  mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <li className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg-xl bg-gray-800">
          <span className="text-4xl font-bold text-white">7</span>
          <p className="text-lg text-gray-300 mt-2">years of experience</p>
        </li>
        <li className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg-xl bg-gray-800">
          <span className="text-4xl font-bold text-white">400+</span>
          <p className="text-lg text-gray-300 mt-2">Completed Jobs</p>
        </li>
        <li className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg-xl bg-gray-800">
          <span className="text-4xl font-bold text-white">100%+</span>
          <p className="text-lg text-gray-300 mt-2">Job Completion Rate</p>
        </li>
      </ul>
    </div>
  );
}

export default WhyUs;
