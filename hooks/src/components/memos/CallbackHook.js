import React, { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = () =>{
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Call back Hook: {counter}</h1>
            <hr></hr>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
