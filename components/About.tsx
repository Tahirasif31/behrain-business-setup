"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Us",
    description:
      "Bahrain Business Setup is your premier partner for business formation and tax services in Bahrain. Our expert team navigates the complexities of company formation, ensuring a smooth and efficient process tailored to your needs. From initial consultation to ongoing support, we're dedicated to helping you establish and grow your business with confidence. Let us handle the paperwork while you focus on realizing your entrepreneurial vision. Partner with Bahrain Business Setup today for a seamless and successful business journey.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/beh-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "At Bahrain Business Setup, our mission is to empower entrepreneurs and businesses with seamless and efficient solutions for company formation and tax services in Bahrain. We are dedicated to providing expert guidance and support, simplifying the complexities of establishing and managing businesses in the region. Through personalized assistance and a commitment to excellence, we strive to be the trusted partner that enables our clients to achieve their goals and thrive in the competitive business landscape of Bahrain and beyond. With Bahrain Business Setup, success is not just a destination – it's a journey we embark on together.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/beh-9.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function About() {
  return <StickyScroll content={content} />;
}
