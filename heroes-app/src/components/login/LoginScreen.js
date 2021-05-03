import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () =>{
        //history.push('/')
        dispatch({
            type: types.login,
            payload: {
                name: 'Rosario'
            }
        })

        history.push('/')
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-outline-primary"
                onClick={handleLogin}>
                    Login
            </button>
        </div>
    )
}
