import React from 'react'
import { Spinner } from './Spinner'

const Card = ({dog, updateDog, loading}) => {

    // const prueba = (nume) =>{
    //     console.log(dog, "card", nume)
    //     alert(nume);
    // }

    if(loading)
        return <Spinner/>
        
    return (
        <>
            <div className="card" onClick={() => updateDog(dog.breed.id)}>
                <img src={dog.image}></img>
                <p>{dog.breed.name}</p>
            </div>

            
        </>
    )
}

export default Card
