import React, { useRef, useState } from 'react'
import { MultipleCustomerHooks } from '../examples/MultipleCustomerHooks'
import '../useEffect/effects.css'

export const RealExampleRef = () => {

    
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real</h1>
            <hr/>

            { show && <MultipleCustomerHooks/> }

            <button
                className="btn btn-outline-info mt-5"
                onClick={() => setShow(!show)}>
                Show/Hide
            </button>
        </div>
    )
}
