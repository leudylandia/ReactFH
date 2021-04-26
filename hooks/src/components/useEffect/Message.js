import React, { useEffect } from 'react'

export const Message = () => {
    
    useEffect(() =>{

        window.addEventListener('mousemove', (e) =>{
            const {x, y} = e;

            console.log(x, y);
        });

        console.log('Componente montado')
        return () =>{
            console.log('Componente desmontado')
        }
    })

    return (
        <div>
            <h3>Soy un msj</h3>
        </div>
    )
}
