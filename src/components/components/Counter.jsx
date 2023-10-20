import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
import {BiRefresh } from "react-icons/bi"
import "../../styles/Counter.scss";
import StartClock from "../func/StartClockSession";
import Controls from "./Controls";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> 524533d0444e151ae9bf6b8d043963ac376f7f51

const Counter = () => {
  const sessionTime = useSelector(store => store.reducer.dataSession);
  const breakTime = useSelector(store => store.reducer.dataBreak);

<<<<<<< HEAD
=======

>>>>>>> 524533d0444e151ae9bf6b8d043963ac376f7f51
  const { 
    startSession,
    minutes,
    start,
    seconds,
    stopSession,
    resetSession,
    handleSessionIncrement,
    handleSessionDecrement
  } = StartClock();

<<<<<<< HEAD
=======

>>>>>>> 524533d0444e151ae9bf6b8d043963ac376f7f51
  return (
    <div id="timer-control">

      <Controls 
        name="Break Length"
        counter="5"
        identificador="break-label"
        data={breakTime} />

      <div id="timer-label">
        Session
        <p id="time-left">
          <span>{`${minutes < 10 ? "0" : ""}${minutes}`}</span>:
          <span>{`${seconds < 10 ? "0" : ""}${seconds}`}</span>
        </p>
        <div>
          <button 
            className="buttons"
            onClick={resetSession}>
            <i>
              <BiRefresh size={40}/>
            </i>
          </button>
          <button 
            className="buttons"
            onClick={stopSession}>
              <i>
                <BsFillPauseFill size={40}/>
              </i>
          </button>
          <button 
            className="buttons"
            onClick={startSession}>
              <i>
                <BsFillPlayFill size={40}/>
              </i>
          </button>
        </div>
      </div>

      <Controls 
        start={start}
        name="Session Length"
        counter="25"
        identificador="session-label"
        data={sessionTime}
        sessionIncrement={handleSessionIncrement}
        sessionDecrement={handleSessionDecrement} />
      
    </div>
  )
}

export default Counter
