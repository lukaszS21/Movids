
import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Redirect, Route} from 'react-router';
import home from './HomePage/Home'
import login from './User/Login'
import register from './User/Register'
import movids from './MainApp/Movids'
function App() {
  return (
      <BrowserRouter>
          <Route exact path={'/'}>
              <Redirect to={'/home'}/>
          </Route>
          <Switch>
              <Route path='/home' exact  component={home}/>
              <Route path='/Login' exact  component={login}/>
              <Route path='/Register' exact  component={register}/>
              <Route path='/Movids' exact  component={movids}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
