import React from "react";

function HowWeCanHelp() {
  return (
    <div className="bg-black text-white py-8 px-4 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-4 text-center">How We Can Help</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-center space-x-2">
          <span className="text-blue-500">✓</span>
          <p className="text-gray-300">Consultancy</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500">✓</span>
          <p className="text-gray-300">Representation before MOICT</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500">✓</span>
          <p className="text-gray-300">ESR Submission</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500">✓</span>
          <p className="text-gray-300">Offense Removal</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500">✓</span>
          <p className="text-gray-300">Preparation of Report</p>
        </li>
      </ul>
      <p className="text-gray-500 text-center mt-4">
        We guarantee update of records at Ministry of Industry & Commerce and
        legitimacy of this change.
      </p>
    </div>
  );
}

export default HowWeCanHelp;
