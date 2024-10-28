"use client";

import React, { useState, useEffect } from "react";
import { skillsData } from "../data/data";
import SectionTitle from "../components/SectionTitle";
import ProgressBar from "../components/ProgressBar";

export default function Skills() {
  const [skills, setSkills] = useState(skillsData);
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    handleSectionActive();
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const handleSectionActive = () => {
    let sectionPosition: HTMLElement | any = document.querySelector("#facts");
    let position = scroll + 500;

    if (
      position >= sectionPosition.offsetTop &&
      position <= sectionPosition.offsetTop + sectionPosition.offsetHeight
    ) {
      setActive(true);
    }
  };

  // useEffect(() => {
  //   handleSectionActive();
  // }, [scroll]);

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <SectionTitle
          title="Skills"
          brief="I specialize in web development, leveraging my skills in HTML, CSS, and JavaScript for interactive front-end experiences. Proficient in Node.js, React.js, and Next.js, I build dynamic, responsive web applications that boost user engagement and optimize overall performance."
        />
        <div className="row skills-content">
          <div className="col-lg-6">
            {skills.slice(0,3).map(skill=>(
              <ProgressBar key={skill.id} status={active} item={skill}/>
            ))}
          </div>
          <div className="col-lg-6">
          {skills.slice(3,6).map(skill=>(
              <ProgressBar key={skill.id} status={active} item={skill}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
