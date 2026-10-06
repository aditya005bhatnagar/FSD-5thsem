import React from 'react'
import { useState } from 'react'
import bird from '../images/bird.png'

function ImageManipulation() {
    const [birdHeight, setBirdHeight] = useState(200);
    const [birdWidth, setBirdWidth] = useState(200);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);


function increaseHeight() {
        setBirdHeight(birdHeight + 20);
}
function increaseWidth() {
        setBirdWidth(birdWidth + 20);
}
function changeColor() {
        setRed(Math.random() * 256);
        setGreen(Math.random() * 256);
        setBlue(Math.random() * 256);
}
function rotateImage() {
        setBirdAngle(birdAngle + 45);
}
}

function ImageManipulation() {
    return (
        <div>
            <h1>Image Manipulation</h1>
            <div style={{backgroundColor: 'rgb($(red),$(green),$(blue))',height:'300px',width:'300px',border:'2px solid red',marginLeft:'300px'}}>
            <img src={bird} alt="Bird" style={{height:'200px',width:'200px', transform: `rotate(${birdAngle}deg)`}} />

            </div>
            <div>
                <button onClick={increaseHeight}>Increase Height</button>
                <button onClick={increaseWidth}>Increase Width</button>
                <button onClick={changeColor}>Change Color</button>
                <button onClick={rotateImage}>Rotate Image</button>
            </div>
        </div>
    )
}
export default ImageManipulation