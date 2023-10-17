import { BiUpArrowAlt,BiDownArrowAlt } from "react-icons/bi"
import "../../styles/Controls.scss"

const Controls = ({ counter,identificador }) => {
  return (
    <div className="length-control">
      <span>Break Length</span>
      <div id={identificador}>
        <button id="session-decrement"><BiDownArrowAlt /></button>
        <span>{ counter }</span>
        <button id="session-increment"><BiUpArrowAlt /></button>
      </div>
    </div>
  )
}

export default Controls
