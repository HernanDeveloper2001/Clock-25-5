import "../../styles/Timer.scss";
import Buttons from "./Buttons";
import Controls from "./Controls";

const Time = () => {
  return (
    <div id="Timer">
      <Controls 
      counter="5"
      identificador="break-label" />
      <Buttons />
      <Controls 
      counter="25"
      identificador="session-label" />
    </div>
  )
}

export default Time
