import {React,useEffect} from "react";
import "./assets/css/Covihack_Tracks.css";
import fstack from "./assets/images/fstack.png";
import content from "./assets/images/content.png";
import ai from "./assets/CoviHack Page assets/Vectors/artificial-intelligence.png";
import vr from "./assets/CoviHack Page assets/Vectors/virtual-reality.png";
import ft from "./assets/CoviHack Page assets/Vectors/bars.png";
import sg from "./assets/CoviHack Page assets/Vectors/love.png";
import iot from "./assets/CoviHack Page assets/Vectors/internet-of-things.png";
import hc from "./assets/CoviHack Page assets/Vectors/insurance.png";
import service from "./assets/CoviHack Page assets/Vectors/service.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Covihack_Tracks = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="tracks">
            <div className="container">
                <div className="row tracks-head"><h2>Tracks</h2></div>
                <div className="row">
                    <div className="col-5 track-title">
                        <div className="ui d-flex" style={{marginTop:'20px'}}>
                            <img src="https://www.logolynx.com/images/logolynx/d5/d575e6c7942b956d13faa5a5f7bbe173.png" /> <b>UI & UX</b>
                        </div>
                        <div className="fstack d-flex" style={{marginTop:'8px'}}>
                            <img src={ fstack} /> <b>Full Stack</b>
                        </div>
                        <div className="content-w d-flex" style={{marginTop:'6px'}}>
                            <img src={content}/> <b>Content-Writing</b>
                        </div>
                      
                    </div>

                    <div className="col-7 track-title-desc">
                        <div className="row ui" >
                        UX/UI is a hot field in software development and web design today. Companies need
designers who can rapidly prototype the interface for an app or a website, applying principles
of usability and accessibility to create intuitive, engaging user experiences.
Both UI and UX designs need to be flawlessly executed and perfectly aligned with
pre-existing user expectations to create an excellent user interface/experience. And when
those stars align the results can be astounding.
                        </div>
                        <div className="row fstack" >
                        "No one could fault you for feeling a bit overwhelmed."
Full stack developers are highly versatile jacks-of-all-trades in an industry that demands
comprehensive programming knowledge.
Take a breath: learning how to become a full stack web developer isn’t as difficult or
time-consuming as you initially might think. In this session, we’ll walk you through the
journey of full stack development, what you need to learn, and how you can prepare yourself
for a full-blown career in development…
                        </div>
                        <div className="row content-w" >


"Writing is an art and you can master it with the right guidance."
A technical writer is a good career option because people will always need help
understanding how to use products, software, or websites.Turning basic technical
information into valuable technical content requires a broad set of skills. Professionals
looking to make a career out of this would usually become technical content writers.
If you are a student, an amateur writer, or someone who wants to know the basics of it all,
this session is for you!

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Covihack_Tracks;