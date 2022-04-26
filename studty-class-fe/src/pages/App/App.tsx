import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import Navbar from '../../components/Navbar/Navbar';
import Class from '../Class/Classroom';
import Homepage from '../Homepage/Homepage';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import DoTest from '../Test/DoTest';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={() => <LandingPage />} />
        <Route path='/login' exact component={Login} />
        <Route path='/homepage' exact component={() => <Homepage />} />
        <Route path='/register' exact component={() => <Register />} />
        <Route path='/active/:code' exact component={Login} />
        <Route path='/class/:id' component={Class} />
        <Route path='/do-test/:id' component={DoTest} />
      </Switch>
    </div>
  );
}

export default App;
