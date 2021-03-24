import './App.css';
import Home from './containers/home'
import Resume from './containers/resume'
import Projects from './containers/projects'


import { Route, Redirect, Switch, HashRouter, NavLink} from 'react-router-dom'

function App() {

  var active = {
      fontWeight: 'bold',
      color: '#6b000e'
  }

  return (
    <div className="app-background">
      <HashRouter >
          <ul>
            <li><NavLink to="/home" activeStyle={active}>Home</NavLink></li>
            <li><NavLink to="/resume" activeStyle={active}>About</NavLink></li>
            <li><NavLink to="/projects" activeStyle={active}>Projects</NavLink></li>
          </ul>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/home"/>
          )}/>
          <Route path='/home' component={Home}></Route>
          <Route path='/resume' component={Resume}></Route>
          <Route path='/projects' component={Projects}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
