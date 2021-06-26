import React, { useEffect, useState } from 'react'


const InitialValues = {
    quote: 'No Qoute',
    author: 'No Author'
  }

export const QuotePrueba = () => {

    const [phrase, setPhrase] = useState(InitialValues)
 
    const getQoute = async () =>{
        const url = "http://quotes.stormconsultancy.co.uk/random.json";
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data);
        setPhrase(data);
    }

    useEffect(() => {
        getQoute();
    }, [])

    const handleNext = (e) =>{
        getQoute();
        //alert("hola");
    }

    return (
        <div>
            
            <center>
                <br/>
                <span>Componente de prueba</span><br/>
                <button onClick={(e) => handleNext(e)}>Try next</button>
            </center>
            <blockquote>
                <p>
                    "{phrase.quote}"
                    <br/>
                    <span>- {phrase.author}</span>
                </p>
                
            </blockquote>
        
    </div>
    )
}
