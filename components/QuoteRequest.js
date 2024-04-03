import { GetQuote } from "@/components/GetQuote";
import { SparklesPreview } from "@/components/Sparkles";

function QuoteRequest() {
  return (
    <div className="grid grid-cols-1 mx-3 md:grid-cols-2 mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
      <div className="">
        <div>
          <SparklesPreview />
        </div>
      </div>
      <div id="contact">
        <GetQuote />
      </div>
    </div>
  );
}
export default QuoteRequest;
