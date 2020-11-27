import React from "react";
import "./App.less";
import "antd/dist/antd.less";
import LandingPage from "../src/pages/LandingPage/LandingPage";
import Register from "../src/pages/Register/Register";
import { Switch, Route } from "react-router-dom";
import ContactForm from "../src/pages/ContactForm/ContactForm";

import Layout from "../src/pages/Layout/Layout";
import VenderRegister from "../src/pages/VendorRegister/VendorRegister";
import venderLogin from "../src/pages/Login/VendorLogin";
import Login from "../src/pages/Login/Login";

const App = () => (
  <Layout>
    <Switch>
      <LandingPage exact path="/" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/vender/register" component={VenderRegister} />
      <Route exact path="/vender/login" component={venderLogin} />
    </Switch>
  </Layout>
);
export default App;
