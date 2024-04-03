function CROwnershipRights() {
  return (
    <div className="mb-8 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <h3 className="text-xl font-bold mb-2 text-blue-500">
        Classification of CR Activities By Ownership Rights
      </h3>
      <p className="text-gray-700">
        Bahrain&apos;s Ministry of Industry & Commerce categorizes business
        activities based on ownership rights. This determines which
        nationalities can wholly or partially own companies in specific sectors.
        Here&apos;s a breakdown of the ownership right classifications:
      </p>
      <ul className="list-check pl-4 space-y-2 text-gray-700">
        <li>Allowed up to 100% for:</li>
        <ul className="pl-4 list-disc space-y-1 text-gray-500">
          <li>GCC Nationals</li>
          <li>Americans</li>
          <li>Singaporeans</li>
          <li>Icelanders, Liechtensteiners, Norwegians, Swiss</li>
        </ul>
        <li>Allowed up to 100% for Foreigners (generally)</li>
        <li>Foreign ownership equal to or less than 49%</li>
        <li>
          Foreign ownership allowed, but must include a Bahraini shareholder
        </li>
      </ul>
      <p className="text-gray-700">
        It&apos;s crucial to consult with Bahrain&apos;s Ministry of Industry &
        Commerce to confirm specific ownership requirements for your desired
        business activity.
      </p>
    </div>
  );
}

export default CROwnershipRights;
