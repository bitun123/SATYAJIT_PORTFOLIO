import React from 'react'
import './About.css'
import Card from '../Card/Card'
// import dsa from '../../assets/dsa.png'
import frontend from '../../assets/frontend.png'
import react from '../../assets/react.png'
import lang from '../../assets/lang.png'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


function About() {
    useGSAP(() => {
        gsap.from(".circle", {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".circle",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 75%",
                end: "top 30%"


            }
        })
        gsap.from(".line", {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".line",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 75%",
                end: "top 30%"


            }
        })

        gsap.from(".aboutdetails h1", {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".circle",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 75%",
                end: "top 30%"


            }
        })
        gsap.from(".aboutdetails li", {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".aboutdetails",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 75%",
                end: "top 30%"


            }
        })

        gsap.from(".rightabout", {
            y: 200,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".rightabout ",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 75%",
                end: "top 20%"


            }
        })

    })
    return (
        <div id="about">

            <div className="leftabout">
                <div className="circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>


                </div>

                <div className="aboutdetails">
                    <div className="personalinfo">
                        <h1>PERSONAL INFO</h1>
                        <ul>
                            <li>
                                <span>NAME</span> : SATYAJIT DAS MAHAPATRA
                            </li>
                            <li>
                                <span>AGE</span> : 23 YEARS
                            </li>
                            <li>
                                <span>GENDER</span> : MALE
                            </li>
                            <li>
                                <span>LANGUAGE KNOW</span> : HINDI,ENGLISH
                            </li>
                        </ul>
                    </div>
                    <div className="education">
                        <h1>EDUCATION</h1>
                        <ul>
                            <li>
                                <span>DEGREE</span> : B.TECH
                            </li>
                            <li>
                                <span>BRANCH</span> : CSE(AI,ML)
                            </li>
                            <li>
                                <span>CGPA</span> :8.23
                            </li>

                        </ul>
                    </div>
                    <div className="skill">
                        <h1>SKILL</h1>
                        <ul>
                            <li>
                                FRONT-END DEVELOPER
                            </li>
                            <li>
                                REACT JS,JAVASCRIPT
                            </li>
                            <li>
                                DBMS
                            </li>

                        </ul>
                    </div>
                </div>

            </div>



            <div className="rightabout" >
                <Card title="FRONT-END DEVELOPER" image={lang} link="#" />
                <Card title="REACT" image={react} link="#" />
                <Card title="JAVASCRIPT" image={frontend} link="" />
            </div>

        </div>
    )
}

export default About
