import React from "react";
import Carousel from "./Carousel";

const EventContent = () => {
  return (
    <div className="Main_Container">
      <div className="Event_Details">
        <h1>Event name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente
          magnam aperiam delectus alias quo. Molestiae temporibus sequi commodi
          necessitatibus.
        </p>
        <div className="Span_Row1">
          <span className="span">
            <img src="/images/lol.png" />
            &nbsp;&nbsp;
            <p>Lorem ipsum</p>
          </span>
          <span>
            <img src="/images/calender.png" />
            &nbsp;&nbsp;
            <p>10th May</p>
          </span>
        </div>
        <div className="Span_Row2">
          <span className="span">
            <img src="/images/mic.png" />
            &nbsp;&nbsp;
            <p>Dance &amp; Arts</p>
          </span>
          <span>
            <img src="/images/watch.png" />
            &nbsp;&nbsp;
            <p>07:00 PM</p>
          </span>
        </div>
      </div>
      <div className="Map">
        <img src="/images/Map.png" alt="" />
      </div>
      <div className="Organizer_Profile">
        <img src="/images/profileIMG.png" alt="" className="Profile_pic" />
        <p>
          <h3> Event Organiser name</h3>
          12 Events
        </p>
        <img src="/images/public.png" alt="" className="Public_pic" />
      </div>
      <div className="Ticket_Section">
        <p>Tickets starts at <br />
          <h1>15,00</h1> EUR
        </p>
        <button className="Buy_BTN"><b>Buy a Ticket</b></button>
      </div>
      <div className="Carousel_div">
        <h2>Event Images</h2>
        
        <Carousel/>
      </div>
    </div>
  );
};

export default EventContent;
