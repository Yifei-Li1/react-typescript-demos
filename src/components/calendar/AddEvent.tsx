import React, { useEffect, useState } from "react";
import { eventT } from "./EventsDetail";
import './calendar.css'

type propsT = {
  handleOnClick: (e: React.MouseEvent) => void;
  handleSubmitTask:(dateInfo:Date,event:eventT)=>void;
  date:Date;
};
const AddEvent = (props: propsT) => {
  const { handleOnClick, handleSubmitTask,date } = props;
  const [event, setEvent] = useState<eventT>();
  const [time,setTime] = useState<string>()
  const [titleInput, setTitleInput] = useState("");
  const handleSubmitTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const temp = { title: titleInput };
      setEvent((prev) => {
        return { title: titleInput, time: prev?.time };
      });
    }
  };
  useEffect(()=>{
    const temp = { title: titleInput };
    setEvent((prev) => {
      return { title: titleInput, time: prev?.time };
    });
  },[titleInput])
  const handleSubmit = ()=>{
    console.log('submit clicked',time,event)
    if(time !== undefined && event !== undefined){
        console.log('add task')
        const timeArr = time?.split(':')
        const hour = timeArr[0]
        const minute = timeArr[1]
        date.setHours(Number(hour))
        date.setMinutes(Number(minute))
        handleSubmitTask(date,event)
    }
    
    

  }
  useEffect(()=>{
    console.log(time)
  },[time])
  return (
    <div className="detail-container" onClick={handleOnClick}>
      <div className="input-container">
        <label className="input-label">add event:</label>
        <input
          className="input"
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          onKeyUp={(e) => handleSubmitTitle(e)}
          placeholder="Add title"
        ></input>
      </div>
      <div>
        <label>add time:</label>

        <span>
          {" "}
          <input className="time-input" type="time" value={time} onChange={(e)=>setTime(e.target.value)}></input>
        </span>
        <div>
          <button onClick={() =>handleSubmit()}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
