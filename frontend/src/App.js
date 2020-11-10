import React from 'react';
import './App.less';
import 'antd/dist/antd.less';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => (
  <div>
    <Navbar />
    <LandingPage />
  </div>
);
export default App;
