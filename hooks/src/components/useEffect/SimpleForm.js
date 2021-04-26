import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        name: '',
        email:''
    });

    const {name, email} = form;

    const handleInputChange = ({target}) =>{ //estamos destructurando el objet event y tomamos el target
        setForm({
            ...form,
            [target.name]: target.value //es lo mismo de hacer name: e.targuet.value
        })
    }

    useEffect(() =>{
        console.log('Hey')
    },[]);

    //Efecto solo cuando el formualrio cambia
    useEffect(() =>{
        console.log('Formulario cambió')
    },[form]);

    //Efecto solo cuando el email o cambia
    useEffect(() =>{
        console.log('email cambió')
    },[email]);

    return (
        <div>
            <h1>UseEffect</h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder="Nombre"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {
                (name === '123') && <Message/>
            }
        </div>
    )
}
