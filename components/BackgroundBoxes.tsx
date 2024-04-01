"use client";
import React from "react";
import { Boxes } from "./../components/ui/background-Boxes";
import { cn } from "./../utils/cn";
import Nav from "./Nav";

export function BackgroundBoxesDemo() {
  return (
    <div className="bg-slate-900 pt-1">
      <div>
        <Nav />
      </div>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center mt-24">
            Company Formation In Bahrain
          </h1>
          <p className="text-lg text-neutral-300 text-center mt-2">
            Easy And Fast Processing
          </p>
          <p className="text-lg text-neutral-500 font-semibold mt-4">
            7 Simple Steps of Company Formation in Bahrain
          </p>
        </div>
      </div>
    </div>
  );
}
