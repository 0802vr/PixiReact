import { Swiper, SwiperSlide } from "swiper/react";
import PhotoTop from '@/images/pageArticle/PhotoTop.png'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../scss/ArticleSlider.scss";

const images = [PhotoTop, PhotoTop, PhotoTop];
function ArticleSlider() {
  return (
    <section className="article-slider-container">
      <div className="slider-wrapper">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          resistance={true}
          resistanceRatio={0.5}
          breakpoints={{
            320: {
              spaceBetween: 6,
            },
            420: {
              spaceBetween: 6,
            },
            568: {
              spaceBetween: 6,
            },
            768: {
              spaceBetween: 10,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="mySwiperSlide">
              <img src={src} alt={`Слайд ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ArticleSlider;
