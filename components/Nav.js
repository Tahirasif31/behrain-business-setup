"use client";
import Link from "next/link";
import { Button } from "./ui/moving-borders";
import React, { useState } from "react";
function Nav() {
  const [showNav, setShowNav] = useState();
  const [showCompanyFormation, setShowCompanyFormation] = useState(false);
  const [showRenewalAmendments, setShowRenewalAmendments] = useState(false);

  const toggleCompanyFormation = () => {
    setShowCompanyFormation(!showCompanyFormation);
    setShowRenewalAmendments(false); // Reset showRenewalAmendments
  };

  const toggleRenewalAmendments = () => {
    setShowRenewalAmendments(!showRenewalAmendments);
    setShowCompanyFormation(false); // Reset showCompanyFormation
  };

  return (
    <nav className="flex justify-between md:mt-4 py-2 z-50 align-middle items-center 2xl:mx-28 xl:mx-20 md:mx-8 border border-[#FFFFFF]/[0.16] px-4 rounded-lg bg-[#00000052]">
      <span className="md:ml-3 ml-1">Bahrain Business Setup</span>
      <div
        className={`md:static absolute ${
          showCompanyFormation || showRenewalAmendments
            ? "bg-[#000000d8]"
            : "bg-[#0000006a]"
        }  md:bg-transparent min-h-[16vh] left-0 ${
          showNav ? "top-[5.9%]" : "top-[-100%]"
        } py-4 md:min-h-fit w-full md:w-auto flex items-center md:px-5 z-50`}
      >
        <ul className="flex md:flex-row flex-col md:gap-[3vw] px-4 gap-8 md:items-center">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
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
              className={`md:absolute md:bg-white mt-2 py-2 rounded-md shadow-lg md:group-hover:block md:w-full md:text-center ${
                showCompanyFormation ? "block" : "hidden"
              }`}
              style={{ left: "-50%", width: "200%" }}
            >
              <Link href="/services/service1">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Company Formation in Bahrain
                </span>
              </Link>
              <Link href="/services/service2">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  How to Start Business in Bahrain
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  WLL Company Formation
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Business License Registration Cost
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Bahrain CR Activites
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Business License Renewal Fee
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Security Clearence Defected
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
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
              className={`md:absolute md:bg-white mt-2 py-2 rounded-md shadow-lg md:group-hover:block md:w-full md:text-center ${
                showRenewalAmendments ? "block" : "hidden"
              }`}
              style={{ left: "-50%", width: "200%" }}
            >
              <Link href="/services/service1">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  CR Renewal Bahrain
                </span>
              </Link>
              <Link href="/services/service2">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Open New Branch of CR
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Economic Substances Return
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Business License Registration Cost
                </span>
              </Link>
              <Link href="/services/service3">
                <span className="block px-4 py-2 md:text-gray-800 md:hover:bg-gray-200">
                  Bahrain CR Activites
                </span>
              </Link>
            </div>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#solutions">Top Solutions</a>
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
        className="md:hidden cursor-pointer"
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
  );
}

export default Nav;
