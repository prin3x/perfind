import React, {Fragment} from 'react';
import './App.less';
import 'antd/dist/antd.less';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Register from './pages/Register/Register';
import {Switch, Route} from 'react-router-dom';

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <LandingPage exact path='/' />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Fragment>
);
export default App;
