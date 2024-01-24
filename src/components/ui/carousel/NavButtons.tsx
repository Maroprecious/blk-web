import { useSwiper } from "swiper/react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "./carousel.css";
const NavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex absolute gap-0 justify-center">
      <GrFormPreviousLink
        onClick={() => swiper.slidePrev()}
        className="swiper-button-prev"
      />
      <GrFormNextLink
        onClick={() => swiper.slideNext()}
        className="swiper-button-next "
      />
    </div>
  );
};

export default NavButtons;
