import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    console.log(user)

    return (
        <Router>
            <Switch>
                {/* <Route exact path="/login" component={LoginScreen}/> */}
                <PublicRouter 
                        exact path="/login" 
                        component={LoginScreen}
                        isAuthenticated={user.logged}
                        />
               
                {/* <Route path="/" component={DashboardRoutes}/> */}
                <PrivateRouter 
                    path="/" 
                    component={DashboardRoutes}
                    isAuthenticated={user.logged}
                />
            </Switch>
        </Router>
    )
}
