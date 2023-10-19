import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { sessionStart,sessionStop,sessionReset } from "../../features/data-clock/clockReducers"
import { sessionIncrement,sessionDecrement,sessionInitialState } from "../../features/data-clock/clockReducers"


const StartClock = () => {

  const sessionTime = useSelector(store => store.reducer.dataSession);
  const [minutes, setMinutes] = useState(sessionTime);
  const [seconds, setSeconds] = useState(0);
  const sessionDispatch = useDispatch()
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setStart(false);
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds, start]);

  const stopSession = () => {
    setStart(false);
    sessionDispatch(sessionStop(minutes))
  };

  function handleSessionIncrement(){
    if(minutes < 60){
      setMinutes(prevMinutes => prevMinutes + 1)
      sessionDispatch(sessionIncrement(1));
    }else {
      alert("solo se puede aumentar hasta  60 minutos")
    }
  }

  function handleSessionDecrement(){
    if(minutes > 1){
      setMinutes(minutes - 1)
      sessionDispatch(sessionDecrement(1));
    }else {
      alert("solo se puede reducir hasta 1 minutos")
    }
  }
  
  const resetSession = () => {
    setStart(false);
    setMinutes(sessionTime);
    setSeconds(0);
    sessionDispatch(sessionReset(30))
  };

  function startSession(){
    setStart(true);
    sessionDispatch(sessionStart(minutes))
  }


  return {
    start,
    startSession,
    minutes,
    seconds,
    setMinutes,
    stopSession,
    resetSession,
    setSeconds,
    setStart,
    handleSessionIncrement,
    handleSessionDecrement,
  }
}

export default StartClock;