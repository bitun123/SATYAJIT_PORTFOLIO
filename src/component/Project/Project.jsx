import React from 'react'
import './Project.css'
import Card from '../Card/Card'
import lagunitas from '../../assets/lagunitas.png'
import chatbot from '../../assets/chatbot.png'
import stopwatch from '../../assets/stopwatch.png'
import kodyfire from '../../assets/kodyfire.png'
import joacks from '../../assets/joacks.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Project() {
    useGSAP(() => {
        gsap.from("#projects", {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: "#projects",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 80%",
                end: "top 50%"
            }
        })
               gsap.from(".slider", {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".slider",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 90%",
                end: "top 30%"
            }
        })
    })

    return (
        <div id="projects">
            <h1 id='para'>
                6 MONTH + EXPERIENCE IN WEB DEVELOPMENT
            </h1>

            {/* Swiper should be here, not a div */}
            <Swiper
                className="slider"
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 1500, }}
                slidesPerView={3}
                loop={true}

                spaceBetween={20}
                  breakpoints={{
    0: {           // mobile
      slidesPerView: 1,
      spaceBetween: 10
    },
    640: {         // tablets
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {        // desktops
      slidesPerView: 3,
      spaceBetween: 30
    }
  }}
            >
                <SwiperSlide>
                    <Card title="Lagunitas" image={lagunitas} link="https://bitun123.github.io/Lagunitas/" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title="CHAT-BOT" image={chatbot} link="https://bitun123.github.io/chat_bot/" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title="KODY-FIRE" image={kodyfire} link="https://bitun123.github.io/kodyfire-website/" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title="STOPWATCH" image={stopwatch} link="https://bitun123.github.io/stopwatchTime/" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title="JOCKS" image={joacks} link="https://bitun123.github.io/jocks/" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Project
