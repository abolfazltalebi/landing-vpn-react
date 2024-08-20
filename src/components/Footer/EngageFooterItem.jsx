import { footerLinks2 } from "../../constants/EngageFooterLinks";

function EngageFooterItem() {
  return (
    <div className="space-y-5">
      <p className="font-bold text-m">Engage</p>
      <ul className="space-y-4">
        {footerLinks2.map((item2) => {
          return (
            <li key={item2.id}>
              <a href={item2.link}>{item2.name} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EngageFooterItem;
