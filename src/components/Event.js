import React, {useState} from "react";
import "./assets/css/event.css";
import Card from "./Cardui";
import Modals from "./Modalui";
import techimg from "./assets/images/tech1.jpg";

function Event(){
    const [event, setEvent] = useState(false);
    const handlecardclick=(e)=>{
        e.preventDefault();
        setEvent(!event);
        if(event){
            document.getElementById('modal').style.display="initial"
        }
        else{
            document.getElementById('modal').style.display="none"

        }
    }
    return(
        <div className="event-page">
            <h1 className="event-heading">Past Events</h1>

            <div className="cards">

                <Card onClick={(e)=>{handlecardclick(e)}} className="event-card" imgsrc={techimg} title="Event 1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />
              
                    <div is="modal">
                        <Modals title="Event 1" body="This is the body of the modal of event 1" />
                    </div>
           

                <Card className="event-card" imgsrc={techimg} title="Event 2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />
                
                <Card className="event-card" imgsrc={techimg} title="Event 3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 4" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 5" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 6" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 7" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 8" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 9" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

            </div>
        </div>
    );
}
s

export default Event;