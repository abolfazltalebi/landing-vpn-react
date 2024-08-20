import { footerLinks1 } from "../../constants/ProductFooterLinks";

function FooterProductItems() {
  return (
    <div className="space-y-5">
      <p className="font-bold text-m">Product</p>
      <ul className="space-y-4">
        {footerLinks1.map((item1) => {
          return (
            <li key={item1.id}>
              <a href={item1.link}>{item1.name} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterProductItems;
