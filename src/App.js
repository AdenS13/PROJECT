import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './views/Main'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/main">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
