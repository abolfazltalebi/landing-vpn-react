import { freePlanFeatures } from "../../constants/FreePlanFeatures";
import standard from "../../../public/images/icons/Standard.png";

function FreePlanPricing() {
  return (
<div className="p-2 w-full">
            <div className="card-price">
              <div>
                <img src={standard} alt="" />
              </div>
              {freePlanFeatures.map((itme1) => {
                return (
                  <div
                    className="flex items-center  gap-2 text-black w-[200px] "
                    key={itme1.id}
                  >
                    <div>
                      <img src={itme1.src} alt="" />
                    </div>
                    <div>
                      <p> {itme1.name}</p>
                    </div>
                  </div>
                );
              })}
              <div className="mt-24">
                <h1 className="text-5xl text-gray-900 pb-4 text-center leading-none">
                  Free
                </h1>
              </div>
              <button className="button-plan border-2 border-primary text-black">
                Select Plan
              </button>
            </div>
          </div>  )
}

export default FreePlanPricing