"use client";
import Link from "next/link";
import React, { useState } from "react";
import Loading from "./../components/Loading";
function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [showCompanyFormation, setShowCompanyFormation] = useState(false);
  const [showRenewalAmendments, setShowRenewalAmendments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleCompanyFormation = () => {
    setShowCompanyFormation(!showCompanyFormation);
    setShowRenewalAmendments(false); // Reset showRenewalAmendments
  };

  const toggleRenewalAmendments = () => {
    setShowRenewalAmendments(!showRenewalAmendments);
    setShowCompanyFormation(false); // Reset showCompanyFormation
  };

  return (
    <>
      {isLoading && <Loading />}
      <nav className="flex justify-between lg:mt-4 py-2  align-middle items-center 2xl:mx-20 xl:mx-5 lg:mx-8 border border-[#FFFFFF]/[0.16] px-4 xl:px-0 2xl:px-4 rounded-lg bg-[#00000052] z-50">
        <span className="md:ml-3 ml-1 z-40">Bahrain Business Setup</span>
        <div
          className={`lg:static absolute ${
            showCompanyFormation || showRenewalAmendments
              ? "bg-[#000000d8]"
              : "bg-[#0000006a]"
          }  lg:bg-transparent min-h-[16vh] left-0 ${
            showNav ? "top-[5.9%]" : "top-[-100%]"
          } py-4 lg:min-h-fit w-full lg:w-auto flex items-center 2xl:px-5 z-40`}
        >
          <ul className="flex lg:flex-row flex-col xl:gap-1 2xl:gap-8 px-4 gap-8 lg:items-center">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li className="relative group">
              <span className="text-white cursor-pointer group-hover:text-gray-300">
                <span className="flex gap-1" onClick={toggleCompanyFormation}>
                  Company Formation
                  <img
                    src="/down.svg"
                    className={`mt-[5px] ${
                      showCompanyFormation ? "transform rotate-180" : ""
                    }`}
                  />
                </span>
              </span>
              <div
                className={`lg:absolute lg:bg-white mt-2 py-2 rounded-md shadow-lg md:w-full lg:text-center ${
                  showCompanyFormation ? "block" : "hidden"
                }`}
                style={{ left: "-50%", width: "200%" }}
              >
                <Link
                  href="/company-formation-in-bahrain"
                  onClick={() => {
                    setShowCompanyFormation(false);
                    setIsLoading(true);
                  }}
                >
                  <span className="block px-4 py-2 lg:text-gray-800 lg:hover:bg-gray-200">
                    Company Formation in Bahrain
                  </span>
                </Link>
                <Link
                  href="/how-to-start-business-in-bahrain"
                  onClick={() => {
                    setShowCompanyFormation(false);
                    setIsLoading(true);
                  }}
                >
                  <span className="block px-4 py-2 lg:text-gray-800 lg:hover:bg-gray-200">
                    How to Start Business in Bahrain
                  </span>
                </Link>
                <Link
                  href="/wll-company-formation"
                  onClick={() => {
                    setShowCompanyFormation(false);
                    setIsLoading(true);
                  }}
                >
                  <span className="block px-4 py-2 lg:text-gray-800 lg:hover:bg-gray-200">
                    WLL Company Formation
                  </span>
                </Link>
                <Link
                  href="/bahrain-cr-activities"
                  onClick={() => {
                    setShowCompanyFormation(false);
                    setIsLoading(true);
                  }}
                >
                  <span className="block px-4 py-2 lg:text-gray-800 lg:hover:bg-gray-200">
                    Bahrain CR Activites
                  </span>
                </Link>
                <Link
                  href="/investor-visa-in-bahrain"
                  onClick={() => {
                    setShowCompanyFormation(false);
                    setIsLoading(true);
                  }}
                >
                  <span className="block px-4 py-2 lg:text-gray-800 lg:hover:bg-gray-200">
                    Investor Visa in Bahrain
                  </span>
                </Link>
              </div>
            </li>
            <li className="relative group">
              <span className="text-white cursor-pointer group-hover:text-gray-300">
                <span className="flex gap-1" onClick={toggleRenewalAmendments}>
                  Renewal & Amendments
                  <img
                    src="/down.svg"
                    className={`mt-[5px] ${
                      showRenewalAmendments ? "transform rotate-180" : ""
                    }`}
                  />
                </span>
              </span>
              <div
                className={`lg:absolute lg:bg-white mt-2 py-2 rounded-md shadow-lg  md:w-full lg:text-center ${
                  showRenewalAmendments ? "block" : "hidden"
                }`}
                style={{ left: "-50%", width: "200%" }}
              >
                <Link
                  href="/open-new-branch-of-cr"
                  onClick={() => {
                    setShowCompanyFormation(false);
                    setIsLoading(true);
                  }}
                >
                  <span className="block px-4 py-2 lg:text-gray-800 lg:hover:bg-gray-200">
                    Open New Branch of CR
                  </span>
                </Link>
                <Link
                  href="/economic-substance-return"
                  onClick={() => {
                    setShowCompanyFormation(false);
                    setIsLoading(true);
                  }}
                >
                  <span className="block px-4 py-2 lg:text-gray-800 lg:hover:bg-gray-200">
                    Economic Substances Return
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#solutions">Top Solutions</a>
            </li>
          </ul>
        </div>

        {/* <Button
          borderRadius="1.75rem"
          height={8}
          className="dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 md:px-1 md:py-3 py-[5px] "
        >
          Login
        </Button> */}
        <button
          type="button"
          onClick={() => setShowNav(!showNav)}
          className="lg:hidden cursor-pointer z-40"
        >
          <div
            className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
              showNav ? "rotate-45 mb-0  translate-y-[1px]" : "rotate-0 mb-1"
            } `}
          ></div>
          <div
            className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
              showNav ? "hidden mb-0" : "mb-1"
            } `}
          ></div>
          <div
            className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
              showNav ? "-rotate-45 mb-0" : "rotate-0"
            }`}
          ></div>
        </button>
      </nav>
    </>
  );
}

export default Nav;
