import loactionMap from '../../../public/images/map.png'
function Location() {
  return (
    <section className="my-14 space-y-4 container">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Huge Global Network of Fast VPN
        </h2>
        <p className="text-center">
          See SafeVPN everywhere to make it easier for you when you move
          locations.
        </p>
      </div>
      <div className="">
        <img src={loactionMap} className="img-fluid" alt="" />
      </div>
    </section>
  );
}

export default Location;
