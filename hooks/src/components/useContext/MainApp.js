import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})

    // const user ={
    //     id:123,
    //     name: 'leudylandia',
    //     email: 'zyx@yxz.com'
    // }

    return (
        <div>
            <UserContext.Provider value={{
                user, 
                setUser
            }}>
                <AppRouter/>
            </UserContext.Provider>
        </div>
    )
}
