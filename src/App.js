import React, { useState } from "react";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import About from "./components/About";
import "./sass/App.css";

function App() {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <header className="flex">
        <button onClick={() => setTab(1)}>
          <h1>CARMEN LOPEZ</h1>
        </button>
        <span>
          <button className="flashy" onClick={() => setTab(2)}>
            <h3>Projects</h3>
          </button>
          <button className="flashy" onClick={() => setTab(3)}>
            <h3>About</h3>
          </button>
        </span>
      </header>
      {tab === 1 ? (
        <MainPage />
      ) : tab === 2 ? (
        <main className="scale-in-top">
          <section>
            <Projects props={true} />
          </section>
        </main>
      ) : (
        <About />
      )}
      <footer className="flex">
        <h4>Carmen Lopez</h4>
        <span className="flex">
          <div>
            <h5>Email me at:</h5>
            <a
              href="emailto:carmenbaez2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              carmenbaez2000@gmail.com
            </a>
          </div>
          <div>
            <h5>Social:</h5>
            <a
              href="https://t.me/cg_bl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://github.com/cgbl-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cgbl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </span>
      </footer>
    </div>
  );
}

export default App;
