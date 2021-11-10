import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Compose from './Compose';
import Emaildetail from './Emaildetail';
import Emailist from './Emailist';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import { selectUser, signin, signout} from './features/userSlice';
import { auth } from './firebase';

function App() {

  const dispatch= useDispatch();
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  
  const user = useSelector(selectUser)
 
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        dispatch(signin({
          displayName:user.displayName,
          photoURL:user.photoURL,
          email:user.email
        }))
      }
      else
      {
      dispatch(signout())
      }
    })
  },[])
  return (
    <Router>
      {
        user && (
          <div className="App">
          <Header/>

          <div className="app__body">
            <Sidebar/>
            <Switch>
                <Route exact path="/">
                  <Emailist/>
                </Route>

                <Route path="/mail">
                  <Emaildetail/>
                </Route>
            </Switch>
           
            
          </div>
          {
            isMessageOpen && <Compose/>
          }
          
      </div>
        )} : {
          
        
      }
      
     
    </Router>
  );
}

export default App;
