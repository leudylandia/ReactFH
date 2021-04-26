import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [{x,y}, setCoords] = useState({x: 0, y: 0})
    
    useEffect(() =>{

       
        window.addEventListener('mousemove', (e) =>{
            //const cordenada = {}
            //setCoords({x: e.x, y: e.y})
            //console.log(x, y);
        });

        console.log('Componente montado')
        return () =>{
            console.log('Componente desmontado')
        }
    })

    return (
        <div>
            <h3>Soy un msj</h3>
            <p>
                x: {x}
            </p>
        </div>
    )
}
