import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route , Link , NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Joinus from './Joinus';
import Notfound from './Notfound';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const routing =(
  <Router>
  <div>
  <h1>React Router Example</h1>
  <ul>
  
  <li>
  <NavLink to="/" exact activeStyle={{color:"red"}}>Home</NavLink>
  </li>

  <li>
  <NavLink to="/a" exact activeStyle={{color:"red"}}>About</NavLink>
  </li>

  <li>
  <NavLink to="/j" exact activeStyle={{color:"red"}}>Joinus</NavLink>
  </li>

  </ul>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/a" component={About}/>
  <Route exact path="/j" component={Joinus}/>
  <Route  component={Notfound} />
  </Switch>
  </div>
  </Router>

)
ReactDOM.render(routing, document.getElementById('root'));