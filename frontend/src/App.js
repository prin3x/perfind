import React from "react";
import "./App.less";
import "antd/dist/antd.less";
import "./theme.less";
import LandingPage from "./pages/LandingPage/LandingPage";
import Register from "./pages/Register/Register";
import { Switch, Route } from "react-router-dom";
import ContactForm from "./pages/ContactForm/ContactForm";

import VenderPage from "./pages/VenderPage/VenderPage";
import Layout from "../src/pages/Layout/Layout";
import VenderRegister from "./pages/VenderRegister/VenderRegister";
import VenderEditProduct from "./components/VenderEditProduct.js/VenderEditProduct";
import AllProducts from "./pages/AllProduct/AllProducts";
import Login from "./pages/Login/Login";
import VenderLogin from "./pages/Login/VendorLogin";

const App = () => (
  <Layout>
    <Switch>
      <LandingPage exact path="/" />
      <Route exact path="/register" component={Register} />
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/vender" component={VenderPage} />
      <Route exact path="/vender/register" component={VenderRegister} />
      <Route exact path="/vender/product/edit" component={VenderEditProduct} />

      <Route exact path="/products" component={AllProducts} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/vender/register" component={VenderRegister} />
      <Route exact path="/vender/login" component={VenderLogin} />
    </Switch>
  </Layout>
);
export default App;
