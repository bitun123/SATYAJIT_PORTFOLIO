import React from 'react'
import './Home.css'
import satyajit from '../../assets/satyajit.png'
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function Home() {
    useGSAP(() => {

        let tl1 = gsap.timeline()
        tl1.from(".line1", {
            y: 80,
            duration: 1,
            opacity: 0,
            ease: "power3.out"
        })
        tl1.from(".line2", {
            y: 80,
            duration: 1,
            opacity: 0,
            ease: "power3.out"
        })
        tl1.from(".line3", {
            y: 80,
            duration: 1,
            opacity: 0,
            ease: "power3.out"
        })

gsap.from(".righthome img",{

       x: 100,
            duration: 1.5,
            opacity: 0,
            ease: "power3.out"
})
    })

    const handleDownload = () => {
        const fileUrl = '/resume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="home">

            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">I AM</div>
                    <div className="line2">SATYAJIT</div>
                    <div className="line3">
                        <Typewriter
                            words={['WEB DEVELOPER', 'FRONT-END DEVELOPER', 'SOFTWARE DEVELOPER']}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </div>

                    <button onClick={handleDownload}>DOWNLOAD CV</button>

                </div>
            </div>
            <div className="righthome">
                <img src={satyajit} alt="" />
            </div>
        </div>
    )
}

export default Home
