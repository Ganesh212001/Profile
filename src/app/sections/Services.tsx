import React from "react";
import SectionTitle from "../components/SectionTitle";
import ServicesItem from "../components/ServicesItem";

async function getServicesData() {
  const res = await fetch("http://localhost:3000/api/services");
  return res.json();
}

export default async function Services() {
  const items: [] = await getServicesData();

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
