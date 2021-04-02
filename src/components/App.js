import {useState, useRef} from 'react';

import Container from "./container/Container";
import Square from "./square/Square";
import Button from "./forms/Button";
import {blueColors} from './square/color/BlueColors'
import { AlertSuccess, AlertFail, AlertCheck } from './alert/Alert'

const palette = ["red", "orange", "brown", "lime", "green", "grey", "pink", "purple"];
const colorDefault = "blue";


export default function App() {

  const itemRef = useRef([]);
  const [showAlert, setShowAlert] = useState({
    success: false,
    fail: false,
    check: false
  })

  const colors = blueColors(colorDefault)

  const handlePaletteColors = (colors) => {
    for (let i = colors.length+1; i <= 6; i++) {
      let color = palette[Math.floor(Math.random() * palette.length)];
      colors = [...colors,  color];
    }
    return colors.sort(() => Math.random() - 0.5)
  }
  const colorPalette = handlePaletteColors(colors)



  const handleClick = (e) => {
    let currElem = e.target.classList

    if(!currElem.contains("active")) {
      currElem.add("active")
    } else {
      currElem.remove("active")
    }
  }

  function handleHighlight(){
    for(let i = 0; i < itemRef.current.length; i++) {
      let currIndx = itemRef.current[i].classList.value;
      if(currIndx === "square active") {
        itemRef.current[i].classList.remove("active")
      }
    }
  }

  const handleColorCheck = (arrColors, otherColors) => {
    if(arrColors.length === colors.length) {
      setShowAlert({success: !false})
      handleHighlight()
    } else if(arrColors.length === 0 && otherColors.length === 0){
      setShowAlert({check: !false})
    } else if(arrColors.length === 0 || (otherColors.length !== 0 && arrColors.length !== colors.length)) {
      setShowAlert({fail: !false})
      handleHighlight()
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let arrColors = [];
    let otherColors = [];

    for(let i = 0; i < itemRef.current.length; i++) {
      let backgItem = itemRef.current[i].style.backgroundColor;
      let currIndx = itemRef.current[i].classList.value;

      if(backgItem === "blue" &&  currIndx === "square active"){
        arrColors = [...arrColors, backgItem ];
      } else if (backgItem !== "blue" &&  currIndx === "square active") {
        otherColors = [...otherColors, backgItem ]
      }
    }

    handleColorCheck(arrColors, otherColors)

  } 
  
  const handleAlerts = () => {
    if(showAlert.success){
      return <AlertSuccess />
    } else if(showAlert.fail) {
      return <AlertFail />
    } else if(showAlert.check){
      return <AlertCheck />
    }
  }

  return (
    <div className="App">
      <Container>
        {
          colorPalette.map((color, index) => {
            return (
              <Square
                ref={itemRef}
                handleClick={handleClick}
                keyIndex={index}
                key={index}
                bgColor={color} />
            )
          })
        }
        <Button onSubmit={onSubmit} />
        { handleAlerts() }
      </Container>
    </div>
  );
}