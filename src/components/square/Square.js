import {forwardRef} from 'react'

//Styles
import "./Square.css";

const Square = ({ bgColor, keyIndex, handleClick }, ref) => {
  return (
    <div
      onClick={(e) => handleClick(e)}
      ref={elem => ref.current[keyIndex] = elem}
      className="square"
      style={{backgroundColor: bgColor }}>
      Tap
    </div>
  );
};

export default forwardRef(Square);