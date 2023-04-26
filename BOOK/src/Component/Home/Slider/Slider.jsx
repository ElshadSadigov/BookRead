import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from './Slider-Img/bokkkk.jpg'
import Img2 from './Slider-Img/read.jpg'
import Img3 from './Slider-Img/bookstore.jpg'
import Img4 from './Slider-Img/modern.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./Slider.css";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const Slider = () => {


    const [swiper, setSwiper] = useState(1500)

    return (
        <div className="slider">
            <Swiper
                effect={"fade"}
                speed={swiper}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider


