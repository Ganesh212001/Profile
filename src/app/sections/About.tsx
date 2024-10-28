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
                  <strong>Website:</strong> <span>www.example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Phone:</strong> <span>+91 1234567890</span>
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
                  <strong>Degree:</strong> <span>ITUS</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Email:</strong> <span>email@example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p>I am a MERN stack developer and video editor with a passion for creating efficient, modern web applications and visually engaging content. My skill set spans full stack development, front-end UI/UX design, and post-production video editing. I focus on delivering innovative, user-focused solutions that drive both performance and creativity for my clients' projects, ensuring quality results that align with their business goals.</p>
        </div>
      </div>
      </div>
    </section>
  );
}
