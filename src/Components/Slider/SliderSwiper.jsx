import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
const SliderSwiper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [places, setPalces] = useState([]);


  useEffect(()=>{
    fetch("https://heven-tour-server-webashraf.vercel.app/places")
    .then(res => res.json())
    .then(data => setPalces(data))
  },[])

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
          thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >

          {
            places.map(place => <SwiperSlide><img src={place.placeImage} /></SwiperSlide>)
          }

        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
                    {
            places.map(place => <SwiperSlide><img src={place.placeImage} /></SwiperSlide>)
          }

        </Swiper>
      </div>
    );
};

export default SliderSwiper;