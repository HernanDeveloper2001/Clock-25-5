import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { breakIncrement,breakDecrement,breakStart,breakStop,breakReset, } from "../../features/data-clock/clockReducers"
import {Howl} from "howler"
import finishSound from "../../music/finish.wav"



const StartClockBreak = () => {

const breakTime = useSelector(store => store.reducer.dataBreak);
  const [minutesBreak, setMinutesBreak] = useState(breakTime);
  const [secondsBreak, setSecondsBreak] = useState(0);
  const breakDispatch = useDispatch()
  const [startBreak, setStartBreak] = useState(false);

  useEffect(() => {
    let timer;

    if (startBreak) {
      timer = setInterval(() => {
        if (minutesBreak === 0 && secondsBreak === 0) {
          clearInterval(timer);
          setStartBreak(false);
        } else if (secondsBreak === 0) {
            setMinutesBreak(minutesBreak - 1);
            setSecondsBreak(59);
        } else {
            setSecondsBreak(secondsBreak - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [minutesBreak, secondsBreak, startBreak]);

  if(minutesBreak === 0 && secondsBreak === 1) {
    const soundFinish = new Howl({
      src: finishSound,
      volume: 0.5,
      html5: true,
    })
    soundFinish.play()
  }

  function stopBreak (){
    setStartBreak(false);
    breakDispatch(breakStop(minutesBreak))
  }

  function handleBreakIncrement(){
    if(minutesBreak < 60){
        setMinutesBreak(prevMinutes => prevMinutes + 1)
        breakDispatch(breakIncrement(1));
    }
  }

  function handleBreakDecrement(){
    if(minutesBreak > 1){
        setMinutesBreak(minutesBreak - 1)
        breakDispatch(breakDecrement(1));
    }
  }
  
  function resetBreak (){
    setStartBreak(false);
    setMinutesBreak(breakTime);
    setSecondsBreak(0);
    breakDispatch(breakReset(5))
  }

  function handleStartBreak(){
    setStartBreak(true);
    breakDispatch(breakStart(minutesBreak))
  }


  return {
    startBreak,
    handleStartBreak,
    minutesBreak,
    secondsBreak,
    setMinutesBreak,
    stopBreak,
    resetBreak,
    setSecondsBreak,
    setStartBreak,
    handleBreakIncrement,
    handleBreakDecrement,
  }
}

export default StartClockBreak;