"use client"

import React,{useEffect, useState} from "react";
import "./resume.css";
import SectionTitle from "../components/SectionTitle";
import ResumeItem from "../components/ResumeItem";



export default function Resume() {
 const [items, setItems] = useState<any>([])

 async function getResumeData() {
  const res = await fetch("/api/resume")
  .then((res) => res.json())
  .then((data) => setItems(data))
  .catch((e) => console.log(e.message));
}
  useEffect(()=>{
  getResumeData()
  },[])
  return (
    <section id="resume" className="resume">
      <div className="container">
        <SectionTitle
          title="Resume"
          brief="My journey began with a passion for technology and creativity. I learned HTML, CSS, and JavaScript, eventually mastering the MERN stack. Simultaneously, I developed my video editing skills, working on diverse projects that combine technical expertise with creativity to deliver engaging user experiences."
        />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">{ items && items.length > 0 && items[0].category}</h3>
            {items &&
              items.length > 0 &&
              items[0].content.map(
                (item: {
                  id: number;
                  title: string;
                  period: string;
                  brief: string;
                  details: [string];
                }) => <ResumeItem key={item.id} item={item} />
              )}
            <h3 className="resume-title">{items && items.length > 0 && items[1].category}</h3>
            {items &&
              items.length > 0 &&
              items[1].content.map(
                (item: {
                  id: number;
                  title: string;
                  period: string;
                  brief: string;
                  details: [string];
                }) => <ResumeItem key={item.id} item={item} />
              )}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">{ items && items.length > 0 && items[2].category}</h3>
            {items &&
              items.length > 0 &&
              items[2].content.map(
                (item: {
                  id: number;
                  title: string;
                  period: string;
                  brief: string;
                  details: [string];
                }) => <ResumeItem key={item.id} item={item} />
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
