import React from "react";
import "../styles/portfolio.css";
import { Card } from "./reusable/Card";
export const Portfolio = () => {
  return (
    <section className="portfolio my-5 ">
      <div className="container">
          <h1 className="my-5">Portfolio</h1>
        <div className="row">
         <Card color="#959188" title="HTML "/>
         <Card color="#404040" title="CSS"/>
         <Card color="#959188" title="JS"/>
        </div>
      </div>
    </section>
  );
};
