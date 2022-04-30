import {React,useEffect} from "react";
import "./assets/css/Covihack_Sponsors.css";
import img from "./assets/CoviHack Page assets/sponsor.jpg";
import GMC_LogoS from "./assets/CoviHack Page assets/Sponsors/GMC LogoS.png";
import interview_cake from "./assets/CoviHack Page assets/Sponsors/interview_cake.png";
import StreamYard from "./assets/CoviHack Page assets/Sponsors/StreamYard.png";
import taskade_circle_icon from "./assets/CoviHack Page assets/Sponsors/taskade-circle-icon.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Covihack_Sponsors = () =>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="sponsors">
            <div className="container">
                <h1 className="text-center">Our Sponsors</h1>
                <div className="row d-flex flex-column">
                    <div className="col-md-12 sponsors-img" data-aos="fade-up">
                        <div className="row-g">

                            <div className="row">
                                <div className="col gold-title">Gold</div>
                            </div>

                            <div className="row spons-row">
                                <div className="col-5 spons-g" ><img src={GMC_LogoS} className="spons-row-img" /></div>
                                <div className="col-5 spons-g" ><img src={StreamYard} className="spons-row-img" /></div>
                            </div>

                        </div>

                        <div className="row-s">

                            <div className="row">
                                <div className="col silver-title">Silver</div>
                            </div>


                            <div className="row spons-row row-2">
                            
                                <div className="col-3 spons-s" ><img src={taskade_circle_icon} className="spons-row-img" /></div>
                                <div className="col-3 spons-s" ><img src={interview_cake} className="spons-row-img" /></div>
                            </div>


                        
                        </div>
                    </div>
                    <div className="col-md-12" data-aos="fade-up"><img src={img} className="spons-img" /></div>
                </div>
            </div>
        </div>
    );
}

export default Covihack_Sponsors;