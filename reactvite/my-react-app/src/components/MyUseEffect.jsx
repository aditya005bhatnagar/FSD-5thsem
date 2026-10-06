import React, { useEffect, useState } from 'react'

function MyUseEffect() {
    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(100);

    function increaseCounter() {
        setCounter(counter + 10);
    }

    function decreasePointer() {
        setPointer(pointer - 5);
    }

    useEffect(() => {
        console.log('Counter Value=', counter);
        console.log('Pointer Value=', pointer);
    }, [counter, pointer]);

    return (
        <div>
            <h2>Counter App</h2>
            <h1 style={{ color: 'red' }}>Counter={counter}</h1>
            <button onClick={increaseCounter}>Counter</button>
            <button onClick={decreasePointer}>Pointer</button>
        </div>
    );
}

export default MyUseEffect;
