import React, {useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWinthCustomerHook = () => {

    const [form, handleInputChange] = useForm({
        name: '',
        email:'',
        password: ''
    });

    const {name, email, password} = form;

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(form)
    }

    // const handleInputChange = ({target}) =>{ //estamos destructurando el objet event y tomamos el target
    //     setForm({
    //         ...form,
    //         [target.name]: target.value //es lo mismo de hacer name: e.targuet.value
    //     })
    // }


    return (
        <div>
            <h1>Form Customer Hook</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
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

                <div className='form-group'>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        placeholder="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>
        </div>
    )
}