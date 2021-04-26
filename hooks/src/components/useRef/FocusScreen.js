import React, { useRef } from 'react'
import '../useEffect/effects.css'

export const FocusScreen = () => {
    
    const inputRef = useRef();
    console.log(inputRef)

    const handleClick = () =>{
       // inputRef.current.select();
    }

    return(
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input className="form-control"
                placeholder="Your name"
            />

            <button className="btn btn-outline-primary mt-3"
                ref={inputRef}
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
