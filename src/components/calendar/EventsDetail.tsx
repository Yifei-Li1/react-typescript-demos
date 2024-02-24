import React, { useState } from "react";
import AddEvent from "./AddEvent";
import "./calendar.css";

type propsT = {
  handleOnClick: (e: React.MouseEvent) => void;
  date:Date;
  position: { x: number; y: number };
  handleSubmitTask:(dateInfo:Date,event:eventT)=>void;
  events:eventT[]|undefined
};
export type eventT = {
  title: string;
  time: Date | undefined;
  
};
const EventsDetail = (props: propsT) => {
  const { handleOnClick, position, events,handleSubmitTask,date} = props;
  
  const [openAddEvent, setOpenAddEvent] = useState(false);
  
  const popupStyle = {
    position: "absolute",
    top: `${position.y + 5}px`,
    left: `${position.x}px`,
    width: "100ugpx",
    height: `min-content`,
    zIndex: "1",
    backgroundColor: `green`,
  } as React.CSSProperties;
  const arrowStyle = {
    position: "absolute",
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: "0",
    height: "0",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    zIndex: "1",
    borderBottom: "5px solid black",
    
  } as React.CSSProperties;
  return (
    <div onClick={handleOnClick}>
      <div style={arrowStyle}></div>
      <div style={popupStyle}>
        {events === undefined
          ? <span style={{pointerEvents:'none'}}>no events added</span>
          : events.map((item) => {
              return <div>{item.title} {item.time?.getTime()}</div>;
            })}

        <button onClick={() => setOpenAddEvent(true)}>add</button>
        {openAddEvent ? (
          <AddEvent
            handleOnClick={(e: React.MouseEvent) => handleOnClick(e)}
            handleSubmitTask={handleSubmitTask}
            date = {date}
          />
        ) : null}
      </div>
    </div>
  );
};

export default EventsDetail;
