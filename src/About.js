import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about" name="about">
        <div className="about_text_wrap">
          <div className="about_main_title" data-aos="fade-up">
            I BUILT THIS WEBSITE
          </div>
          <div
            className="about_main_title_decoration"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hope you like it
          </div>

          <div className="about_title" data-aos="fade-up" data-aos-delay="600">
            Like most people I'm not good at writing about my self...
          </div>
          <div className="about_text" data-aos="fade-up" data-aos-delay="900">
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. */}
            So my name is Erik Vardanyan and I am a Front-end Developer,
            producing high quality websites who can provide responsive HTML/CSS,
            JavaScript (vanilla, jQuery, and other frameworks) and exceptional
            user experience. The work I provide is of highest quality, fully
            responsive, and tested in a wide range of devices. I take great care
            to ensure each project is well-documented and easily maintainable so
            you can enhance a website as your company grows. Writing semantic
            markup that is documented and easy to read means it can be
            maintained and scaled in the future, and allows co-workers to
            quickly work with it. I create responsive websites that allow the
            user to experience your website in the best and most appropriate way
            suited to the device they are using. By working using progressive
            enhancement, your website is delivered with a responsive layout that
            can best make use of the space available on the smallest to largest
            devices.
          </div>
          <div className="resume" data-aos="fade-up" data-aos-delay="1200">
            <a href="../assets/ResumePDF.pdf" download>
              Download resume
            </a>
          </div>
        </div>

        <img className="aboutpic" src="../assets/me.png" alt="about" />
      </div>
    );
  }
}

export default About;
