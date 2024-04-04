import Image from "next/image";

function CRBahrain() {
  return (
    <div className="mb-8 mt-6 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px] flex flex-wrap items-center ">
      <div class="w-full md:w-1/2 text-white px-3 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <h2 className="text-xl font-bold mb-2 text-blue-500">
          Commercial Registration (CR) Activities in Bahrain
        </h2>
        <p className="text-gray-700">
          In Bahrain, business activities for Commercial Registration (CR) are
          categorized based on the International Standard Industrial
          Classification of All Economic Activities (ISIC). These categories are
          further subdivided by Ownership Rights and Registration Type.
        </p>
        <p className="text-gray-700">
          Here&apos;s a breakdown of the classification system:
        </p>
        <ul className="list-disc pl-4 space-y-2 text-gray-700">
          <li>
            **ISIC Classification:** Groups business activities based on their
            economic nature.
          </li>
          <li>
            **Ownership Rights:** Determines nationality requirements for
            ownership. Some activities may require:
            <ul className="pl-4 list-disc space-y-1 text-gray-500">
              <li>100% foreign ownership</li>
              <li>Majority ownership by Bahraini nationals</li>
              <li>Local partner mandatory (Bahraini shareholder)</li>
            </ul>
          </li>
          <li>
            **Registration Type:** Specifies the legal structure of the company.
            For instance, banking activities require a Bahraini Shareholding
            Company.
          </li>
        </ul>
        <p className="text-gray-700">
          This classification system ensures Bahrain&apos;s economic interests
          are considered when registering businesses.
        </p>
      </div>
      <div class="w-full md:w-1/2 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <Image
          src="/auto.png"
          alt="Image description"
          class="object-cover h-full w-full rounded-md"
          width={500}
          height={250}
        />
      </div>
    </div>
  );
}

export default CRBahrain;
