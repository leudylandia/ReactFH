import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);
    //console.log(name);

    const history = useHistory();

    

    const handleLogout = () =>{
        dispatch({
            type: types.logout,
            payload:{
                name: ''
            }
        })

        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-lonk text-info mt-2">
                            {name}
                        </span>

                        <button 
                            className="nav-item nav-link float-right btn" 
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
           
        </nav>
    )
}
