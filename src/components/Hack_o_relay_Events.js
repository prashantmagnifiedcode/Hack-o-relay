import {React,useEffect} from 'react';
import first_event from './assets/CoviHack Page assets/28.jpeg';
import sec_event from './assets/CoviHack Page assets/29.jpeg';
import  Content_mentor from  './assets/images/Tech_mentor/Content_mentor .png'
import  Cybersecurity_Mentor from  './assets/images/Tech_mentor/Cybersecurity_Mentor.png'
import  DSC_wow from  './assets/images/Tech_mentor/DSC_wow.png'
import  FStack from  './assets/images/Tech_mentor/FStack.png'
import  SDE_Mentor from  './assets/images/Tech_mentor/SDE_Mentor.png'
import  ui_ux from  './assets/images/Tech_mentor/ui_ux.png'
import './assets/css/CoviHack_Schedule.css';
import AOS from "aos";
import "aos/dist/aos.css";
const Covihack_Event=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="Covi-event container">
            <h3>Register for the upcoming speaker sessions</h3>
            <div className="row" data-aos="fade-up">
           
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card">
                <img src={Cybersecurity_Mentor} alt="" style={{width:"100%"}}/>
                <a href="#"  id="link">Coming Soon..</a>
                </div>
            </div>
         
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card">
                <img src={SDE_Mentor} alt="" style={{width:"100%"}}/>
                <a href="#"  id="link">Coming Soon..</a>
                </div>
            </div>
       
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card">
                <img src={DSC_wow} alt="" style={{width:"100%"}}/>
                <a href="#"  id="link">Coming Soon..</a>
                </div>
            </div>
            </div>
  
  {/* past Event section */}
            


            <h3>Past speaker sessions</h3>
            <div className="row" data-aos="fade-up">
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card" >
                  <img src={Content_mentor} alt="" style={{width:"100%"}}/>
                  <a href="https://youtu.be/iZwkWLHzdeU" id="link">Youtube_Link</a>
                </div>
            </div>
         
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card">
                <img src={FStack} alt="" style={{width:"100%"}}/>
                <a href="https://youtu.be/O0ebFS9eLPI"  id="link">Youtube_Link</a>
                </div>
            </div>
      
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card">
                <img src={ui_ux} alt="" style={{width:"100%"}}/>
                <a href="https://youtu.be/RpGyk9zNyn4"  id="link">Youtube_Link</a>
                </div>
            </div>
    
            </div>
        </div>
        
    );
}
export default Covihack_Event;