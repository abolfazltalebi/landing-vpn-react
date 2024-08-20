import { premiumPlanFeatures } from "../../constants/PremiumPlanFeatures";
import standard from "../../../public/images/icons/Standard.png";

function PremiumPlanPricing() {
  return (
    <div className="p-2 w-full">
      <div className="card-price">
        <div>
          <img src={standard} alt="" />
        </div>

        {premiumPlanFeatures.map((itme2) => {
          return (
            <div
              className="flex items-center  gap-2 text-black w-[200px] "
              key={itme2.id}
            >
              <div>
                <img src={itme2.src} alt="" />
              </div>
              <div>
                <p> {itme2.name}</p>
              </div>
            </div>
          );
        })}
        <div>
          <h1 className="text-5xl text-gray-900 pb-4 text-center leading-none">
            $12 / mo
          </h1>
        </div>
        <button className="button-plan border-2 border-primary text-black">
          Select Plan
        </button>
      </div>
    </div>
  );
}

export default PremiumPlanPricing;
