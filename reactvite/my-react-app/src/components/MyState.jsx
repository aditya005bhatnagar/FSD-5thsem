import React from "react";
import {usestate} from React

function MyState(){
    const [counter,setCounter] = useState(10);
}
function increment(){
    setCounter(counter+10);
}
function decrement(){
    setCounter(counter-10);
}
return (
    <div>
        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
)
