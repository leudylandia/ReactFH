import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {

    const {counter, increment} = useCounter(10)
    const [show, setShow] = useState(true)

    const procesoPesado = (iteraciones) =>{
        for(let i = 0; i < iteraciones; i++){
            console.log('Ahi vamos')
        }

        return `${iteraciones} iteraciones realizadas.`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), counter)

    return (
        <div>
            <h1>MemeHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button className="btn btn-outline-primary"
                onClick={increment}
                >
                    +1
                </button>

            <button className="btn btn-outline-info ml-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
