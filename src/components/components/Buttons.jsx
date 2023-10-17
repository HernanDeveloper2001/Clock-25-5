import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
import {BiRefresh } from "react-icons/bi"
import "../../styles/Buttons.scss";

const Buttons = () => {
  return (
    <div id="timer-control">
      <button className="buttons">
        <BsFillPauseFill />
        <BsFillPlayFill />
      </button>
      <button className="buttons">
        <BiRefresh />
      </button>
    </div>
  )
}

export default Buttons
