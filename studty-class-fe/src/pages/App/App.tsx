import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Class from '../Class/Classroom';
import Homepage from '../Homepage/Homepage';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
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
      </Switch>
    </div>
  );
}

export default App;
