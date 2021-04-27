import React, {useReducer, useEffect} from 'react'
import './style.css'
import {todoReducer} from './todoReducer'
import { useForm } from "../../hooks/useForm";


export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender react',
        done: false
    }]

    const init = () =>{
        return JSON.parse(localStorage.getItem('todos')) || [];
        // return [{
        //     id: new Date().getTime(),
        //     desc: 'Aprender react',
        //     done: false
    // } ]
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [{description}, handleInpuntChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const nuevaTarea = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: nuevaTarea
        }

        dispatch(action);
        reset();
    }

   

    return (
        <div>
            <h1>Tarea {todos.length}</h1>
            <hr></hr>
            
            <div className="row">
                <div className="col-7">
                <ul className="list-group list-group-flush">
                    {
                        todos.map((item, index) =>(
                            <li key={item.id} className="list-group-item">
                                <p className="text-center"><b>{index + 1}.</b> {item.desc}</p>

                                <button className="btn btn-warning">Borrar</button>
                            </li>
                        ))
                    }
            </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar tarea</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Tarea..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInpuntChange}
                        />
                        <button 
                            className="btn btn-outline-primary mt-2 btn-block"
                            type="submit"
                            >Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
