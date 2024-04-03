import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import InvestorVisaBahrain from "./InvestorVisaBahrain";
import InvestorVisaProcess from "./InvestorVisaProcess";
import InvestorVisaRequirment from "./InvestorVisaRequirment";
import InvestorVisaBenefits from "./InvestorVisaBenefits";
import QuoteRequest from "@/components/QuoteRequest";

function InvestorVisa() {
  return (
    <div>
      <BackgroundBoxesDemo
        title={"Investor Visa in Bahrain"}
        subtitle={
          " A visa program facilitating foreign investors to reside and conduct business activities in Bahrain."
        }
      />
      <InvestorVisaBahrain />
      <InvestorVisaProcess />
      <InvestorVisaRequirment />
      <InvestorVisaBenefits />
      <QuoteRequest />
    </div>
  );
}

export default InvestorVisa;
