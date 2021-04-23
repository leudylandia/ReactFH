import React, {useState} from 'react'
import PropTypes from 'prop-types';


const CounterApp = ({valor}) =>{

    const [counter, setCounter] = useState(valor);

    //console.log(state)


    //handleAdd
    const handleAdd = () =>{
        setCounter(counter + 1);
    }

    //handleAdd
    const handleRemove = () =>{
        setCounter(counter - 1);
    }

    //handleAdd
    const handleReset = () =>{
        setCounter(valor);
    }
   

    return (
        <div>

            <h1>CounterApp</h1>
             <p>{counter}</p>

             <button onClick={handleAdd}>+1</button>
             <button onClick={handleReset}>Reset</button>
             <button onClick={handleRemove}>-1</button>
        </div>
    ); 
}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;