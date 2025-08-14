import React from 'react'
import con from "../../assets/contact.png"
import './Contact.css'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
function Contact() {

useGSAP(()=>{
         gsap.from(".leftcontact img", {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".leftcontact img",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 75%",
                end: "top 30%"


            }
        })
          gsap.from(".rightcontact form", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".rightcontact form",
                scroll: "body",
                scrub: 1,
                // markers: true,
                start: "top 75%",
                end: "top 30%"


            }
        })
})



    return (
        <div id="contact">
            <div className="leftcontact">
                <img src={con} alt="" />


            </div>
            <div className="rightcontact">

                <form action="https://formspree.io/f/xldlzvje" method="POST">
                    <input type="text" name="username" placeholder='Enter your name' />
                    <input type="email" name="useremail" id="" placeholder='Enter your email' />
                    <textarea name="message" id="textarea" placeholder='message'></textarea>
                    <input type="submit" value="submit" id='btn' />
                </form>
            </div>
        </div>

    )
}

export default Contact
