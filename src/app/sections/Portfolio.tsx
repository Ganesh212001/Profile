"use client";

import React, { useState, useEffect } from "react";
import "./portfolio.css";
import SectionTitle from "../components/SectionTitle";
import { filters } from "../data/data";
import dynamic from "next/dynamic";

const PortfolioItem = dynamic(() => import('../components/PortfolioItem'), {
  ssr: false
});

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const getPortfolioData = () => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((portfolio) => setData(portfolio))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getPortfolioData();
  }, []);
  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterActive = (id: number) => {
    filters.map(filter=>{
        filter.active = false;
        if(filter.id === id) filter.active = true
    })
  }

  const handleFilterChange = (id: number, category: string) => {
    handleFilterActive(id);
    if (category === "all") {
      setItems(data);
    } else {
      setItems(
        data.filter((item: { category: string }) => item.category === category)
      );
    }
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <SectionTitle
          title="Portfolio"
          brief="My portfolio showcases a diverse range of projects that highlight my skills as a MERN stack developer and video editor. Each project demonstrates my ability to create responsive web applications and engaging video content. From e-commerce platforms to interactive websites, I focus on delivering user-centric solutions that enhance functionality and visual appeal. Explore my work to see how I transform ideas into innovative digital experiences."
        />
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "filter-active" : undefined}`}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {items.map(
            (item: {
              id: number;
              img: string;
              title: string;
              brief: string;
              category: string;
            }) => (
              <PortfolioItem key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
