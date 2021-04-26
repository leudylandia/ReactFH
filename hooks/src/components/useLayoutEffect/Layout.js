import React, { useLayoutEffect } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    useLayoutEffect(() => {
        console.log('hey')
    }, [])

    const {quote} = !!data && data[0]; //Los signo de admiracion es para convertir el null el false, con uno seria true

    // console.log(author)

    return (
        <div>
            <h1>Layout </h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p className="mb-3">{quote}</p>
            </blockquote>

            <button className="btn btn-info"
                onClick={increment}
            >
                Siguiente      
            </button>     
        </div>
    )
}
