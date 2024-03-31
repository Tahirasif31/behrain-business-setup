"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Exceptional service! They guided me through every step of setting up my business in Bahrain, making the process smooth and stress-free. Their expertise in taxation ensured that I remained compliant while maximizing my savings",
    name: "Ahmed Abdullah Al-Mansoori",
    title: "Manama",
  },
  {
    quote:
      "بالتأكيد! قدم فريق هذه الشركة لخدمات تأسيس الأعمال والضرائب نصائح غاية في القيمة بخصوص هيكلة شركتي لتحقيق كفاءة ضريبية مثالية. كان احترافهم واهتمامهم بالتفاصيل متفوقًا على توقعاتي",
    name: "عبدالله صالح الفلاسي",
    title: "الرفاع ",
  },
  {
    quote:
      "Trusted partner! I've been using their services for years, and I couldn't be happier. Their knowledgeable team consistently delivers accurate, timely solutions, allowing me to focus on growing my business with confidence. ",
    name: "Zahraat Al-Sayf",
    title: "Isa Town",
  },
  {
    quote:
      "خبرة مذهلة! فهمهم العميق لقوانين ولوائح الضرائب البحرينية أنقذني وقتًا ومالًا. أنا ممتن لنهجهم الاستباقي في التخطيط الضريبي، مما ضمن أنني كنت دائمًا مستعدًا لأي تغييرات.",
    name: "خالد علي الحمادي",
    title: "سترة ",
  },
  {
    quote:
      "Top-notch service! Whether it's answering my tax-related queries or assisting with complex business formations, they always go above and beyond. I'm grateful for their professionalism and commitment to excellence",
    name: "Fatima Mohammed Al-Hashemi",
    title: "Muharraq",
  },
];
