function CRRegistrationType() {
  return (
    <div className="mb-8 mx-3 md:mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
      <h3 className="text-xl font-bold mb-2 text-blue-500">
        Classification of CR Activities By Registration Type
      </h3>
      <p className="text-gray-700">
        The Ministry of Industry & Commerce in Bahrain also categorizes business
        activities based on their required Registration Type. This determines
        the legal structure you need to establish for your business. Here&apos;s
        an overview of the registration types:
      </p>
      <ul className="list-disc pl-4 space-y-2 text-gray-700">
        <li>
          **Sijili:** This is a simplified registration option for some low-risk
          activities, typically suitable for Bahraini citizens and limited
          business scopes. It may not require a physical office address.
        </li>
        <li>
          **ICR (Individual Commercial Registration):** This is for sole
          proprietorships, where a single individual owns and manages the
          business.
        </li>
        <li>
          **CCR (Company Commercial Registration):** This is for companies with
          multiple owners or a more complex structure. There are various company
          types under CCR, each with specific requirements.
        </li>
      </ul>
      <p className="text-gray-700">
        Choosing the right registration type depends on your business activity,
        ownership structure, and operational needs. Consulting with a business
        setup professional can ensure you select the most suitable option.
      </p>
    </div>
  );
}

export default CRRegistrationType;
