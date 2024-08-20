import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import testimonials from "../../constants/Testimonials";
const Testimonials = () => {
  return (
    <section className="my-6 py-6 container space-y-4">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Trusted by Thousands of Happy Customers
        </h2>
        <p className="text-center">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-white p-3 rounded-xl h-[200px] flex flex-col items-center gap-4"
          >
            <div className="flex items-center justify-between w-full gap-4">
              <div className="flex items-center gap-3">
                <img src={testimonial.icon} alt={testimonial.name} />
                <div>
                  <h2 className="text-md">{testimonial.name}</h2>
                  <p>{testimonial.location}</p>
                </div>
              </div>
              <div>
                <p>{testimonial.rating}</p>
              </div>
            </div>
            <p className="text-center">{testimonial.feedback}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
