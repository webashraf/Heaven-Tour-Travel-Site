import React, { useEffect, useState } from "react";
// Import Swiper React components
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";
const SliderSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [places, setPalces] = useState([]);

  useEffect(() => {
    fetch("https://heven-tour-server.vercel.app/places")
      .then((res) => res.json())
      .then((data) => setPalces(data));
  }, []);

  console.log(places);

  return (
    <div className="relative -mt-16">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {places.map((place) => (
          <SwiperSlide key={place.id} className="relative">
            <img src={place.placeImage} />
            <div className=" absolute left-16 ml-20 text-white w-1/3 text-left">
            <h1 className="text-6xl mb-3">{place.placeName}</h1>
            <p>{place.description}</p>
            <Link to={"/booking"} className="btn btn-warning rounded-none mt-3">Booking <BsArrowRight className="ml-3"></BsArrowRight> </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {places.map((place) => (
          <SwiperSlide key={place.id} className="relative rounded-2xl overflow-hidden">
            <img src={place.placeImage} />
            <h1 className="text-2xl absolute text-white">{place.placeName}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
