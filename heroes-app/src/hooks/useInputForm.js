import { useState } from "react"


export const useInputForm = (initialState = {}) => {
   
    const [value, setValue] = useState(initialState);

    //Para resetear o limpiar los valores
    const reset = () =>{
        setValue(initialState);
    }

    //Aqui agregamos el valor ya que resivira la propiedad target del evento y de ahi tomamos el 
    // atributo name que es el nombre identificador del elemento y le asignamos el value que es lo 
    // que el usuario escribio
    const handleInputChange =({target}) =>{
        setValue({
            ...value,
            [target.name]: target.value
        });
    }

    //Returnamos el valor y las funciones
    return [value, handleInputChange, reset];
}
