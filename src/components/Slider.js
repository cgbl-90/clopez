import { useState } from "react";

function Slider() {
  const data = [
    {
      id: 1,
      review:
        "I worked with Carmen at Joom and found her to be an incredibly professional and pleasant person to work with.  Carmen is very positive, open and supportive. She was extremely efficient and always met her deadlines.",
      person: "Anna Kon",
      role: "colleague",
      company: "Joom",
      link: "https://www.linkedin.com/in/cgbl/details/recommendations/",
    },
    {
      id: 2,
      review:
        "I worked with Carmen at Remote.com, she was by far an outstanding member of her team, as a CX manager she helped me with clients and employees queries as well as supporting my team by getting accurate data to complete onboarding.",
      person: "Vanesa Koopman Esposito",
      role: "colleague",
      company: "Remote",
      link: "https://www.linkedin.com/in/cgbl/details/recommendations/",
    },
    {
      id: 3,
      review:
        "Working with Carmen was a great pleasure. She is one of those people who would ask you a lot of questions around the goals and objectives of a certain project in the beginning before jumping onboard. When she gets the clarity and jumps onboard you can trust that she would get the work done, whatever it takes.",
      person: "Ashwin Nandapurkar",
      role: "colleague",
      company: "Remo",
      link: "https://www.linkedin.com/in/cgbl/details/recommendations/",
    },
    {
      id: 4,
      review:
        "Really loving Remo, it's brilliant for event networking. Shout out to Carmen who has been so brilliantly helpful too!",
      person: "Rachel Kerr",
      role: "customer",
      company: "Remo",
      link: "https://www.trustpilot.com/review/remo.co",
    },
  ];

  let [slide, setSlide] = useState(1);

  function goPrev() {
    if (slide === 0) setSlide(data.length - 1);
    else setSlide(slide - 1);
  }

  function goNext() {
    if (slide === data.length - 1) setSlide(0);
    else setSlide(slide + 1);
  }

  return (
    <section>
      <h2>What people say</h2>
      <div className="slider flex">
        <button onClick={goPrev}>🠐</button>
        <article>
          <a href={data[slide].link} target="_blank" rel="noopener noreferrer">
            <h3 className="pointer flashy">{data[slide].review}</h3>
          </a>
          <h4>{`${data[slide].person}, ${data[slide].role} at ${data[slide].company}`}</h4>
        </article>
        <button onClick={goNext}>🠒</button>
      </div>
    </section>
  );
}

export default Slider;
