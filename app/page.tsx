import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";
import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";
import { GlobeDemo } from "@/components/Globe";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import { GetQuote } from "@/components/GetQuote";
import { SparklesPreview } from "@/components/Sparkles";
import Loading from "./../components/Loading";
import LoaderPageTransition from "./../components/LoaderPageTransition";
const review = [{}];

const SERVICES = [
  {
    title: "Company Incorporation and Registration",
    description:
      "Streamline your business setup in Bahrain with expert assistance in company incorporation and registration. Navigate legal requirements efficiently and launch your enterprise with confidence.",
  },
  {
    title: "Tax Planning and Advisory",
    description:
      "Expert tax planning and advisory services in Bahrain, offering strategic guidance to minimize tax liabilities while ensuring compliance with local regulations. Tailored solutions to optimize tax outcomes and support financial goals.",
  },
  {
    title: "Tax Compliance and Reporting",
    description:
      "Expert assistance ensuring timely and accurate tax compliance for businesses in Bahrain. We handle all aspects of tax reporting, filing, and compliance, minimizing risks and optimizing financial efficiency.",
  },

  {
    title: "VAT Implementation and Support",
    description:
      "Expert guidance for businesses in Bahrain navigating VAT implementation. From registration to compliance, we ensure seamless integration, accurate record-keeping, and proactive support for VAT-related challenges.",
  },
  {
    title: "Accounting & Bookkeeping Services",
    description:
      "Comprehensive accounting and bookkeeping services ensure accurate financial records, compliance with regulations, and informed decision-making for businesses, optimizing financial management.",
  },
  {
    title: "Business Advisory and Consulting",
    description:
      "Strategic business advisory and consulting services offer tailored guidance for financial management, risk assessment, growth strategies, and corporate governance to optimize business performance and achieve organizational goals.",
  },
];

export default function Home() {
  return (
    <div>
      <Loading />
      <Hero />
      <section id="about">
        <About />
      </section>
      <GlobeDemo />
      <div id="solutions">
        <ExpertsTeam />
      </div>
      <section
        id="services"
        className="mx-auto xl:max-w-[1080px] md:max-w-[1000px]"
      >
        <p className="text-[38px] font-[600] text-center pb-5 md:pb-10">
          Our Services
        </p>
        <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
          {SERVICES.map((ser) => {
            return (
              <Meteor
                key={ser.title}
                title={ser.title}
                description={ser.description}
              />
            );
          })}
        </div>
      </section>
      <BestService />
      <section>
        <p className="text-[38px] font-[600] text-center">
          Business Formation Essentials
        </p>
        <LayoutGridDemo />
      </section>
      <InfiniteMovingCardsDemo />
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
        <div className="">
          <div>
            <SparklesPreview />
          </div>
        </div>
        <div id="contact">
          <GetQuote />
        </div>
      </div>
    </div>
  );
}
