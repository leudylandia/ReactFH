import React, { useEffect, useState } from 'react'
import { getBreeds } from '../helpers/getBreeds';

const Initial = [
    {
        id: 1,
        name: "Raza 1"
    },
    {
        id: 2,
        name: "Raza 2"
    }
];

const Select = ({updateDog}) => {

    const [breeds, setBreeds] = useState(Initial)
    //console.log(breeds);

    useEffect(() => {
        updateBreeds();
    }, [])

    const updateBreeds = () =>{
        const info = getBreeds().then((response) =>{ 
            setBreeds(response);
        });
    }

    return (
        <select onChange={(e) => updateDog(e.target.value)}>
            {
                breeds.map((item) => 
                    <option value={item.id} key={item.id}>{item.name}</option>
                )
            }
        </select>
    )
}

export default Select
