import React from 'react'

export const Qoute = ({quote}) => {

    const saludar = (e) =>{
        alert('Hola')
      }

    return (
        <div>
            <blockquote>
                <p>
                    "{quote.quote}"
                    <br/>
                    <span>- {quote.author}</span>
                </p>
                <center><button onClick={saludar}>Say hola</button></center>
                
            </blockquote>
            
        </div>
    )
}
