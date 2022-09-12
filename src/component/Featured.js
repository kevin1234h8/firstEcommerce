import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <h4
        style={{
          padding: "3rem 3rem 1.5rem 3rem",
          margin: "1rem 0 0 0",
        }}
      >
        Our featured products
      </h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          margin: "50px",
        }}
      >
        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "200px",
            width: "50%",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1591681354784-c684e483dae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1488240339625-c4014e114224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          {/* <div
            style={{
              position: "absolute",
              color: "white",
              bottom: "10px",
            }}
          >
            $200.00
          </div> */}
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1621985499238-698dfd45b017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1628285348080-38683c1232be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
