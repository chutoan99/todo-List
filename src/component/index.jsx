import { useState } from 'react';
import './style.css';

function getRandomList() {
    const listColor = ['green', 'blue', 'yellow', 'red', 'gray'];
    const randomIndex = Math.floor(Math.random()*5)
    return listColor[randomIndex];
}

function BoxColor() {
   
    const [color, setColor] = useState(()=>{
        const initistate = localStorage.getItem("box-color") || 'deeppink'
        return initistate
    });
    function handleOnClick(){
        const newList = getRandomList();
        setColor(newList);
        localStorage.setItem("box-color", newList)
    }
    return (
        <div className="content">
            <div 
                className="color-box" 
                onClick={handleOnClick}
                style={{backgroundColor: color}}
                >
            </div>
    </div>
  );
}
export default BoxColor;
