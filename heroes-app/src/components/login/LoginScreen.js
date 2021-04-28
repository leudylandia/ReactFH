import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () =>{
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
