import { section2Stats } from "../../constants/SectionState";
import CaptionSubHeadLine from "./CaptionSubHeadLine";
import ImageSubHedLine from "./ImageSubHedLine";

function SubHeadLine() {
  return (
    <section className="section-2 items-center justify-between">
      {section2Stats.map((items) => {
        return (
          <div className="flex items-center gap-4" key={items.id}>
            <ImageSubHedLine items={items}/>
            <CaptionSubHeadLine items={items}/>
          </div>
        );
      })}
    </section>
  );
}

export default SubHeadLine;
