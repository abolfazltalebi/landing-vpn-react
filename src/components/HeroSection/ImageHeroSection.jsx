import sectionImage from "../../../public/images/hero-section.png"
function ImageHeroSection() {
  return (
<div className="order-first md:order-last">
        <img
          src={sectionImage}
          className="img-fluid"
          alt=""
        />
      </div>  )
}

export default ImageHeroSection