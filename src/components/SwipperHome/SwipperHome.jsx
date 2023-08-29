import caring from "../../assets/services/caring.png"
import chauffeur from "../../assets/services/chauffeur.png"
import children from "../../assets/services/children.png"
import chinese from "../../assets/services/chinese.png"
import cleaning from "../../assets/services/cleaning.png"
import english from "../../assets/services/english.png"
import gardening from "../../assets/services/gardening.png"
import maintenance from "../../assets/services/maintenance.png"
import maths from "../../assets/services/maths.png"
import painter from "../../assets/services/painter.png"
import pets from "../../assets/services/pets.png"
import remove from "../../assets/services/remove.png"
import school from "../../assets/services/school.png"
import shopping from "../../assets/services/shopping.png"
import technical from "../../assets/services/technical.png"
import yoga from "../../assets/services/yoga.png"
import plumber from "../../assets/services/plumber.png"

import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function SwiperHome() {
    return (
        <Box className="container"
        >
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}

                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                className="swiper_container"
            >
                <SwiperSlide >
                    <img src={plumber} alt="plumber" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={caring} alt="caring" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chauffeur} alt="chauffeur" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={children} alt="children" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chinese} alt="chinese" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cleaning} alt="cleaning" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={english} alt="english" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={gardening} alt="gardening" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={maintenance} alt="maintenance" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={maths} alt="maths" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={painter} alt="painter" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pets} alt="pets" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={remove} alt="remove" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={school} alt="school" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shopping} alt="shopping" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={technical} alt="technical" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={yoga} alt="yoga" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </Box>
    );
}
