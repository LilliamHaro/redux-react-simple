import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './views/Home/Home';
import About from './views/About/About';
import Vista3 from './views/Vista3/Vista3';


function App() {
  return (
    <div className="App">
        <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/vista3" component={Vista3} />

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
