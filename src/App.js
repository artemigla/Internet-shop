import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Basket from './Components/Pages/Basket';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import style from './Components/Header/Styles/Header.module.scss';

const App = () => {

  const getTheme = () => {
    return (
      JSON.parse(localStorage.getItem("theme")) || false
    )
  }

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={theme ? style.darktheme : ""}>
      <Router>
        <Header data={"Inter Shop"} />
        <div className={style.check}>
          <input className={style.header} type="checkbox" onChange={() => setTheme(!theme)} checked={theme ? { true: false } : ""} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/basket" component={Basket} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
      <Footer />

    </div>
  );
}
export default App;