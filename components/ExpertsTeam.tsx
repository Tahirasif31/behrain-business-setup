"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ExpertsTeam() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Discover Your Ultimate <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Business Solution Today!
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Entity Selection",
    image: "/tab-1.jpg",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Tax Planning",
    image: "/tab-2.jpg",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Financial Statements",
    image: "/beh-1.jpg",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Company Registration",
    image: "/tab-4.jpg",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Strategic Planning",
    image: "/tab-5.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Financial Analysis",
    image: "/beh-2.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Tax Preparation",
    image: "/tab-7.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Business Valuation",
    image: "/tab-8.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Tax Compliance",
    image: "/tab-9.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Budgeting and Forecasting",
    image: "/tab-10.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Succession Planning",
    image: "/tab-11.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Regulatory Compliance",
    image: "/tab-12.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Tax Return Filing",
    image: "/beh-4.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Tax Dispute Resolution",
    image: "/beh-7.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Tax Credits & Incentives",
    image: "/beh-8.jpg",
    badge: "Mentor",
  },
];
