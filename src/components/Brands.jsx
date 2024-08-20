import { brandLogos } from "../constants/BrandLogos";

function Brands() {
  return (
    <section className="bg-white py-6">
      <div className="cotainer grid grid-cols-2 md:grid-cols-5 gap-5 items-center justify-center">
        {brandLogos.map((brands) => {
          return (
            <div key={brands.id}>
              <img src={brands.src} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Brands;
