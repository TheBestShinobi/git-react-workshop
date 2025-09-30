import React from "react";
import "../styles/home.css"
import {Typewriter} from "react-simple-typewriter"

function Home() {
  return (
    <>
    
      /*Match the section name with the styles folder defition for home seciton */
      <section className="home-section">
        <div className="hero-content">

          <h1>
            Hello,ddd I'm <span className="highlight">Mitchell Verma!!!!!</span>
          </h1>

          <h2>
          I'm {""}
          <span className="typewriter">

          <Typewriter
          words={[
            "a Software developer",
            "an AI Enthusiast",
            "a Lemon lover",
            "a Problem solver",
          ]}
          // These are props below! (given in website install description
          // When you download a react package) 
          loop
          cursor
          typeSpeed={70}
          deleteSpeed={50}ds
          cursorColor="blue"
          />

          </span>
          </h2>

          <p className="hero-desc">
            I love building interactive websites, I love working on large language models, and exploring AI-powered yum yums
          </p>

          <button 
          className="view_button"
          onClick={() => document.getElementById("projects").scrollIntoView({behavior: "smooth"})}
          >
            View my projects
          </button>
        




          </div>


      </section>

    </>
  );
}

export default Home;