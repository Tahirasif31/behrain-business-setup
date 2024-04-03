"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./../components/ui/Lamp";
import Nav from "./Nav";

export function LampDemo() {
  return (
    <div className="bg-slate-950 pt-2">
      <Nav />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Open New{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text cursor-pointer z-50">
            Branch
          </span>{" "}
          <br /> Of Your CR
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default LampDemo;
