import { useState } from "react";
import AddEvent from "./AddEvent";
import "./calendar.css";
import EventsDetail, { eventT } from "./EventsDetail";

type propsT = {
  today: boolean;
  date:Date|undefined;
  handleSubmitTask:(dateInfo:Date,event:eventT)=>void;
  taskArray:Map<Date,eventT[]>
};
type positionT = {
    x:number;
    y:number;
}

const Datecell = (props: propsT) => {
  const [showDetail, setShowDetail] = useState(false);
  const { date, today,handleSubmitTask,taskArray } = props;
  const [position,setPosition] = useState<positionT>({x:0,y:0})
  const handleOpenDetail = (e: React.MouseEvent) => {
    
    setShowDetail((prev) => !prev);
    setPosition({x:e.pageX,y:e.pageY})
    console.log("detail opened", e.pageX,e.pageY);
    
  };
  const handleDetailClick = (e: React.MouseEvent) => {
    console.log("detial clicked");
    e.stopPropagation();
  };
  return (
    <div
      className={today ? "today date-cell" : "date-cell"}
      onClick={(e) => handleOpenDetail(e)}
    >
      {date !== undefined ? date.getDate() : null}

        {showDetail && date !== undefined ? (
          
          <EventsDetail
            handleOnClick={(e: React.MouseEvent) => handleDetailClick(e)}
            position={position}
            date={date}
            handleSubmitTask = {handleSubmitTask}
            events = {date?taskArray.get(date):undefined}
          />
        ) : null}
      
    </div>
  );
};
export default Datecell;
