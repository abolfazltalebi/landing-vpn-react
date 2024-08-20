import { featureCheckItems } from "../../constants/FeatureCheckItems";

function CaptionFeature() {
  return (
<div className="space-y-6">
        <h2 className="text-4xl font-bold">
          We Provide Many Features You Can Use
        </h2>
        <p className="text-md">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="flex flex-col gap-4">
          {featureCheckItems.map((Citem) => {
            return (
              <div className="flex items-center gap-2" key={Citem.id}>
                <div>
                  <img src={Citem.icon} alt={Citem.name} />
                </div>
                <p>{Citem.name}</p>
              </div>
            );
          })}
        </div>
      </div>  )
}

export default CaptionFeature