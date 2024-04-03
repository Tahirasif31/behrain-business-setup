import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import WllCompany from "./WllCompany";
import ChooseBahrainSetup from "./ChooseBahrainSetup";
import WllFormationDocs from "./WllFormationDocs";

function WllCompanyFormation() {
  return (
    <div>
      <BackgroundBoxesDemo
        title={"WLL Company Formation in Bahrain"}
        subtitle={
          "Limited Liability Company (WLL) is the most popular choice for foreign investors to start a business in Bahrain."
        }
      />
      <WllCompany />
      <ChooseBahrainSetup />
      <WllFormationDocs />
    </div>
  );
}

export default WllCompanyFormation;
