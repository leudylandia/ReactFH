
import React from 'react'

const Card = ({dog}) => {

    console.log(dog, "card")
    return (
        <div className="card">
            <img src={dog.image}></img>
            <p>{dog.breed.name}</p>
        </div>
    )
}

export default Card
