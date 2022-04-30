import React, { Fragment, useEffect } from "react";
import COVIVID from "./assets/CoviHack Page assets/hack-o-relay-video.mp4";
import "./assets/css/CoviHack_Schedule.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CoviHack_Schedule = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Fragment>
      <div className="schedule mt-5 mb-5 ">
        <div className="container">
          <div className="row">
            <div className="greenbox"></div>
            <div className="col-md-6 d-flex justify-content-center">
              <video
                playsInline
                autoPlay
                loop
                muted
                id="covivid"
                data-aos="fade-right"
                className="mt-3 mb-3"
              >
                <source src={COVIVID} type="video/mp4" />
                your browser does not support tag.
              </video>
            </div>
            <div className="col-md-5 mt-4 " data-aos="fade-left">
              <h3 className="text-center mb-3">
                Schedule for <span>Hack-o-Relay</span>
              </h3>
              <hr />
              <div>
                <div>
                  <h5>28-04-2022 Thursday</h5>
                  <ul>
                    <h6>
                      <span>Introductory event</span>
                    </h6>

                    <li>
                      {" "}
                      <span>30-40 Mins</span> Introductory event where we'll
                      discuss the rules of the Hackthon and release the Problem
                      Statements/themes of all three tracks{" "}
                    </li>
                    <li>
                      {" "}
                      Mode: Hybrid (<span> OFFLINE + ONLINE</span>){" "}
                    </li>
                  </ul>
                  <ul>
                    <h6>
                      <span>Tech Session 1</span>
                    </h6>

                    <li>
                      {" "} Session on 
                      <span> Blockchain (</span>  level: <span> Beginner to  Intermediate</span>)
                    </li>
                    <li>
                      {" "}
                      Mode:<span> ONLINE</span>{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>29-04-2022 Firday</h5>
                  <ul>
                    <h6>
                      <span>Tech Session 2</span>
                    </h6>

                    <li>
                      {" "} Session on 
                      <span>  CyberSecurity (</span>  level: <span> Beginner </span>)
                    </li>
                    <li>
                      {" "}
                      Mode: Hybrid (<span> OFFLINE + ONLINE</span>){" "}
                    </li>
                  </ul>
                  <ul>
                    <h6>
                      <span>Tech Session 3</span>
                    </h6>

                    <li>
                      {" "} Session on 
                      <span>How to prepare for an SDE</span> 
                    </li>
                    <li>
                      {" "}
                      Mode: Hybrid (<span> OFFLINE + ONLINE</span>){" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>30-04-2022 Saturday </h5>
                  <ul>
                    <h6>
                      <span>Result Declaration</span>
                    </h6>

                    <li>
                      {" "} session on 
                      <span> Top 2 Winner</span> will be announced for each track
                    </li>
                    <li>
                      {" "}
                      Mode: <span> ONLINE</span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoviHack_Schedule;
