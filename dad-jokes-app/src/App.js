import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './Components/sign_in/SignIn.js'
import Jokes from './Components/jokes/Jokes.js'
import SignUp from './Components/sign_up/SignUp.js'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Route exact path = "/">
      <h1>This is the app motherfucker</h1>
    </Route>
    <Route path = "/login">
      <SignIn/>
    </Route>
    <Route path = "/register">
      <SignUp/>
    </Route>
    <Route path = "/jokes">
      <Jokes/>
    </Route>
    </>
  );
}

export default App;
