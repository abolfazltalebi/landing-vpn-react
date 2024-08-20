import CaptionPricing from "./CaptionPricing";
import FreePlanPricing from "./FreePlanPricing";
import BasicPlanPricing from "./BasicPlanPricing";
import PremiumPlanPricing from "./PremiumPlanPricing";
function Pricing() {
  return (
    <section className="overflow-hidden bg-white py-6">
      <div className="container px-5 pt-10 mx-auto">
        <CaptionPricing />
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
          <FreePlanPricing />
          <BasicPlanPricing />
          <PremiumPlanPricing />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
