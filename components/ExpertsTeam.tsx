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
                AC Solution Today!
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
    designation: "Insufficient Cooling",
    image: "/solution-1.jpg",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Thermostat Malfunctions",
    image: "/solution-2.jpg",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Faulty Compressor",
    image: "/solution-3.jpg",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Ductwork Faults",
    image: "/solution-4.jpg",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "System Performance",
    image: "/solution-5.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Electrical Faults",
    image: "/solution-6.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Blocked Condensate Drain",
    image: "/solution-7.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Frozen Coils",
    image: "/solution-8.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Dirty Air Filter",
    image: "/solution-9.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Refrigerant Leaks",
    image: "/solution-10.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Faulty Outlets or Switches",
    image: "/solution-11.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/solution-12.jpg",
    badge: "Mentor",
  },
];
