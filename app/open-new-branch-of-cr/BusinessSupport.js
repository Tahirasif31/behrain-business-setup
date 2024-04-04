import Image from "next/image";
import React from "react";

function BusinessSupport() {
  return (
    <div className=" bg-black text-white flex flex-wrap justify-center items-center md:py-10 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <div class="w-full md:w-1/2 text-white px-3 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <h1 className="text-4xl font-bold mb-4">
          Expand Your Business with Ease
        </h1>
        <p className="text-xl leading-loose">
          Effortlessly enter new markets and product lines with our
          comprehensive business support service. We streamline the process of
          opening new branches for your company registration (CR), ensuring a
          smooth and successful expansion.
        </p>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-8">
          Get Business Support Today
        </button>
      </div>
      <div class="w-full md:w-1/2 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <Image
          src="/man.jpg"
          alt="Image description"
          class="object-cover h-full w-full rounded-md"
          width={500}
          height={250}
        />
      </div>
    </div>
  );
}

export default BusinessSupport;
