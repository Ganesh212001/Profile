import React from "react";
import "./about.css";
import SectionTitle from "../components/SectionTitle";
import profileImg from "../../../public/assets/images/profile-img.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle
          title="about"
          brief="As a skilled MERN stack web developer and video editor, I create dynamic, user-friendly websites and engaging video content tailored to client needs. With a focus on creativity, efficiency, and quality, I deliver solutions that boost online presence and captivate audiences. Let's collaborate!"
        />
        <div className="row">
        <div className="col-lg-4">
          <Image src={profileImg} className="img-fluid" alt="profile image" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>UI/UX Designer &amp; Full Stack Developer.</h3>
          <p className="fst-italic">
          As a UI/UX designer and full stack developer, I create responsive, intuitive user experiences and scalable solutions that boost engagement and drive business growth.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Birthday:</strong> <span>21 June 2001</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Website:</strong> <span>profile-ganesh.vercel.app</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Phone:</strong> <span>+91 9724158961</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                  <span>Surat, Gujarat</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                  <span>23</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Degree:</strong> <span>Qualified for Web Development</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Email:</strong> <span>ganeshmahajan21062001@gmail.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
          As a MERN stack developer, I specialize in building dynamic, user-friendly web applications using MongoDB, Express, React, and Node.js. I focus on creating efficient, scalable solutions that deliver a seamless, responsive experience across devices. Prioritizing usability and accessibility, I design modern interfaces that reflect the client’s brand while ensuring smooth interaction and high performance.</p>
          <p>In video editing, my goal is to bring stories to life with polished, engaging content. Using tools like Adobe Premiere Pro and After Effects, I craft visually compelling videos that captivate audiences through effective pacing, transitions, and sound design. Each project aims to leave a lasting impression, resonate with viewers, and perfectly reflect the client’s vision.</p>
        </div>
      </div>
      </div>
    </section>
  );
}
