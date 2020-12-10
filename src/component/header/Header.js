import React, {useState, useEffect} from "react";
import "./Header.css";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Header({ resumeData }) {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return () => {
            window.addEventListener("scroll")
        }
    }, [])
  return (
    <div>
      <React.Fragment>
        <header id="home">
            {/* header top */}
          <div className={`header-top ${show && "header-top-black"}`}>
            <div className="header-icon">
              <a className="smoothscroll" href="https://github.com/linh-cat">
                <GitHubIcon />
              </a>
            </div>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
              <li></li>
            </ul>
          
          </div>
          {/* header bottom */}
          <div className="header-bottom">
            <div className="row-banner">
              <div className="banner banner-text">
                <div className="hover">
                  <h1>I</h1>
                </div>
                <div className="hover">
                  <h1>'</h1>
                </div>
                <div className="hover margin-right">
                  <h1>M</h1>
                </div>
                <div className="hover">
                  <h1>L</h1>
                </div>
                <div className="hover">
                  <h1>I</h1>
                </div>
                <div className="hover">
                  <h1>N</h1>
                </div>
                <div className="hover">
                  <h1>H</h1>
                </div>
              </div>
              <div className="description">{resumeData.aboutme}</div>
            </div>
          </div>
        </header>
      </React.Fragment>
    </div>
  );
}
