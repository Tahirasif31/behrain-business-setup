import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import StepThree from "./Step-Three";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import StepFour from "./StepFour";
import CallToAction from "./CallToAction";
import QuoteRequest from "@/components/QuoteRequest";

function StartBusiness() {
  return (
    <div>
      <BackgroundBoxesDemo
        title={"How to Start Business in Bahrain"}
        subtitle="Your guide to starting and thriving in Bahrain's business landscape."
      />
      <section className="bg-gray-800">
        <div className=" text-white px-8 py-10 rounded-md md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
          <h2>The Kingdom of Bahrain</h2>
          <p className="text-gray-300 mb-4">
            Located in the Middle East, Bahrain is a small island nation (765.3
            km²) situated east of Saudi Arabia. Renowned for its
            business-friendly environment and exceptional lifestyle, Bahrain
            boasts the advantage of NO corporate or income tax. However, its
            economy relies heavily on petroleum exports. While VAT was
            introduced in 2019 at 5%, it was increased to 10% in 2022. Aluminum
            is Bahrain&apos;s second major export.
          </p>
          <h3>Starting a Business in Bahrain (2023):</h3>
          <p className="text-gray-300 mb-4">
            To navigate the business landscape successfully, consider these key
            developments from 2023:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-gray-300">
            <li>
              NPRA Bahrain: Physical presence no longer required for residency
              renewal.
            </li>
            <li>
              PI Startup Advisory: Power of Attorney not mandatory for company
              formation.
            </li>
            <li>
              Bahrain Municipality System Upgrade: Potential delays in opening
              municipal accounts.
            </li>
            <li>Incubation Centers: Improved plans and pricing offered.</li>
            <li>Bahrain-Qatar Direct Flights: Operations have resumed.</li>
          </ul>
        </div>
      </section>
      <div className="text-center mt-8 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Starting a Business in Bahrain
        </h2>
        <ol className="list-decimal list-inside space-y-4 ">
          <li className="flex items-center space-x-4">
            <span className="text-xl font-bold text-blue-500">Step 1:</span>
            <p className="text-gray-700">Choose the Business Activity</p>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-xl font-bold text-blue-500">Step 2:</span>
            <p className="text-gray-700">Choose the Business Name</p>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-xl font-bold text-blue-500">Step 3:</span>
            <p className="text-gray-700">Find a Suitable Business Location</p>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-xl font-bold text-blue-500">Step 4:</span>
            <p className="text-gray-700">Find an Experienced Consultant</p>
          </li>
        </ol>
      </div>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <CallToAction />
      <QuoteRequest />
    </div>
  );
}
export default StartBusiness;
