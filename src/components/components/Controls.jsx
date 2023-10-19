import { BiUpArrowAlt,BiDownArrowAlt } from "react-icons/bi";
import "../../styles/Controls.scss";


const Controls = ({ identificador,name,data,sessionIncrement,sessionDecrement,start }) => {

  return (
    <div className="length-control">
      <span>{name}</span>
      <div id={identificador}>
        <button 
          id="session-decrement"
          onClick={sessionDecrement}>
          <i>
            <BiDownArrowAlt size={40} />
          </i>
        </button>
        <span>
          { data }
        </span>
        <button 
          className={start ? "desactive" : null}
          id="session-increment" 
          onClick={sessionIncrement}>
          <i>
            <BiUpArrowAlt size={40} />
          </i>
        </button>
      </div>
    </div>
  )
}

export default Controls
