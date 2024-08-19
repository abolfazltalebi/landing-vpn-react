import { section2Stats } from "../../constants";

function SubHeadLine() {
  return (
    <section className="section-2 items-center justify-between">
      {section2Stats.map((items) => {
        return (
          <div className="flex items-center gap-4" key={items.id}>
            <div>
              <img src={items.src} alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{items.number}</h2>
              <p>{items.name}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SubHeadLine;
