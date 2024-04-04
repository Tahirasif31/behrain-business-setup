import Image from "next/image";

function WLLCompany() {
  return (
    <div className="mb-8 mt-6 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px] flex flex-wrap">
      <div class="w-full md:w-1/2 text-white px-3 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <h2 className="text-xl font-bold mb-2 text-blue-500">
          What is a WLL Company in Bahrain?
        </h2>
        <p className="text-gray-700 mb-4">
          A WLL company in Bahrain functions similarly to a Limited Liability
          Company (LLC) in other countries. It offers a business structure with
          limited liability for its owners. While forming a WLL company can seem
          complex without legal expertise, you can achieve a smooth setup
          process with professional help.
        </p>
        <h3 className="text-lg font-bold mb-2 text-blue-500">
          Benefits of a WLL Company in Bahrain:
        </h3>
        <ul className="list-disc pl-4 space-y-2 text-gray-700">
          <li>100% ownership for investors</li>
          <li>Simplified work permit process</li>
          <li>No corporate tax</li>
          <li>Investor visa opportunities</li>
          <li>No mandatory involvement of a Bahraini partner</li>
          <li>Government support for businesses</li>
          <li>Strategic location within the Gulf region</li>
        </ul>
        <p className="text-gray-700">
          Explore resources like &apos;Company formation in Bahrain &dash;
          Complete Guide&apos; or &quot;How to open a WLL company in
          Bahrain&quot; to learn more about the setup process.
        </p>
      </div>
      <div class="w-full md:w-1/2 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <Image
          src="/wll.png"
          alt="Image description"
          class="object-cover h-full w-full rounded-md"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
}

export default WLLCompany;
