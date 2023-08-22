import caring from "../../assets/tasks/caring.png"
import chauffeur from "../../assets/tasks/chauffeur.png"
import children from "../../assets/tasks/children.png"
import chinese from "../../assets/tasks/chinese.png"
import cleaning from "../../assets/tasks/cleaning.png"
import english from "../../assets/tasks/english.png"
import gardening from "../../assets/tasks/gardening.png"
import maintenance from "../../assets/tasks/maintenance.png"
import maths from "../../assets/tasks/maths.png"
import painter from "../../assets/tasks/painter.png"
import pets from "../../assets/tasks/pets.png"
import remove from "../../assets/tasks/remove.png"
import school from "../../assets/tasks/school.png"
import shopping from "../../assets/tasks/shopping.png"
import technical from "../../assets/tasks/technical.png"
import yoga from "../../assets/tasks/yoga.png"
import plumber from "../../assets/tasks/plumber.png"

import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function SwiperHome() {
    return (
        <Box className="container">
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
                    <img src={plumber} alt="plumber" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={caring} alt="caring" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chauffeur} alt="chauffeur" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={children} alt="children" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chinese} alt="chinese" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cleaning} alt="cleaning" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={english} alt="english" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={gardening} alt="gardening" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={maintenance} alt="maintenance" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={maths} alt="maths" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={painter} alt="painter" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pets} alt="pets" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={remove} alt="remove" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={school} alt="school" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shopping} alt="shopping" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={technical} alt="technical" width={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={yoga} alt="yoga" width={150} />
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
