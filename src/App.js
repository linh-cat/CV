import React from "react"
import './App.css';
import About from "./component/about/About"
import Header from "./component/header/Header"
import ContactUs from "./component/ContactUs"
import Footer from "./component/Footer"
import Portfolio from "./component/Porfolio"
import Resume from "./component/resume/Resume"
import Testimonials from "./component/Testimonials"
import resumeData from "./Resumedata"
function App() {
  return (
    <div className="App">
     <Header resumeData={resumeData}/>
     <About resumeData={resumeData} />
     <Resume resumeData={resumeData}/>
    </div>
  );
}

export default App;
