import React from 'react'
import PropTypes from 'prop-types';


const PrimeraApp = ({saludo}) =>{

   

    return (
        <div>
            <h1>{saludo}</h1>
             <p>Mi parrafo</p>
        </div>
    ); 
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;