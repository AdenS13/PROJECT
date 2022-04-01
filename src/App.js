import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './views/Main'
import Register from './views/Register'
import Projects from './views/Projects'
import Profile from './views/Profile'
import Cookie from './views/Cookie'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home">
          <Main />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
        <Route exact path="/cookie">
          <Cookie />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
