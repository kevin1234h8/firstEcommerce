import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
export default function Learn() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="swiper-container">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            width: "100%",
            height: "450px",
          }}
          className="slide"
        >
          <First />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "450px",
          }}
          className="slide"
        >
          <Second />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "450px",
          }}
          className="slide"
        >
          <Third />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "450px",
          }}
          className="slide"
        >
          <Fourth />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
