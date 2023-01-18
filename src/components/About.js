import avatar from "../avatar.jpg";
import Slider from "./Slider";

function About() {
  return (
    <main className="scale-in-top">
      <section>
        <h2>About me</h2>
        <div className="flex">
          <h3 className="flex-child">
            I'm enthusiastic frontend developer focused on creating
            customer-centric, responsive websites and mobile apps. Focused on
            React & Sass. <br /> <br />
            Previously, I worked as customer support agent, customer support
            lead, customer success manager & regional/country manager in
            e-Commerce, SaaS & Gaming companies.
            <br /> <br />
            <mark>Currently, I'm a Senior Support Engineer at Chromatic!</mark>
          </h3>
          <span className="flex-child">
            <img src={avatar} alt="Carmen Lopez" />
          </span>
        </div>
      </section>
      <section className="flex">
        <h2 className="flex-child">I can help you</h2>
        <h3 className="flex-child">
          ‣ create a responsive and complex website for your business <br />‣
          migrate migrate legacy code and websites to latests tech stack <br />
          ‣ migrate your website to a constructor (Wordpress, Tilda, Wix) <br />
          ‣ create a landing page for your product or service <br />‣ optimize
          your app for modularity & speed and much more...
        </h3>
      </section>
      <Slider />
    </main>
  );
}

export default About;
