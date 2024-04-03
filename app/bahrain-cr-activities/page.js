import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import CRBahrain from "./CRBahrain";
import CROwnershipRights from "./CROwnershipRights";
import CRRegistrationType from "./CRRegistrationType";
import QuoteRequest from "@/components/QuoteRequest";

function Page() {
  return (
    <div>
      <BackgroundBoxesDemo
        title={"Bahrain CR Activities"}
        subtitle={
          "Business operations and ventures registered for commercial activities in Bahrain."
        }
      />
      <CRBahrain />
      <CROwnershipRights />
      <CRRegistrationType />
      <QuoteRequest />
    </div>
  );
}

export default Page;
