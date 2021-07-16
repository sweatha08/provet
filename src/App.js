
import './App.css';
// import Register from './Component/Register/Register';
import Signin from './Component/Signin/Signin';
// import Login from './Component/Login/Login';
// import {BrowserRouter as Route,Router,Switch} from 'react-router-dom';
// import { createBrowserHistory } from 'history';
function App() {
  // const history = createBrowserHistory();
  return (
    <div>
    {/* <Router history={history}> 
    <Switch>   
    <Route exact path='/'  component={Login} />
    <Route exact path='/Register'  component={Register}/>
    </Switch>
    </Router> */}
    <Signin />
    </div>
  );
}

export default App;
