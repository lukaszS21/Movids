import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Redirect, Route} from 'react-router';
import home from './HomePage/Home'
function App() {
  return (
      <BrowserRouter>
          <Route exact path={'/'}>
              <Redirect to={'/home'}/>
          </Route>
          <Switch>
              <Route path='/home' exact  component={home}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
