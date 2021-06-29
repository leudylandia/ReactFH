import React from 'react'

export const QuotePasarInfo = ({quote, handleNext}) => {
    return (
        <div>
        <blockquote>
            <p>
                "{quote.quote}"
                <br/>
                <span>- {quote.author}</span>
            </p>
            
            <center><button onClick={handleNext} >Try again</button></center>
            
        </blockquote>
        
    </div>
    )
}
