import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    // const [counter, setCounter] = useState(10)
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 26,
        counter4: 70
    });

    const {counter1, counter2} = counter;

    const aumentarCounter = () =>{
        setCounter({
            ...counter,
            counter1: counter1 + 1
        })

    }

    return (
        <div>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={() => aumentarCounter()}
            >
                +1
            </button>
        </div>
    )
}
