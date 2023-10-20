import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
import {BiRefresh } from "react-icons/bi"
import "../../styles/Counter.scss";
import StartClock from "../func/StartClockSession";
import Controls from "./Controls";
import { useSelector } from "react-redux";
import StartClockBreak from "../func/StartClockBreak";

const Counter = () => {
  //data session redux
  const sessionTime = useSelector(store => store.reducer.dataSession);
  //data session redux
  const breakTime = useSelector(store => store.reducer.dataBreak);

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

  const {
    handleStartBreak,
    minutesBreak,
    secondsBreak,
    stopBreak,
    resetBreak,
    handleBreakIncrement,
    handleBreakDecrement,
  } = StartClockBreak();

  return (
    <div id="timer-control">

      <Controls 
        name="Break Length"
        counter="5"
        identificador="break-label"
        data={breakTime}
        increment={handleBreakIncrement}
        decrement={handleBreakDecrement} />

      {
        minutes === 0 && seconds === 0 
        ? <div id="timer-label">
            Break
            <p id="time-left">
              <span>{`${minutesBreak < 10 ? "0" : ""}${minutesBreak}`}</span>:
              <span>{`${secondsBreak < 10 ? "0" : ""}${secondsBreak}`}</span>
            </p>
            <div>
              <button 
                className="buttons"
                onClick={resetBreak}>
                <i>
                  <BiRefresh size={40}/>
                </i>
              </button>
              <button 
                className="buttons"
                onClick={stopBreak}>
                  <i>
                    <BsFillPauseFill size={40}/>
                  </i>
              </button>
              <button 
                className="buttons"
                onClick={handleStartBreak}>
                  <i>
                    <BsFillPlayFill size={40}/>
                  </i>
              </button>
            </div>
          </div>
        
        : <div id="timer-label">
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
      }

      <Controls 
        start={start}
        name="Session Length"
        identificador="session-label"
        data={sessionTime}
        increment={handleSessionIncrement}
        decrement={handleSessionDecrement} />
      
    </div>
  )
}

export default Counter
