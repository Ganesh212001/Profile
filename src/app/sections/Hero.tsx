'use client'

import React from "react";
import { ReactTyped } from "react-typed";
import "./hero.css";

export default function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container">
        <h1>Ganesh Mahajan</h1>
        <p>
            I'm{' '}
            <ReactTyped 
                strings={['Designer','Freelancer','Developer','VideoEditor']}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                loop
            /> 
        </p>
        <div className="social-links">
            <a href="https://x.com/Ganesh21062001?t=PItrrHnveljyh5AqizcE2Q&s=09" className="twitter">
                <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.facebook.com/share/W1cquo5M7qb1sw2W/" className="facebook">
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/mr.ganesh.ig/profilecard/?igsh=MWFiNDF0c3c5OTc1Mg==" className="instagram">
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
            </a>
            <a href="https://www.linkedin.com/in/ganesh-mahajan-8553b3224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin">
                <i className="bx bxl-linkedin"></i>
            </a>
        </div>
      </div>
    </section>
  );
}
