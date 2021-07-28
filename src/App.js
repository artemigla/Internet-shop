import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Basket from './Components/Pages/Basket';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header data={"Inter Shop"} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/basket" component={Basket} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;