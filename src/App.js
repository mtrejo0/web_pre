import './App.css';
import Home from './containers/home'
import Resume from './containers/resume'
import Projects from './containers/projects'

import NavigationBar from './components/navigationbar'


import { Route, Redirect, Switch, HashRouter, NavLink} from 'react-router-dom'

function App() {

  return (
    <div className="app-background">
      <HashRouter >
        <NavigationBar></NavigationBar>
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
