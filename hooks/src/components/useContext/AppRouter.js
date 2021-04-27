import React from 'react'
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'
import {BrowserRouter as Router,
        Switch,
        Route}
        from 'react-router-dom'
import { NavBar } from './NavBar'

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar/>

                <Switch>
                    <Route exact path="/about" component={AboutScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route component={HomeScreen}/> {/*Si no se encuentra la ruta que valla a home*/}
                </Switch>
            </div>
        </Router>
    )
}
