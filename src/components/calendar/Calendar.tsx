import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Datecell from "./Datecell";
import "./calendar.css";
import { eventT } from "./EventsDetail";


const Calendar = () => {
  const today = useMemo(() => new Date(), []);
 
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState<number>();
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);
  const [dayArray, setDayArray] = useState<Date[]>([]);
  const [taskArray,setTaskArray] = useState<Map<Date,eventT[]>>(new Map())
  useEffect(() => {
   
    const lastDayOfNextMonth = new Date(year,month + 1,0)
    
    setDaysInMonth(lastDayOfNextMonth.getDate());
    const tempArray = [];
    setFirstDayOfMonth(new Date(year,month,1).getDay());
    for (let i = 1; i <= lastDayOfNextMonth.getDate(); i++) {
      //console.log(today.getFullYear(), today.getMonth(), i);
      tempArray.push(new Date(today.getFullYear(), today.getMonth(), i));
    }
    setDayArray(tempArray);
  }, []);
  useEffect(() => {
    const lastDayOfNextMonth = new Date(year,month + 1,0)
    
    setDaysInMonth(lastDayOfNextMonth.getDate());
    setFirstDayOfMonth(new Date(year,month,1).getDay());
    const tempArrayDate = [];
    for (let i = 1; i <= lastDayOfNextMonth.getDate(); i++) {
      //console.log(temp.getFullYear(), temp.getMonth(), i);
      tempArrayDate.push(new Date(lastDayOfNextMonth.getFullYear(), lastDayOfNextMonth.getMonth(), i));
      
    }
    setDayArray(tempArrayDate)
    const tempArrayTasks = new Map()
    
}, [month]);
  const array = useMemo(() => {
    let temp = [];
    for (let i = 0; i < 42; i++) {
      temp.push(i);
    }
    return temp;
  }, []);

  const handlePrevMonth = () => {
    if (month - 1 < 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };
  const handleNextMonth = () => {
    if (month + 1 > 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };
  const handleSubmitTask = (dateInfo:Date,task:eventT)=>{
    console.log('handle submit task')
    if(taskArray.has(dateInfo)){
        let taskList = taskArray.get(dateInfo)
        if(taskList === undefined){taskList = []}
        taskList.push(task)
        setTaskArray(new Map(taskArray.set(dateInfo,taskList)))
    }
    else{
        setTaskArray(new Map(taskArray.set(dateInfo,[task])))
    }
    
    
  }
  return (
    <>
      <div className="control-container">
        <div>
          <FaArrowAltCircleLeft onClick={() => handlePrevMonth()} />
        </div>
        <div>{month + 1}</div>
        <div>
          <FaArrowAltCircleRight onClick={() => handleNextMonth()} />
        </div>
      </div>

      <div className="calendar-container">
        <div className="calendar-header">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {array.map((item) => {  //0-41
          return (
            <Datecell
              today={
                item - firstDayOfMonth + 1 === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
              }
              date={dayArray.find(
                (date) => date.getDate() === item - firstDayOfMonth + 1
              )}
              handleSubmitTask={handleSubmitTask}
              taskArray = {taskArray}
            />
          );
        })}
      </div>
      <div>Month: {month + 1}</div>
      <div>Year: {year}</div>
      <div>firstDayOfMonth:{firstDayOfMonth}</div>
      <div>number of days in Month: {daysInMonth}</div>
    </>
  );
};

export default Calendar;
