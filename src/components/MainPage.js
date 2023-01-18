import React from "react";
import Clients from "./Clients";
import Projects from "./Projects";

function MainPage() {
  return (
    <main className="scale-in-top">
      <section id="hero">
        <h1>
          I'm a frontend developer, <br />
          focused on creating <br />
          <mark>customer-centric</mark> websites <br />& mobile applications
        </h1>
      </section>
      <section id="featured">
        <h2>Projects</h2>
        <Projects props={false} />
      </section>
      <section id="clients">
        <h2>Clients</h2>
        <div className="flex">
          <h3 className="flex-child">
            I've had the pleasure of working with some great clients along the
            way. These are some of them!
          </h3>
          <span className="flex-child client-list">
            <Clients />
          </span>
        </div>
      </section>
      <section className="flex">
        <h2 className="flex-child">About me</h2>
        <h3 className="flex-child">
          I'm enthusiastic frontend developer focused on creating
          customer-centric, responsive websites and mobile apps. Focused on
          React & Sass. <br /> <br />
          Previously, I worked as customer support agent, customer support lead,
          customer success manager & regional/country manager in e-Commerce,
          SaaS & Gaming companies.
        </h3>
      </section>
    </main>
  );
}

export default MainPage;
