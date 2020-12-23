import React from "react";
import "./App.less";
import "antd/dist/antd.less";
import "./theme.less";
import LandingPage from "./pages/LandingPage/LandingPage";
import Register from "./pages/Register/Register";
import { Switch, Route } from "react-router-dom";
import ContactForm from "./pages/ContactForm/ContactForm";

import VenderPage from "./pages/VenderPage/VenderPage";

import VendorRegister from "./pages/VendorRegister/VendorRegister";
import VenderEditProduct from "./components/VenderEditProduct.js/VenderEditProduct";
import AllProducts from "./pages/AllProduct/AllProducts";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Login from "./pages/Login/Login";
import VenderLogin from "./pages/Login/VendorLogin";
import Layout from "./pages/Layout/Layout";
import AllCart from "./pages/AllCard/AllCart";
import { ProductContextProvider } from "./Context/productContext";
import OmiseCheckout from "./components/OmiseCheckout/OmiseCheckout";
import { OrderContextProvider } from "./Context/orderContext";
import { UserContextProvider } from "./Context/userContext";
import UserPage from "./pages/UserPage/UserPage";

const App = () => (
  <UserContextProvider>
    <Layout>
      <Switch>
        <ProductContextProvider>
          <OrderContextProvider>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/vender" component={VenderPage} />
            <Route exact path="/vender/register" component={VendorRegister} />
            <Route
              exact
              path="/vender/product/edit/:id"
              component={VenderEditProduct}
            />
            <Route
              exact
              path="/user"
              component={UserPage}
            />
            <Route exact path="/checkout" component={OmiseCheckout} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/product/:id" component={SingleProduct} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/vender/login" component={VenderLogin} />
            <Route exact path="/cart" component={AllCart} />
          </OrderContextProvider>
        </ProductContextProvider>
      </Switch>
    </Layout>
  </UserContextProvider>
);
export default App;
