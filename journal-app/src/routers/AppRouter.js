import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {firebase} from '../firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setchecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) =>{
      if(user?.ui){
        dispatch(login(user.ui, user.displayName));
        setisLoggedIn(true);
      }
      else{
        setisLoggedIn(false);
      }

      setchecking(false);
    });
  }, [dispatch, setchecking, setisLoggedIn])

  if(checking){
    return (<h1>Cargando...</h1>)
  }
  

  return (
    <Router>
        <div>
            <Switch>
                <PublicRouter path='/auth' component={AuthRouter} isAuthenticated={isLoggedIn}/>
                <PrivateRouter exact path='/' isAuthenticated={isLoggedIn} component={JournalScreen} />
                
                <Redirect to='auth/login'/>
            </Switch>
        </div>
    </Router>
  )
}
