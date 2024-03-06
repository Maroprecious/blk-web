import slideImg1 from "@assets/images/slideImg.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Pagination, Navigation, Parallax } from "swiper/modules";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "./carousel.css";
import { useSwiper } from "swiper/react";
import { useWindowSize } from 'usehooks-ts'

export default function Carousel() {

  const { width = 0 } = useWindowSize()
  const swiper = useSwiper();

  return (
    <div className="lg:mb-[130px]">
      <Swiper
        pagination={{
          type: "fraction",
          currentClass: "active",
          horizontalClass: "hiddenClass",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        parallax={true}
        slidesPerView={width > 1440 ? 2.5 : 1.8}
        modules={[Pagination, Navigation, Parallax]}
        className="mySwiper relative flex items-center  gap-0"
      >
        <SwiperSlide className="">
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide className="w-[690px]">
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg1} id="demo2" className="w-[690px]" />
        </SwiperSlide>
        <div className="flex gap-0 justify-center relative bottom-7">
          <GrFormPreviousLink
            onClick={() => swiper.slidePrev()}
            className="swiper-button-prev"
          />
          <GrFormNextLink
            onClick={() => swiper.slideNext()}
            className="swiper-button-next  "
          />
        </div>
      </Swiper>
    </div>
  );
}
