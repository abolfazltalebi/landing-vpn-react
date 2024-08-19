import { freePlanFeatures, basicPlanFeatures, premiumPlanFeatures } from "../../constants";
import standard from "../../../public/images/icons/Standard.png"
function Pricing() {
  return (
    <section className="overflow-hidden bg-white py-6">
      <div className="container px-5 pt-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="title-plan">Choose Your Plan</h1>
          <p className="caption-plan">
            Lets choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
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
          </div>
          <div className="p-2 w-full">
            <div className="card-price">
              <div>
                <img src={standard} alt="" />
              </div>
              {basicPlanFeatures.map((itme1) => {
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
              <div className="mt-12">
                <h1 className="text-5xl text-gray-900 pb-4 text-center leading-none ">
                  $9 / mo
                </h1>
              </div>
              <button className="button-plan border-2 border-primary text-black">
                Select Plan
              </button>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}

export default Pricing;
