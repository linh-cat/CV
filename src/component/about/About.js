import React from "react";
import "./About.css";

function About({ resumeData }) {
  return (
    <div>
      <section id="about" className="about">
        <div className="picture-persional-left">
          <img
            src="https://images.pexels.com/photos/1452127/pexels-photo-1452127.jpeg?cs=srgb&dl=pexels-ira-dulger-1452127.jpg&fm=jpg"
            className="profile-pic"
            alt="profile-pic"
          />
        </div>
        <div className="content-right">
          <div className="about-me">
            <h2>About Me</h2>
            <p>{resumeData.roleDescription}</p>
          </div>
          <div className="contact-detail">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Nguyễn Thành Linh.</span>
              <br></br>
              <br></br>
              <span>341, Cao Dat Phuong 1, Quan 5, Tp.HCM, Viet Nam.</span>
              <br></br>
              <br></br>
              <span>Phone: (+84) 913368350.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
