"use client"

import React,{useEffect, useState} from "react";
import SectionTitle from "../components/SectionTitle";
import ServicesItem from "../components/ServicesItem";



export default function Services() {
  const [items, setItems] = useState<any>([])

  async function getServicesData() {
    const res = await fetch("/api/services")
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch((e) => console.log(e.message));
  }

  useEffect(()=>{
    getServicesData()
    },[])

  return (
    <section id="services" className="services">
      <div className="container">
        <SectionTitle
          title="Services"
          brief="I provide a variety of services, including web development using the MERN stack, engaging video editing to captivate audiences, and efficient MS Excel solutions for data management and analysis. My focus is on delivering high-quality, tailored results to meet your needs"
        />
        <div className="row">
          {items.map(
            (item: {
              id: number;
              delay: string;
              svgPath: string;
              icon: string;
              iconColor: string;
              name: string;
              brief: string;
            }) => (
              <ServicesItem key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
