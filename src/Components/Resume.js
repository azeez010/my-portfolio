import React, { useEffect, useState } from "react";
import Rotate from 'react-reveal/Rotate';

const Resume = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState("");
  useEffect(() => {
    // if scrolling passed 80px from the top
    const toggleScrolled = () => {
      window.scrollY >= 1300 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", toggleScrolled);
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
    };
  }, []);
  // if (isScrolled === true) {
  //   document.getElementById("skills").classList.add("animate")
  // }
  if (data) {
    var css = "images/icons/css.png";
    var html = "images/icons/html.png";
    var firebase = "images/icons/firebase.png";
    var github = "images/icons/github.png";
    var npmjs = "images/icons/npmjs.png";
    var reactjs = "images/icons/reactjs.png";
    var vscode = "images/icons/vscode.png";
    var javascript = "images/icons/javascript.png";
    var tailwindcss = "images/icons/tailwindcss.png";
    var python = "images/icons/python.png";
    var golang = "images/icons/golang.png";
    var solidity = "images/icons/solidity.png";

    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree}

            {/*<em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p> */}
          </p>
        </div>
      );
    });
    // var work = data.work.map(function (work) {
    //   return (
    //     <div key={work.company}>
    //       <h3>{work.company}</h3>
    //       <p className="info">
    //         {work.title}
    //         <span>&bull;</span> <em className="date">{work.years}</em>
    //       </p>
    //       <p>{work.description}</p>
    //     </div>
    //   );
    // });
  }

  return (
    <section id="resume">
      <Rotate bottom left>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      {/* <div className="row work">
        <div className="three columns header-col">
        <h1>
        <span>Work</span>
        </h1>
        </div>
        
        <div className="nine columns main-col">{work}</div>
      </div> */}

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills / tools i use</span>
          </h1>
        </div>

        <div className="nine columns skills main-col">
          <div className="skill">
            <img className="html" src={html} alt="html" />
          </div>
          <div className="skill">
            <img className="css" src={css} alt="css" />
          </div>
          <div className="skill">
            <img className="javascript" src={javascript} alt="javascript" />
          </div>
          <div className="skill">
            <img className="reactjs" src={reactjs} alt="reactjs" />
          </div>
          <div className="skill">
            <img className="tailwindcss" src={tailwindcss} alt="tailwindcss" />
          </div>
          <div className="skill">
            <img className="firebase" src={firebase} alt="firebase" />
          </div>
          <div className="skill">
            <img className="github" src={github} alt="github" />
          </div>
          <div className="skill">
            <img className="npmjs" src={npmjs} alt="npmjs" />
          </div>
          <div className="skill">
            <img className="vscode" src={vscode} alt="vscode" />
          </div>
          <div className="skill">
            <img className="vscode" src={solidity} alt="solidity" />
          </div>
          <div className="skill">
            <img className="vscode" src={golang} alt="golang" />
          </div>
          <div className="skill">
            <img className="python" src={python} alt="python" />
          </div>
        </div>
      </div>
        </Rotate>
    </section>
  );
};

export default Resume;