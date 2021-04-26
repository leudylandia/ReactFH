import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../useEffect/effects.css'

export const MultipleCustomerHooks = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    

    const {author, quote} = !!data && data[0]; //Los signo de admiracion es para convertir el null el false, con uno seria true

    console.log(author)

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr/>

            {
                loading ? 
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-3">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-info"
                onClick={increment}
            >
                Siguiente      
            </button>     
        </div>
    )
}
