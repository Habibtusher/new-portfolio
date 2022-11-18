import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={()=>toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Bsc in Cse</h3>
                <span className="qualification_subtitle">Daffodil International U.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                 Jan 2017 - Dec 2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Programming Hero</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                 Jan 2021 - jun 2021
                </div>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">TechsBiz</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">UX Expert</h3>
                <span className="qualification_subtitle">TechsBiz</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineer</h3>
                <span className="qualification_subtitle">TechsBiz It</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Apr 2022 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Software Engineer Intern</h3>
                <span className="qualification_subtitle">Workspace Infotech ltd.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                 Aug 2021 - Dec 2021
                </div>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">TechsBiz</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
