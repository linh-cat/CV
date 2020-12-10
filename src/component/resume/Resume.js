import React from "react";
import "./Resume.css";
function Resume({ resumeData }) {
  return (
    <div>
      <section id="resume">
        <div className="row education">
          <div className="education-left">
            <p>
              <span>Education</span>
            </p>
          </div>
          <div className="education-right">
            <ul>
              <li>Sai Gon University (SGU).</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="row skill">
          <div className="skill-left">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="skill-right">
            <ul>
              <li>
                Front-end development: HTML, CSS, Bootstrap, Javascript, React.
              </li>
              <li>Back-end development: basic Nodejs, MySQL.</li>
              <li>Other technical skill: Git, Linux.</li>
              <li>
                Soft skill: Team work, Comunication, English: good reading
                comprehension skills.
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="row persional-project">
          <div className="persional-project-left">
            <h1>
              <span>Persional-Projects</span>
            </h1>
          </div>
          <div className="peresional-project-right">
            <ul>
              <li>
                <a href=" https://hidden-retreat-71785.herokuapp.com/">
                  Nextflix
                </a>
                -Link:
                <a href="https://github.com/linh-cat/netflix-clone-react">
                  Github
                </a>
              </li>
              <li>
                <a href=" https://powerful-peak-98911.herokuapp.com/">
                  Youtube.
                </a>
                -Link:
                <a href="https://github.com/linh-cat/netflix-clone-react">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="row persional-interest">
          <div className="persional-interest-left">
            <h1>
              <span>Persional-Interest</span>
            </h1>
          </div>
          <div className="persional-interest-right">
            <ul>
              <li>Reading book.</li>
              <li>Coding</li>
              <li>Playing football</li>
              <li>Traveling.</li>
              <li>Learning new technologies.</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="row career-goals">
          <div className="career-left">
            <h1>
              <span>Career-Goals</span>
            </h1>
          </div>
          <div className="career-right">
            <ul>
              <li>Nerver stop learning and improving programming knowledge.</li>
              <li>
                My goal next year is to become a front-end developer and
                learning more back-end developer.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
