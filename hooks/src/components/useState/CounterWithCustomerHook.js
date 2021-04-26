import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomerHook = () => {

    const{state, increment, decrement, reset} = useCounter(5);





    return (
        <div>
            <h1>Counter with Hook: {state}</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={() => increment(2)}
                >+1</button>
            <button 
                className="btn btn-warning"
                onClick={reset}
                >-1</button>
            <button 
                className="btn btn-info"
                onClick={() => decrement(2)}
                >-1</button>
        </div>
    )
}
