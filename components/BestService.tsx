import { BackgroundGradientDemo } from "./BackgroundGradient";

function BestService() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
      <div className="md:px-5 px-1">
        <h2 className="md:text-[32px] text-[26px] font-[600] leading-[38px]">
          Book Best Service <br /> On Reasonable Price
        </h2>
        <p className="md:mt-3 mt-2">
          Our company, based in Bahrain, prides itself on providing top-notch
          business formation and taxation services at competitive prices. With
          our expertise and commitment to client satisfaction, we offer a
          comprehensive range of services, including company incorporation, tax
          planning, compliance, and advisory. Our website showcases our
          dedication to delivering exceptional value to our clients, ensuring
          transparency, efficiency, and reliability in every interaction.
        </p>
        <p className="md:mt-2 mt-1">
          Trust us for reliable and affordable solutions tailored to your
          business needs, helping you navigate the complexities of Bahraini
          regulations with ease.
        </p>
        <p className="mt-2 hidden md:block">
          Our commitment to client satisfaction is reflected in the
          comprehensive suite of services we offer, encompassing everything from
          company incorporation to tax planning, compliance, and advisory.
          Through our website, we showcase not only our expertise but also our
          dedication to transparency, efficiency, and reliability in every
          aspect of our operations. With a firm belief in providing value-driven
          solutions, we ensure that our services are accessible to businesses of
          all sizes.
        </p>
        <p className="mt-2 hidden md:block">
          Whether you&apos;re a startup or an established enterprise, our
          affordable yet high-quality offerings are designed to help you
          navigate the intricacies of Bahraini regulations with confidence.
        </p>
      </div>
      <div>
        <BackgroundGradientDemo />
      </div>
    </div>
  );
}

export default BestService;
