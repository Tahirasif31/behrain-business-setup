function StepOne() {
  return (
    <div className="mb-8 mt-8 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <h3 className="text-xl font-bold mb-2 text-blue-500">
        Step 1: Choose the Business Activity
      </h3>
      <p className="text-gray-700 mb-4">
        The first step to starting a business in Bahrain is to verify your
        eligibility to operate in your desired field. Bahrain categorizes its
        business activities into 7 groups:
      </p>
      <ul className="list-disc pl-4 space-y-2 text-gray-700">
        <li>Allowed up to 100% for Foreigners</li>
        <li>Allowed up to 100% for GCC Nationals</li>
        <li>Allowed up to 100% for Americans</li>
        <li>Allowed up to 100% for Singaporean</li>
        <li>
          Allowed up to 100% for Icelander, Liechtensteiner, Norwegian, Swiss
        </li>
        <li>Foreign ownership equal to or less than 49%</li>
        <li>
          Foreign ownership allowed, but must include a Bahraini shareholder
        </li>
      </ul>
      <p className="text-gray-700">
        Check your eligibility based on your nationality before proceeding. If a
        Bahraini partner is required, we can assist you in finding one!
      </p>
    </div>
  );
}

export default StepOne;
