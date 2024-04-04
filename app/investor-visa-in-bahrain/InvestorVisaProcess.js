import Image from "next/image";

function InvestorVisaProcess() {
  return (
    <section class="bg-gray-800  mb-7 flex flex-wrap justify-center items-center md:py-10 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <div class="w-full md:w-1/2 px-8 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <Image
          src="/truck.png"
          alt="Investor visa in Bahrain"
          class="rounded-md shadow-md hover:brightness-110 object-cover"
          width={500}
          height={500}
        />
      </div>
      <div class="w-full md:w-1/2 text-white px-8 py-10 rounded-md mx-3 md:mx-auto xl:max-w-[540px] md:max-w-[500px]">
        <h2 class="text-xl font-bold mb-2 text-blue-500">
          How to Get Investor Visa in Bahrain
        </h2>
        <p class="text-gray-700">
          There are two main paths to obtaining an Investor Visa in Bahrain:
        </p>
        <ul class="list-disc pl-4 space-y-2 text-gray-700">
          <li>
            **Register a Company:** You can establish a new business in Bahrain.
          </li>
          <li>
            **Purchase Shares:** You can invest in an existing Bahraini company.
          </li>
        </ul>
        <h3 class="text-lg font-bold mb-2 text-blue-500">
          Types of Investor Visas:
        </h3>
        <ul class="list-disc pl-4 space-y-2 text-gray-700">
          <li>
            Businessman Visa (LMRA Investor Visa): Issued by LMRA with approvals
            from relevant ministries.
          </li>
          <li>
            Investor Visa: May have specific requirements depending on the
            investment program.
          </li>
        </ul>
        <h3 class="text-lg font-bold mb-2 text-blue-500">
          Eligibility for LMRA Investor Visa:
        </h3>
        <p class="text-gray-700">
          Any foreign investor owning a business in Bahrain qualifies for the
          LMRA Investor Visa (Businessman Visa). There&apos;s a minimum
          investment amount of BHD 1 (around $0.26 USD).
        </p>
        <p class="text-gray-700">
          It&apos;s advisable to consult with a business setup professional for
          guidance through the Investor Visa process in Bahrain.
        </p>
      </div>
    </section>
  );
}

export default InvestorVisaProcess;
